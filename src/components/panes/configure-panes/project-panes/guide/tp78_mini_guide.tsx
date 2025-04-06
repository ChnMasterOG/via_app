import React from 'react';
import WCHISPTool_img from 'src/assets/images/WCHISPTool.png';

const TP78mini_Guide: React.FC = () => {
  // 修订记录数据
  const revisions = [
    { date: '2024/9/9', desc: '适配固件版本 V1.0.0' },
  ];

  // 固件版本更新说明
  const firmwareUpdates = [
    {
      version: 'V1.0.0',
      changes: [
        '首次发行'
      ]
    },
  ];

  // Fn功能说明
  const Fn_desc_map = [
    {
      name: '重置键盘配置',
      key: '5次Fn',
      desc: '按完等待一段时间不要断电'
    },
    {
      name: '切换模式',
      key: 'Fn+7/8/9',
      desc: 'Fn+7 - USB模式；Fn+8 - 蓝牙模式；Fn+9 - RF模式'
    },
    {
      name: '主键盘进入BootLoader模式',
      key: 'Fn+Numlock',
      desc: '按下Fn+B让主键盘进入kboot模式（仅板子带kboot固件才能生效）'
    },
    {
      name: '切换层级',
      key: 'Fn+1/2/3/4/5',
      desc: '切换键盘到不同层级（1~5），不同层有不同的按键定义，可以通过VIA进行修改'
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
      name: '进入U盘模式',
      key: 'Fn+0(USB)',
      desc: '在USB模式下按下Fn+0复位键盘并进入USB+U盘模式（注意：U盘模式下VIA改键无法使用，并且进入U盘模式后下次重启键盘默认失效）'
    },
    {
      name: '蓝牙多设备切换',
      key: 'Fn+0(BLE)',
      desc: '在蓝牙模式下按下Fn+0会切换到下一个蓝牙设备（最多支持4个蓝牙设备）；该操作会自动复位切换到对应设备'
    },
    {
      name: '蓝牙清除绑定信息',
      key: 'Fn+8',
      desc: '如果某个设备号在键盘上被绑定过，则该设备号下不能连接其它设备，需要清除绑定信息。目前只支持一键清除所有绑定信息，按下Fn+8清除所有绑定信息'
    },
    {
      name: '背光模式切换',
      key: 'Fn+除号',
      desc: '按下Fn+除号切换到下一种背光模式，背光模式顺序：关闭(off)/呼吸灯(breath)/流水灯(waterful)/触控呼吸(touch)/彩虹灯(rainbow)/固定亮度(normal)，下电后不保存'
    },
    {
      name: '复位键盘',
      key: 'Fn+Del',
      desc: '执行软复位'
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
      <h1 style={styles.mainheading}>TP78mini 指导手册</h1>
      <div style={styles.versionInfo}>
        手册版本 1.0.0<br/>
        固件版本 1.0.0
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

      <h3>1. 使用WCH官方ISP工具</h3>
      <li>接收器必须用此工具升级，并且工具仅支持windows操作系统，不推荐新手使用。</li>
      <li>工具名称：WCHISPTool_Setup.exe</li>
      <img 
        src={WCHISPTool_img}
        alt="WCHISPTool"
        style={styles.imageStyle}
      />
      <pre style={styles.codeBlock}>
      {`使用步骤：
1. 安装工具和相关驱动
2. 打开软件，选择MCU系列：“32位低功耗蓝牙系列”，芯片选择：CH58x，芯片型号：CH582
3. 拆除外壳按住主板背面boot按键上电进入ROM boot模式
4. 在设备列表找到自己的设备，若找不到请重新拔插USB并尝试
5. 根据需求勾选相关下载配置，一般不需要特殊设置，保持默认即可
6. 选择目标程序文件1，选择固件对应的Hex文件并勾选右侧选项框
7. 点击下载按钮`
      }
      </pre>
      <p style={styles.note_warn}>注意：若为官方渠道购买的核心板自带kboot，不建议使用该方法进行升级，一旦操作不当会将kboot刷掉。若kboot刷掉则不接受无偿重刷固件！！！</p>

      <h3>2. 使用kboot升级固件</h3>
      <li>Github上不包含kboot代码，只有从官方渠道购买的板子默认会刷好kboot固件。没有kboot固件不影响键盘正常使用，有kboot固件的板子建议使用kboot升级固件，无需额外安装软件，升级更加方便和安全</li>
      <pre style={styles.codeBlock}>
      {`使用步骤：
1. 按下Fn+Numlock进入kboot模式/按住Fn键上电进入kboot模式
2. 弹出U盘选择格式化，此时键盘中的主固件被擦除
3. 将新固件（.bin）文件拖进U盘
4. 根据OLED显示，按键W代表方向上，按键S代表方向下，按键Enter代表确认，此时选择Reboot并按下Enter
5. 重启后会弹出U盘里的固件名字，选择Enter后等待几秒升级完毕`
      }
      </pre>
      <p style={styles.note_normal}>注意：若擦除固件未刷入新固件或者刷错固件，键盘会不能使用，此时不需要紧张，按住Fn上电刷入新的固件即可。</p>

      <h2 style={styles.sectionheading}>同步固件的最新改动</h2>
      <li>固件的升级经常伴随对配置的改动，但是在升级固件时不会自动更新旧的配置。通过按下5次Fn会重置配置到当前固件支持的最新版本。</li>

      <h2 style={styles.sectionheading}>教程视频</h2>
      <a href="https://www.bilibili.com/video/BV1jVpneNEpq/" style={styles.learn_more}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor"></path></svg>
        TP78mini介绍
      </a>
      
      <h2 style={styles.sectionheading}>GitHub代码使用注意</h2>
      <li>注意：github上代码固件仅为tp78mini的demo版本，不支持扩展模块功能。</li>
    </div>
  );
};

export default TP78mini_Guide;
