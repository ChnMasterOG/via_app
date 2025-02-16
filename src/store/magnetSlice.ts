import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {KeyboardAPI} from 'src/utils/keyboard-api';
import {getMagnetAPI} from 'src/utils/magnet-api/magnet-api';
import type {ConnectedDevice} from '../types/types';
import {
  getSelectedConnectedDevice,
  getSelectedKeyboardAPI,
} from './devicesSlice';
import type {AppThunk, RootState} from './index';

type MagnetState = {
  magnetThresholdMin: number;
  magnetThresholdMax: number;
  isFeatureSupported: boolean;
};

const magnetInitialState: MagnetState = {
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
  },
});

export const {loadMagnetSuccess, setMagnetNotSupported} =
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
          dispatch(
            loadMagnetSuccess({magnetThresholdMax: data[0], magnetThresholdMin: data[1]}),
          );
        }
      } catch (err) {
        dispatch(setMagnetNotSupported());
      }
    }
  };

export const writeMagnetThr =
  (layer: number, row: number, col: number, manget_value: number): AppThunk =>
  async (dispatch, getState) => {
    const state = getState();
    const api = getSelectedKeyboardAPI(state) as KeyboardAPI;
    const magnetApi = getMagnetAPI(api);
    if (magnetApi) {
      await magnetApi.writeMagnetValue(layer, row, col, manget_value);
    }
  };

export const loadMagnetThr =
  (layer: number, row: number, col: number): AppThunk =>
  async (dispatch, getState) => {
    const state = getState();
    const api = getSelectedKeyboardAPI(state) as KeyboardAPI;
    const magnetApi = getMagnetAPI(api);
    if (magnetApi) {
      await magnetApi.readMagnetValue(layer, row, col);
    }
  };

export const getIsMagnetFeatureSupported = (state: RootState) =>
  state.magnet.isFeatureSupported;

export const getMagneThresholdMax = (state: RootState) =>
  state.magnet.magnetThresholdMax;

export const getMagneThresholdMin = (state: RootState) =>
  state.magnet.magnetThresholdMin;



