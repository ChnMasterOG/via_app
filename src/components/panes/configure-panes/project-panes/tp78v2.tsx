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
          <Label>立创开源广场：TP78</Label>
          <Detail>
            <AccentButton onClick={() => window.open('https://oshwhub.com/bibilala/tp78_2022-08-31')}>Open</AccentButton>
          </Detail>
        </ControlRow>
        <ControlRow>
          <Label>立创开源广场：TP78 foc</Label>
          <Detail>
            <AccentButton onClick={() => window.open('https://oshwhub.com/chnmasterog/tp78_foc_-zhi-neng-xuan-niu-jian-pan-kuo-zhan-mo-kuai')}>Open</AccentButton>
          </Detail>
        </ControlRow>
        <ControlRow>
          <Label>Makerworld：TP78</Label>
          <Detail>
            <AccentButton onClick={() => window.open('https://makerworld.com/zh/models/172159')}>Open</AccentButton>
          </Detail>
        </ControlRow>
        <ControlRow>
          <Label>Makerworld：TP78 foc</Label>
          <Detail>
            <AccentButton onClick={() => window.open('https://makerworld.com/zh/models/604167')}>Open</AccentButton>
          </Detail>
        </ControlRow>
      </Container>
    </SpanOverflowCell>
    </>
  );
};

// TODO: these are used in the context that configure.tsx imports menus with props Icon, Title, Pane.
// Should we encapsulate this type and wrap the exports to conform to them?
export const Icon = faBook;
export const Title = 'TP78v2';
