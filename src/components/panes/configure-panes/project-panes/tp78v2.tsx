import {FC} from 'react';
import styled from 'styled-components';
import {
  ControlRow,
  Label,
  Detail,
  SpanOverflowCell,
} from 'src/components/panes/grid';
import {AccentButton} from 'src/components/inputs/accent-button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';

import TP78v2_Guide from './guide/tp78v2_guide'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`;

export const Pane: FC = () => {
  return (
      <>
      <SpanOverflowCell style={{flex: 1, borderWidth: 0}}>
      <Container>
        <ControlRow>
          <Label>软件开源：Github</Label>
          <Detail>
            <AccentButton onClick={() => window.open('https://github.com/ChnMasterOG/tp78_v2')}>Open</AccentButton>
          </Detail>
        </ControlRow>
        <ControlRow>
          <Label>硬件PCB开源：立创开源广场</Label>
          <Detail>
            <AccentButton onClick={() => window.open('https://oshwhub.com/bibilala/tp78_2022-08-31')}>Open</AccentButton>
          </Detail>
        </ControlRow>
        <ControlRow>
          <Label>硬件3D模型开源：Makerworld</Label>
          <Detail>
            <AccentButton onClick={() => window.open('https://makerworld.com/zh/models/172159')}>Open</AccentButton>
          </Detail>
        </ControlRow>
      </Container>
      <TP78v2_Guide />
      </SpanOverflowCell>
      </>
  );
};

// TODO: these are used in the context that configure.tsx imports menus with props Icon, Title, Pane.
// Should we encapsulate this type and wrap the exports to conform to them?
export const Icon = faBook;
export const Title = 'TP78v2';
