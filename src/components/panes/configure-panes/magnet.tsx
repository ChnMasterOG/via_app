
import {FC} from 'react';
import {useAppDispatch, useAppSelector} from 'src/store/hooks';
import {getSelectedKey} from 'src/store/keymapSlice';
import {updateMagnetVal, getMagnetVal} from 'src/store/magnetSlice'
import {
  ControlRow,
  Label,
  Detail,
} from '../grid';
import {AccentRange} from 'src/components/inputs/accent-range';

export const Pane: FC = () => {
  const magnet = useAppSelector((state: any) => state.magnet);
  const thr_max = magnet.magnetThresholdMax;
  const thr_min = magnet.magnetThresholdMin;

  return (
    <>
    <ControlRow>
      <Label>Global RT Range: </Label>
      <Detail>
      <Label>min - {thr_min}, max - {thr_max}</Label>
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
        <AccentRange
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
