import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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
import type {AppThunk, RootState} from './index';

type MagnetState = {
  magnetCurrentVal: number[];
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
        magval: number[];
      }>,
    ) => {
      const {magval} = action.payload;
      state.magnetCurrentVal = magval;
    },
    setMagnetVal: (
      state,
      action: PayloadAction<{
        keymapIndex: number;
        value: number;
      }>,
    ) => {
      const {keymapIndex, value} = action.payload;

      state.magnetCurrentVal[keymapIndex] = value;
    },
    setMagnetValByRange: (
      state,
      action: PayloadAction<{
        offset: number;
        size: number;
        value: number;
      }>,
    ) => {
      const {offset, size, value} = action.payload;

      for (var i = 0; i < size; i++) {
        state.magnetCurrentVal[offset + i] = value;
      }
    },
  },
});

export const {loadMagnetSuccess, setMagnetNotSupported, loadMagnetValueSuccess, setMagnetVal, setMagnetValByRange} =
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
  
    const keymagnet = await api.getMagnetValueMatrix(matrix);
    dispatch(loadMagnetValueSuccess({magval: keymagnet}));
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

    const {row, col} = keys[keyIndex];
    const {matrix} = selectedDefinition;

    await api.setMagnetValue(row, col, value);
    dispatch(setMagnetVal({keymapIndex: row * matrix.cols + col, value: value}));
  };

export const updateMagnetValByRange =
  (range_min: number, range_max: number, value: number): AppThunk =>
  async (dispatch, getState) => {
    const state = getState();
    const keys = getSelectedKeyDefinitions(state);
    const connectedDevice = getSelectedConnectedDevice(state);
    const api = getSelectedKeyboardAPI(state);
    const selectedDefinition = getSelectedDefinition(state);
    if (!connectedDevice || !keys || !selectedDefinition || !api) {
      return;
    }

    for (var offset = range_min; offset <= range_max; offset += 28) {
      await api.setMagnetValueBuffer(offset, value, range_max - offset >= 28 ? 28 : range_max - offset + 1);
    }
    dispatch(setMagnetValByRange({offset: range_min, size: range_max - range_min + 1, value: value}));
  };

export const updateMagnetValAll =
  (value: number): AppThunk =>
  async (dispatch, getState) => {
    const state = getState();
    const keys = getSelectedKeyDefinitions(state);
    const connectedDevice = getSelectedConnectedDevice(state);
    const api = getSelectedKeyboardAPI(state);
    const selectedDefinition = getSelectedDefinition(state);
    if (!connectedDevice || !keys || !selectedDefinition || !api) {
      return;
    }

    const {matrix} = selectedDefinition;
    const length = matrix.cols * matrix.rows * 2;

    for (var offset = 0; offset < length; offset += 28) {
      await api.setMagnetValueBuffer(offset, value, length - offset > 28 ? 28 : length - offset);
    }
    dispatch(setMagnetValByRange({offset: 0, size: length, value: value}));
  };

export const getMagnetVal = (state: RootState, keyIndex: number) => {
  const keys = getSelectedKeyDefinitions(state);
  const connectedDevice = getSelectedConnectedDevice(state);
  const api = getSelectedKeyboardAPI(state);
  const selectedDefinition = getSelectedDefinition(state);
  if (!connectedDevice || !keys || !selectedDefinition || !api) {
    return 0;
  }

  const {row, col} = keys[keyIndex];
  const {matrix} = selectedDefinition;

  return state.magnet.magnetCurrentVal[row * matrix.cols + col];
};

export const getIsMagnetFeatureSupported = (state: RootState) =>
  state.magnet.isFeatureSupported;

export const getMagneThresholdMax = (state: RootState) =>
  state.magnet.magnetThresholdMax;

export const getMagneThresholdMin = (state: RootState) =>
  state.magnet.magnetThresholdMin;

export const getMagneCurrentVal = (state: RootState) =>
  state.magnet.magnetCurrentVal;

