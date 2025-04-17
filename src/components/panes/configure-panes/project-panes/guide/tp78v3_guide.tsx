import React from 'react';
import BurnTool_img from 'src/assets/images/BurnTool.png';

const TP78v2_Guide: React.FC = () => {
  // 修订记录数据
  const revisions = [
    { date: '2025/4/15', desc: '适配固件版本 V3.0.0' },
  ];

  // 固件版本更新说明
  const firmwareUpdates = [
    {
      version: 'V3.0.0',
      changes: [
        'TP78v3首次发布',
      ]
    },
  ];

  // Fn功能说明
  const Fn_desc_map = [
    {
      name: '重置键盘配置',
      key: '5次Fn',
      desc: '直至OLED提示Reset OK前请勿掉电'
    },
    {
      name: 'OLED参数配置界面',
      key: 'Fn+O',
      desc: '按下Fn+O进入OLED参数配置界面。选择参数时按W和S上下移动、按A和D选择退回上一级菜单或者进入下一级菜单。输入参数值时按下Enter确定、按下Esc返回'
    },
    {
      name: '切换模式',
      key: 'Fn+F10/F11/F12',
      desc: 'Fn+F10 - USB模式；Fn+F11 - 蓝牙模式；Fn+F12 - SLE(星闪)模式'
    },
    {
      name: '接收器进入BootLoader模式',
      key: 'Fn+ESC',
      desc: '按下Fn+ESC让接收器进入BootLoader'
    },
    {
      name: '主键盘进入BootLoader模式',
      key: 'Fn+B',
      desc: '按下Fn+B让主键盘进入BootLoader'
    },
    {
      name: '减小音量',
      key: 'Fn+减号',
      desc: '按下Fn+减号减小音量'
    },
    {
      name: '增大音量',
      key: 'Fn+加号',
      desc: '按下Fn+加号增加音量'
    },
    {
      name: '设置/取消按键宏直发功能(仅SLE模式有效)',
      key: 'Fn+D',
      desc: '按下Fn+D设置宏按键直发功能位(仅SLE模式有效)。设置后宏按键将不会先解析后发送，而是发给接收器解析'
    },
    {
      name: '切换接收器保存的按键宏下标(仅SLE模式有效)',
      key: 'Fn+Z',
      desc: '按下Fn+Z选择接收器保存的按键宏下标(仅SLE模式有效)。设置后再录制宏按键则接收器会录制对应下标的宏按键'
    },
    {
      name: '接收器开始/停止按键宏采集(仅SLE模式有效)',
      key: 'Fn+X',
      desc: '按下Fn+X接收器开始/停止按键宏采集(仅SLE模式有效)'
    },
    {
      name: '清除接收器按键宏(仅SLE模式有效)',
      key: 'Fn+C',
      desc: '按下Fn+C清除接收器按键宏(仅SLE模式有效)。目前只支持一键清除所有按键宏'
    },
    {
      name: '打开/关闭小红点',
      key: 'Fn+T',
      desc: '按下Fn+T打开或关闭小红点，同时开或关触摸条鼠标左右击的功能（触摸条鼠标左右击功能同时受Tbtn_en配置影响）'
    },
    {
      name: '打开/关闭触摸条滑动',
      key: 'Fn+Y',
      desc: '按下Fn+Y打开或关闭触摸条滑动功能'
    },
    {
      name: '蓝牙多设备切换',
      key: 'Fn+1~4',
      desc: '按下Fn+1~4切换蓝牙设备，下电后保存；蓝牙模式下会自动复位切换到对应设备'
    },
    {
      name: '蓝牙清除绑定信息',
      key: 'Fn+0',
      desc: '如果某个设备号在键盘上被绑定过，则该设备号下不能连接其它设备，需要清除绑定信息。目前只支持一键清除所有绑定信息，按下Fn+0清除所有绑定信息'
    },
    {
      name: '背光模式切换',
      key: 'Fn+F1~F6',
      desc: '按下Fn+F1~F6切换背光模式：关闭(off)/呼吸灯(breath)/流水灯(waterful)/触控呼吸(touch)/彩虹灯(rainbow)/固定亮度(normal)，下电后不保存'
    },
    {
      name: '复位键盘',
      key: 'Fn+R',
      desc: '执行软复位'
    },
    {
      name: '版本显示/关闭',
      key: 'Fn+Del',
      desc: '查看/关闭固件版本'
    },
  ];

  // OLED UI介绍
  const oled_ui_desc = [
    {
      name: 'OLED UI主层级',
      menu: [
        'KeyStatus - 显示键盘状态的一些参数',
        'KeyCfg - 设置键盘一些配置',
        'Debug - 普通用户无需关注'
      ]
    },
    {
      name: 'OLED UI KeyStatus层级',
      menu: [
        'bat_adc - 电池电量ADC值',
        'capmouseU/D/L/R - 触摸板电容通道值（键盘默认使用触摸条，因此无需关注）',
        'touchbarL1/L2/L3/M/R1/R2/R3 - 触摸条从左到右电容通道值'
      ]
    },
    {
      name: 'OLED UI KeyCfg层级（该层级下修改内容断电保存配置）',
      menu: [
        'BLEdevice - 蓝牙多设备连接号（0~3）',
        'LEDstyle - 默认背光模式（0~5）',
        '3Mode - 0代表USB模式，1代表蓝牙模式，2代表SLE星闪模式',
        'tpSpd_div - 小红点减速系数（1~9），越大小红点移动越慢',
        'Brightness - 亮度（1~255），请不要修改太大，容易供电不足导致异常',
        'Tbtn_en - 是否使能触摸条触发鼠标按键（0~1），使能后双击触摸条左中右区域会变成按下鼠标左中右键（该配置需要重启生效）',
        'idle_cnt - 设置无操作进入屏保的大约时间（1~65535），单位：秒（该配置需要重启生效）',
        'lp_cnt - 设置无操作进入睡眠的大约时间（1~65535），单位：秒（该配置需要重启生效，该值需要大于idle_cnt才能生效）',
        'motor_en - 使能触摸条触发马达振动功能（该配置需要重启生效）'
      ]
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
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.mainheading}>TP78v3 指导手册</h1>
      <div style={styles.versionInfo}>
        手册版本 1.0.0<br/>
        固件版本 3.0.0
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

      <h3>使用华为的BurnTool</h3>
      <li>工具名称：BurnTool.exe</li>
      <img 
        src={BurnTool_img}
        alt="BurnTool_img"
        style={styles.imageStyle}
      />
      <pre style={styles.codeBlock}>
      {`使用步骤：
1. 打开BurnTool.exe
2. 选择COM端口为TP78v3对应的串口
3. 勾选Auto burn和Auto disconnect
4. 选择打包好的固件包，后缀应该是.fwpkg
5. 点击connect
6. 主键盘按下核心板上的轻触开关或者Fn+B进入下载；接收器按下PCB板上的轻触开关，或者键盘连接上接收器并按下Fn+ESC进入下载
7. 下载完成后断电重新上电，等待一段时间即可更新成功`
      }
      </pre>
      <p style={styles.note_warn}>注意：demo版本可以正常开机，但用官方的完全版固件只支持官方购买的核心板！！！</p>

      <h2 style={styles.sectionheading}>OLED UI介绍</h2>
      {oled_ui_desc.map((rev, index) => (
        <li key={index}>
          <li style={styles.OLEDUIDesc}><strong>{rev.name}</strong>
            <ul>
              {rev.menu.map((change, idx) => (
                <li key={idx}>·{change}</li>
              ))}
            </ul>
          </li>
        </li>
      ))}

      <h2 style={styles.sectionheading}>教程视频</h2>

    </div>
  );
};

export default TP78v2_Guide;
