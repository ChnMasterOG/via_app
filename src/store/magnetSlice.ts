import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from 'src/store/hooks';
import {KeyboardAPI} from 'src/utils/keyboard-api';
import {getMagnetAPI} from 'src/utils/magnet-api/magnet-api';
import type {ConnectedDevice} from '../types/types';
import {
  getSelectedConnectedDevice,
  getSelectedKeyboardAPI,
} from './devicesSlice';
import {
  getDefinitions,
  getSelectedDefinition,
  getSelectedKeyDefinitions,
} from './definitionsSlice';
import {
  getNumberOfLayers,
  getSelectedLayerIndex,
} from 'src/store/keymapSlice';
import type {AppThunk, RootState} from './index';

export type KeyMagnetVal = number[];

type MagnetState = {
  magnetCurrentVal: KeyMagnetVal[];
  magnetThresholdMin: number;
  magnetThresholdMax: number;
  isFeatureSupported: boolean;
};

const magnetInitialState: MagnetState = {
  magnetCurrentVal: [],
  magnetThresholdMin: 0,
  magnetThresholdMax: 100,
  isFeatureSupported: true,
};

const magnetSlice = createSlice({
  name: 'magnet',
  initialState: magnetInitialState,
  reducers: {
    loadMagnetSuccess: (
      state,
      action: PayloadAction<{
        magnetThresholdMin: number;
        magnetThresholdMax: number;
      }>,
    ) => {
      state.magnetThresholdMin = action.payload.magnetThresholdMin;
      state.magnetThresholdMax = action.payload.magnetThresholdMax;
    },
    setMagnetNotSupported: (state) => {
      state.isFeatureSupported = false;
    },
    loadMagnetValueSuccess: (
      state,
      action: PayloadAction<{
        layerIndex: number;
        numberOfLayers: number;
        magval: number[];
      }>,
    ) => {
      const {layerIndex, numberOfLayers, magval} = action.payload;
      state.magnetCurrentVal[layerIndex] = magval;
    },
    setMagnetVal: (
      state,
      action: PayloadAction<{
        layerIndex: number;
        keymapIndex: number;
        value: number;
      }>,
    ) => {
      const {layerIndex, keymapIndex, value} = action.payload;

      state.magnetCurrentVal[layerIndex][keymapIndex] = value;
    },
  },
});

export const {loadMagnetSuccess, setMagnetNotSupported, loadMagnetValueSuccess, setMagnetVal} =
magnetSlice.actions;

export default magnetSlice.reducer;

export const loadMagnet =
  (connectedDevice: ConnectedDevice): AppThunk =>
  async (dispatch, getState) => {
    const {protocol} = connectedDevice;
    if (protocol < 8) {
      dispatch(setMagnetNotSupported());
    } else {
      try {
        const state = getState();
        const api = getSelectedKeyboardAPI(state) as KeyboardAPI;
        const magnetApi = getMagnetAPI(api);
        if (magnetApi) {
          const data = await magnetApi.readMagnetRange();
          if (magnetApi.getValidation() == false) {
            throw "magnet range error!"
          }
          dispatch(
            loadMagnetSuccess({magnetThresholdMin: data[0], magnetThresholdMax: data[1]}),
          );
        }
      } catch (err) {
        dispatch(setMagnetNotSupported());
      }
    }
  };

export const loadMagnetValFromDevice =
  (connectedDevice: ConnectedDevice): AppThunk =>
  async (dispatch, getState) => {
    const state = getState();

    const {path, vendorProductId, requiredDefinitionVersion} = connectedDevice;
    const api = getSelectedKeyboardAPI(state) as KeyboardAPI;

    const {matrix} =
      getDefinitions(state)[vendorProductId][requiredDefinitionVersion];

    const numberOfLayers = state.keymap.numberOfLayers;
  
    for (var layerIndex = 0; layerIndex < numberOfLayers; layerIndex++) {
      const keymagnet = await api.getMagnetValueMatrix(matrix, layerIndex);
      dispatch(loadMagnetValueSuccess({layerIndex: layerIndex, numberOfLayers: numberOfLayers, magval: keymagnet}));
    }
  };

export const updateMagnetVal =
  (keyIndex: number, value: number): AppThunk =>
  async (dispatch, getState) => {
    const state = getState();
    const keys = getSelectedKeyDefinitions(state);
    const connectedDevice = getSelectedConnectedDevice(state);
    const api = getSelectedKeyboardAPI(state);
    const selectedDefinition = getSelectedDefinition(state);
    if (!connectedDevice || !keys || !selectedDefinition || !api) {
      return;
    }

    const selectedLayerIndex = getSelectedLayerIndex(state);
    const {row, col} = keys[keyIndex];
    const {matrix} = selectedDefinition;

    await api.setMagnetValue(selectedLayerIndex, row, col, value);
    dispatch(setMagnetVal({layerIndex: selectedLayerIndex, keymapIndex: row * matrix.cols + col, value: value}));
  };

export const getMagnetVal = (state: RootState, keyIndex: number) => {
  const keys = getSelectedKeyDefinitions(state);
  const connectedDevice = getSelectedConnectedDevice(state);
  const api = getSelectedKeyboardAPI(state);
  const selectedDefinition = getSelectedDefinition(state);
  if (!connectedDevice || !keys || !selectedDefinition || !api) {
    return 0;
  }

  const selectedLayerIndex = getSelectedLayerIndex(state);
  const {row, col} = keys[keyIndex];
  const {matrix} = selectedDefinition;

  return state.magnet.magnetCurrentVal[selectedLayerIndex][row * matrix.cols + col];
};

export const getIsMagnetFeatureSupported = (state: RootState) =>
  state.magnet.isFeatureSupported;

export const getMagneThresholdMax = (state: RootState) =>
  state.magnet.magnetThresholdMax;

export const getMagneThresholdMin = (state: RootState) =>
  state.magnet.magnetThresholdMin;

export const getMagneCurrentVal = (state: RootState) =>
  state.magnet.magnetCurrentVal;

