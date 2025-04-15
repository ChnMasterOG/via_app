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
import {TP78Logo} from '../../../icons/tp78';

import TP78v3_Image1 from 'src/assets/images/TP78v3_Image1.png';
import TP78v3_Guide from './guide/tp78v3_guide'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`;

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: 0.6,
    maxWidth: '800px',
    fontSize: '20px',
    textIndent: "2em",
    padding: '20px'
  },
  imageStyle: {
    width: '100%',
    maxWidth: '800px',
    margin: '10px auto',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }
};

export const Pane: FC = () => {
  return (
    <>
      <SpanOverflowCell style={{flex: 1, borderWidth: 0}}>
      <Container>
        <img 
          src={TP78v3_Image1}
          alt="TP78v3_Image"
          style={styles.imageStyle}
        />
        <li style={styles.container}>TP78v3是基于海思的SoC Hi2821三模机械键盘方案</li>
        <li style={styles.container}>芯片特性：USB2.0高速(8K回报率)、BLE5.4、星闪SLE1.0连接，硬件按键扫描功能</li>
        <li style={styles.container}>TP78v2全功能软件支持：包括小红点、触摸条控制，OLED显示，磁吸扩展接口</li>
        <li style={styles.container}>TP78v2硬件适配：只需更换TP78v2的主键盘核心板</li>
        <li style={styles.container}>新功能：支持下位机宏录制，与TP78v3配套星闪鼠标、SLE接收器支持键鼠宏控制</li>

        <TP78v3_Guide />
      </Container>
    </SpanOverflowCell>
    </>
  );
};

// TODO: these are used in the context that configure.tsx imports menus with props Icon, Title, Pane.
// Should we encapsulate this type and wrap the exports to conform to them?
export const Icon = faBook;
export const SVG_Icon = TP78Logo;
export const Title = 'TP78v3';
