
import {FC, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'src/store/hooks';
import {getSelectedKey} from 'src/store/keymapSlice';
import {updateMagnetVal, getMagnetVal, updateMagnetValAll} from 'src/store/magnetSlice'
import {
  ControlRow,
  Label,
  Detail,
} from '../grid';
import {AccentButton} from 'src/components/inputs/accent-button';
import {AccentRange} from 'src/components/inputs/accent-range';
import {AccentRangeButton} from 'src/components/inputs/accent-range-button';

export const Pane: FC = () => {
  const dispatch = useAppDispatch();
  const magnet = useAppSelector((state: any) => state.magnet);
  const thr_max = magnet.magnetThresholdMax;
  const thr_min = magnet.magnetThresholdMin;
  const [globalRtValue, setGlobalRtValue] = useState<number>(thr_min || 0);

  return (
    <>
    <ControlRow>
      <Label>Global RT Range: </Label>
      <Detail>
      <Label>min - {thr_min}, max - {thr_max}</Label>
      </Detail>
    </ControlRow>
    <ControlRow>
      <Label>Global RT Value: {globalRtValue}</Label>
      <Detail>
      <AccentRangeButton
        max={thr_max}
        min={thr_min}
        value={globalRtValue}
        onChange={setGlobalRtValue}
      />
      </Detail>
    </ControlRow>
    <ControlRow>
      <Label>Set Global RT Value</Label>
      <Detail>
      <AccentButton onClick={() => dispatch(updateMagnetValAll(globalRtValue))}>Set</AccentButton>
      </Detail>
    </ControlRow>
    </>
  );
};

export const SpecificPane: FC = () => {
  const dispatch = useAppDispatch();
  const selectedKey = useAppSelector(getSelectedKey);
  const state = useAppSelector((state: any) => state);
  const magnet = useAppSelector((state: any) => state.magnet);
  const thr_max = magnet.magnetThresholdMax;
  const thr_min = magnet.magnetThresholdMin;

  if (selectedKey !== null) {
    const cur_val = getMagnetVal(state, selectedKey);
    return (
      <>
      <ControlRow>
        <Label>Current RT Value: {cur_val}</Label>
        <Detail>
        <AccentRangeButton
          max={thr_max}
          min={thr_min}
          value={cur_val}
          onChange={(value: number) => {
            dispatch(updateMagnetVal(selectedKey, value));
          }}
        />
        </Detail>
      </ControlRow>
      </>
    );
  }

  return null;
}
