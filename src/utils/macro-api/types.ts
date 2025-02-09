export enum RawKeycodeSequenceAction {
  Tap = 1,
  Down = 2,
  Up = 3,
  Delay = 4,
  MouseClick = 5,
  MouseMoveX = 6,
  MouseMoveY = 7,
  MouseMoveZ = 8,
  CharacterStream = 9,
}

export enum GroupedKeycodeSequenceAction {
  Chord = 10,
}

export type RawKeycodeSequenceItem = [
  RawKeycodeSequenceAction,
  string | number,
];

export type RawKeycodeSequence = RawKeycodeSequenceItem[];

export type GroupedKeycodeSequenceItem = [
  GroupedKeycodeSequenceAction,
  string[],
];

export type OptimizedKeycodeSequenceItem =
  | RawKeycodeSequenceItem
  | GroupedKeycodeSequenceItem;

export type OptimizedKeycodeSequence = OptimizedKeycodeSequenceItem[];
