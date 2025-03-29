import React from 'react';
import ESP32_Flash_Download_Tool_img from 'src/assets/images/ESP32_Flash_Download_Tool.png';
import TP78foc_Update_Tool_img from 'src/assets/images/TP78foc_Update_Tool.png';
import SurfaceDial_img1 from 'src/assets/images/SurfaceDial_Image1.png';
import SurfaceDial_img2 from 'src/assets/images/SurfaceDial_Image2.png';
import Screen_Calibration_img from 'src/assets/images/Screen_Calibration.png';
import Pressure_Calibration_img from 'src/assets/images/Pressure_Calibration.png';
import TP78foc_MacroMapping_img1 from 'src/assets/images/TP78foc_MacroMapping_Image1.png';
import TP78foc_MacroMapping_img2 from 'src/assets/images/TP78foc_MacroMapping_Image2.png';

const TP78foc_Guide: React.FC = () => {
  // 修订记录数据
  const revisions = [
    { date: '2024/9/9', desc: '初始版本，适配固件版本V1.0.1' },
    { date: '2024/11/10', desc: '适配固件版本V1.0.2' },
    { date: '2024/11/25', desc: '适配固件版本V1.0.3' },
  ];

  // 固件版本更新说明
  const firmwareUpdates = [
    {
      version: 'V1.0.1',
      changes: [
        '首发版本',
      ]
    },
    {
      version: 'V1.0.2',
      changes: [
        '更新压力校准显示压力数值',
        '更新未校准压力或恢复出产设置后，不会因为默认值不准确导致错误的按下旋钮'
      ]
    },
    {
      version: 'V1.0.3',
      changes: [
        '更新压力校准算法和按压检测算法（部分硬件在4个区域按下的压力数值有所不同，因此软件做了适配）',
      ]
    },
  ];

  // Fn功能说明
  const Fn_desc_map = [
    {
      name: '重置键盘配置',
      key: '5次Fn',
      desc: '直至LCD显示Reset OK前请勿掉电'
    },
    {
      name: '进入/退出菜单',
      key: 'Fn+Enter',
      desc: '当压力未校准时可以通过该快捷键进退菜单。若当前模式在surface dial下时，退出菜单必须使用Fn+Enter'
    },
  ];

  // CSS 样式
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    },
    mainheading: {
        color: '#ffffff',
        fontSize: '35px',
        textAlign: 'center' as const,
        margin: '20px 0'
    },
    sectionheading: {
        color: '#ffffff',
        fontSize: '28px',
        textAlign: 'center' as const,
        margin: '15px 0'
    },
    versionInfo: {
        textAlign: 'center' as const,
        fontSize: '15px',
        color: '#cccccc',
        margin: '10px 0 30px 0'
    },
    FnDesc: {
        margin: '10px 0 10px 0'
    },
    OLEDUIDesc: {
        margin: '5px 0 5px 0'
    },
    revisionsInfo: {
        textAlign: 'left' as const,
        fontSize: '0.95em',
        color: '#dddddd',
    },
    redText: {
        color: '#ff0000',
        fontWeight: 'bold' as const
    },
    note_warn: {
        fontSize: '18px',
        color: '#d32f2f',
    },
    note_normal: {
        fontSize: '18px',
        color: '#ffffff',
    },
    learn_more: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: '22px',
        color: '#cccccc',
    },
    codeBlock: {
      background: '#000',
      padding: '10px',
      borderRadius: '5px',
      whiteSpace: 'pre-wrap' as const
    },
    imageStyle: {
      display: 'block',
      width: '100%',
      maxWidth: '800px',
      margin: '10px auto',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    midimageStyle: {
      display: 'block',
      width: '100%',
      maxWidth: '250px',
      margin: '10px auto',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.mainheading}>TP78foc 指导手册</h1>
      <div style={styles.versionInfo}>
        手册版本 1.0.1<br/>
        固件版本 1.0.3
      </div>

      <h2 style={styles.sectionheading}>修订记录</h2>
      {revisions.map((rev, index) => (
        <li key={index}>
          <li style={styles.revisionsInfo}><strong>{rev.date}</strong> - {rev.desc}</li>
        </li>
      ))}

      <h2 style={styles.sectionheading}>固件更新说明</h2>
      {firmwareUpdates.map((fw, index) => (
        <div key={index}>
          <h3>固件版本 {fw.version}</h3>
          <ul>
            {fw.changes.map((change, idx) => (
              <li key={idx}>·{change}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 style={styles.sectionheading}>Fn键功能一览</h2>
      {Fn_desc_map.map((rev, index) => (
        <li key={index}>
          <li style={styles.FnDesc}>·<strong>{rev.key}</strong> - {rev.name}: {rev.desc}</li>
        </li>
      ))}

      <h2 style={styles.sectionheading}>升级固件的方法</h2>

      <h3>1. 使用乐鑫官方的ESP32工具升级</h3>
      <li>不推荐新手使用，但如果是空片首次需要使用该工具下载固件。</li>
      <li>工具名称：flash_download_tool_3.9.7.exe（版本号可新可旧）以及esptool.exe</li>
      <img 
        src={ESP32_Flash_Download_Tool_img}
        alt="ESP32_Flash_Download_Tool"
        style={styles.imageStyle}
      />
      <pre style={styles.codeBlock}>
      {`使用步骤：
1. 连接USB TypeC接口，电脑上进入工具目录中
2. 打开命令提示窗，输入：.\esptool.exe run，提示错误：COMxx failed to connect...是正常现象
3. 双击打开flash_download_tool_3.9.7.exe
4. 配置ChipType为ESP32-S3，WorkMode为Develop，LoadMode为USB
5. 点击OK后加载4个分区的bin文件
6. 注意选择对应的COM口，进入bootloader后，会新增一个COM口
7. 点击START直至下载完成后重启`
      }
      </pre>

      <h3>2. 使用TP78集成工具升级固件</h3>
      <li>TP78集成工具是TP78系列键盘通用上位机工具，相比1方法升级固件更简单，升级过程中出现掉电也不会损坏当前固件，更加安全</li>
      <p style={styles.note_warn}>注意：空片无法用该工具下载，该工具只下载firmware主分区！！！</p>
      <a href="https://github.com/ChnMasterOG/TP78-Integrated-Tools/releases/download/V1.0.0/TP78.Integrated.Tools.zip" style={styles.learn_more}>
        点击这里下载TP78集成工具
      </a>
      <img 
        src={TP78foc_Update_Tool_img}
        alt="TP78foc_Update_Tool"
        style={styles.imageStyle}
      />
      <pre style={styles.codeBlock}>
      {`使用步骤：
1. 连接USB TypeC接口，电脑上打开工具，选择TP78foc固件升级工具
2. 点击选择固件后点击更新固件即可，注意：这里的固件只要选择固件的主分区——firmware.bin`
      }
      </pre>

      <h2 style={styles.sectionheading}>菜单介绍</h2>
      <h3>·Surface Dial</h3>
      <li style={{ textIndent: "2em" }}>
        该功能需要windows支持旋钮外设，以win11为例：
      </li>
      <img 
        src={SurfaceDial_img1}
        alt="SurfaceDial1"
        style={styles.imageStyle}
      />
      <li style={{ textIndent: "2em" }}>
        在设置中选择“蓝牙和其他设备-滚轮”：
      </li>
      <img 
        src={SurfaceDial_img2}
        alt="SurfaceDial2"
        style={styles.imageStyle}
      />
      <li style={{ textIndent: "2em" }}>
        可以设置不同工具。
      </li>
      <li style={{ textIndent: "2em" }}>
        若软件支持使用旋钮功能，也可以进行设置。更多功能可以在微软官网查看，文档中不再赘述。
      </li>
      <h3>·多媒体控制</h3>
      <li style={{ textIndent: "2em" }}>
        目前只支持音量调节，后续可能会增加其他多媒体控制。
      </li>
      <h3>·番茄钟</h3>
      <li style={{ textIndent: "2em" }}>
        该功能旨在做一个久坐提醒，倒计时结束后会发起振动。
      </li>
      <h3>·屏幕校准（参数会保存，除非被清除）</h3>
      <img 
        src={Screen_Calibration_img}
        alt="Screen_Calibration"
        style={styles.midimageStyle}
      />
      <li style={{ textIndent: "2em" }}>
        屏幕安装并非旋钮正中间，因此需要做屏幕校准，将显示位置调整到旋钮中间。按下1表示调整X轴（最低偏移不能为负数），2表示调整Y轴（最低偏移不能为负数），3表示调整宽度缩放（例如需要向左移动，但X轴基准已经到0，此时可以缩小宽度，使得屏幕处于正中间），4表示调整高度缩放（例如需要向上移动，但Y轴基准已经到0，此时可以缩小高度，使得屏幕处于正中间）。
      </li>
      <li style={{ textIndent: "2em" }}>
        <strong>
          校准后，需要重启生效。
        </strong>
      </li>
      <h3>·压力校准（参数会保存，除非被清除）</h3>
      <img 
        src={Pressure_Calibration_img}
        alt="Pressure_Calibration"
        style={styles.midimageStyle}
      />
      <li style={{ textIndent: "2em" }}>
        若一开始没有压力参数，压力校准是第一步需要校准的步骤。该模式通过检测按压4个区域和弹起的压力传感器数值进行校准压力。进入压力校准模式的前3秒不要按压旋钮，进入压力校准模式后分别按下旋钮的4个区域（稍微用点力），可以观察到屏幕的压力数值明显改变，最后按Fn+回车退出该模式。
      </li>
      <li style={{ textIndent: "2em" }}>
        <strong>
          校准后，需要重启生效。若一开始旋钮没有压力参数，需要通过Fn+回车进入该模式。若按Fn+回车无法进入该模式，请先重置所有配置。
        </strong>
      </li>
      <li style={{ textIndent: "2em", color: '#dd0000', }}>
        <strong>
          V1.0.2版本后，压力校准会显示当前压力传感器采集的数值。
        </strong>
      </li>
      <h3>·测试模式</h3>
      <li style={{ textIndent: "2em" }}>
        该模式仅出产测试使用，普通用户无需关注。
      </li>

      <h2 style={styles.sectionheading}>轴体识别</h2>
      <li style={{ textIndent: "2em" }}>
        轴体识别功能会在上电自动识别硬件所连接的轴体，目前固件只支持机械轴体，但识别功能依然会存在。
      </li>
      <li style={{ textIndent: "2em" }}>
        当开机右上角出现
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <title>磁轴图标</title>
          <defs>
            <image width="15" height="16" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQAQMAAADzmLdHAAAAAXNSR0IB2cksfwAAAAZQTFRFAAAA////pdmf3QAAAAJ0Uk5TAP9bkSK1AAAAMklEQVR4nGNkv8kof5HRgoHRfCljDgNjxhHGF24gUscBJCKhwMj/kJH/IiOPCAjV1wIAJEQLcz+K37cAAAAASUVORK5CYII="/>
          </defs>
          <style>
          </style>
          <use id="Background" href="#img1" x="0" y="0"/>
        </svg>
        图标的时候表示当前处于磁轴工作模式，否则为机械轴。
      </li>
      <li style={{ textIndent: "2em" }}>
        升级固件结束后复位可能会出现轴体识别不准确的情况，此时只需要重新开关电源即可恢复。
      </li>

      <h2 style={styles.sectionheading}>组合键</h2>
      <li style={{ textIndent: "2em" }}>
        组合键1/2/3允许非上位机或软件特殊适配而支持模拟任意按键宏+鼠标操作。TP78foc最多支持20个按键宏。根据VIA中的globalsettings，设定组合键映射按键宏的下标0, 2, 4, 6, ... , 18。例如设定的是0，则左旋代表按下M0按键，右旋按下M1按键；设定的是2，则左旋代表按下M2按键，右旋代表按下M3按键，以此类推。
      </li>
      <img 
        src={TP78foc_MacroMapping_img1}
        alt="TP78foc_MacroMapping1"
        style={styles.imageStyle}
      />
      <li style={{ textIndent: "2em" }}>
        MacroMouseSettings表示每个按键宏对应的鼠标操作（下标从1开始），正常是20个，但layerout未更新，图中只显示6个。例如：图中当前配置为M0操作（左旋）为鼠标向上滚动，M1操作（右旋）为鼠标向下滚动。
      </li>
      <img 
        src={TP78foc_MacroMapping_img2}
        alt="TP78foc_MacroMapping2"
        style={styles.imageStyle}
      />
      
      <h2 style={styles.sectionheading}>教程视频</h2>
      <a href="https://www.bilibili.com/video/BV1jVpneNEpq/" style={styles.learn_more}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor"></path></svg>
        功能介绍
      </a>

      <li>
        <br></br>其他未尽事宜，以官方发布信息为准。
        <br></br>若有其他问题，请在技术交流QQ群：678606780中提问。
      </li>
    </div>
  );
};

export default TP78foc_Guide;
