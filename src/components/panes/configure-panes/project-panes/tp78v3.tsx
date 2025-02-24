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
          <Label>TODO</Label>
        </ControlRow>
      </Container>
    </SpanOverflowCell>
    </>
  );
};

// TODO: these are used in the context that configure.tsx imports menus with props Icon, Title, Pane.
// Should we encapsulate this type and wrap the exports to conform to them?
export const Icon = faBook;
export const Title = 'TP78v3';
