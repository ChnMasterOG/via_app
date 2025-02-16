import type {KeyboardAPI} from '../keyboard-api';

export function validateMagnetExpression(
  data: number[],
): boolean {
  if (data[0] < data[1]) {
    return true;
  } else {
    return false;
  }
}

export class MagnetAPI {
  constructor(
    private keyboardApi: "" | KeyboardAPI | null,
  ) {}

  public valid = false;

  setValidation(data: number[]) {
    this.valid = validateMagnetExpression(data);
  }

  async readMagnetRange() {
    if (this.keyboardApi) {
      const bytes = await this.keyboardApi.getMagnetRange();
      this.setValidation(bytes);
      return bytes;
    } else {
      return [];
    }
  }

  async writeMagnetValue(
    layer: number,
    row: number,
    col: number,
    data: number
  ) {
    if (this.keyboardApi) {
      await this.keyboardApi.setMagnetValue(layer, row, col, data);
    }
  }

  async readMagnetValue(
    layer: number,
    row: number,
    col: number
  ) {
    if (this.keyboardApi) {
      return await this.keyboardApi.getMagnetValue(layer, row, col);
    }
  }
}

export const getMagnetAPI = (keyboardApi: KeyboardAPI) => {
  return new MagnetAPI(keyboardApi);
};
