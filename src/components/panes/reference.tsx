import {useState, FC} from 'react';
import {Pane} from './pane';
import styled from 'styled-components';
import {
  Grid,
  MenuCell,
  Row,
  IconContainer,
} from './grid';
import {MenuContainer} from './configure-panes/custom/menu-generator';
import {MenuTooltip} from '../inputs/tooltip';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';

import * as tp78v2 from "src/components/panes/configure-panes/project-panes/tp78v2"
import * as tp78v3 from "src/components/panes/configure-panes/project-panes/tp78v3"
import * as tp78_mini from "src/components/panes/configure-panes/project-panes/tp78_mini"
import * as tp78_foc from "src/components/panes/configure-panes/project-panes/tp78_foc"
import * as fififun from "src/components/panes/configure-panes/project-panes/fififun"

type row_header = {
  title: string;
  icon: any;
  fc: FC;
};

export const Reference = () => {
  const KeyboardRows : row_header[] = [
    {title: tp78v2.Title, icon: tp78v2.Icon, fc: tp78v2.Pane},
    {title: tp78v3.Title, icon: tp78v3.Icon, fc: tp78v3.Pane},
    {title: tp78_mini.Title, icon: tp78_mini.Icon, fc: tp78_mini.Pane},
    {title: tp78_foc.Title, icon: tp78_foc.Icon, fc: tp78_foc.Pane},
    {title: fififun.Title, icon: fififun.Icon, fc: fififun.Pane},
  ];
  const [selectedRow, setRow] = useState(0);
  const _fc : FC = KeyboardRows[selectedRow].fc;

  return (
    <Pane>
      <Grid style={{overflow: 'hidden'}}>
        <MenuCell style={{pointerEvents: 'all', borderTop: 'none'}}>
          <MenuContainer>
          {(KeyboardRows || []).map(
              (header, idx: number) => (
                  <Row
                    key={idx}
                    onClick={(_) => setRow(idx)}
                    $selected={selectedRow === idx}
                  >
                    <IconContainer>
                      <FontAwesomeIcon icon={header.icon} />
                      <MenuTooltip>{header.title}</MenuTooltip>
                    </IconContainer>
                  </Row>
              ),
            )
          }
          </MenuContainer>
        </MenuCell>
        {<_fc />}
      </Grid>
    </Pane>
  );
};
