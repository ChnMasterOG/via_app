import {Pane} from './pane';
import styled from 'styled-components';
import {
  ControlRow,
  Label,
  Detail,
  Grid,
  MenuCell,
  Row,
  IconContainer,
  SpanOverflowCell,
} from './grid';
import {AccentButton} from '../inputs/accent-button';
import {MenuContainer} from './configure-panes/custom/menu-generator';
import {MenuTooltip} from '../inputs/tooltip';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookOpen} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`;

export const Reference = () => {
  return (
    <Pane>
      <Grid style={{overflow: 'hidden'}}>
        <MenuCell style={{pointerEvents: 'all', borderTop: 'none'}}>
          <MenuContainer>
            <Row $selected={true}>
              <IconContainer>
                <FontAwesomeIcon icon={faBookOpen} />
                <MenuTooltip>General</MenuTooltip>
              </IconContainer>
            </Row>
          </MenuContainer>
        </MenuCell>
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
      </Grid>
    </Pane>
  );
};
