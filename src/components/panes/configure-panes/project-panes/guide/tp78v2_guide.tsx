import React from 'react';
import WCHISPTool_img from 'src/assets/images/WCHISPTool.png';

const TP78v2_Guide: React.FC = () => {
  // 修订记录数据
  const revisions = [
    { date: '2024/3/8', desc: '适配固件版本 V2.0.12' },
    { date: '2024/3/16', desc: '适配固件版本 V2.0.13' },
    { date: '2024/3/24', desc: '增加教程视频' },
    { date: '2024/3/24', desc: '增加固件版本更新说明' },
    { date: '2024/6/14', desc: '适配固件版本 V2.1.1，从 2.0.x 版本升级到该版本固件需要同步更新最新接收器固件，否则无法正常使用 RF 模式' },
    { date: '2024/6/18', desc: '适配固件版本 V2.1.2' },
    { date: '2024/7/20', desc: '适配固件版本 V2.1.3，增加图文教程、图标示意。从 2.1.3 之前的版本升级到该版本固件需要同步更新最新接收器固件，否则无法正常使用 RF 模式' },
    { date: '2024/9/1', desc: '适配固件版本 V2.1.5' },
    { date: '2024/10/23', desc: '适配固件版本 V2.1.6' },
    { date: '2024/11/6', desc: '适配固件版本 V2.1.7' },
    { date: '2025/1/14', desc: '适配固件版本 V2.1.8' },
    { date: '2025/2/22', desc: '适配固件版本 V2.1.9' },
    { date: '2025/3/22', desc: '适配固件版本 V2.1.10' },
  ];

  // 固件版本更新说明
  const firmwareUpdates = [
    {
      version: 'V2.0.11',
      changes: [
        '修复部分硬件OLED上电不亮的问题',
        'Relase版本增加起始0x0地址的固件版本',
        '修复多按键按下弹起任意一个按键导致所有按键被弹起的问题'
      ]
    },
    {
      version: 'V2.0.12',
      changes: [
        '增加游戏模式（降低键盘延迟，提升响应速度。相对地，游戏模式下关闭部分功能）',
        '修改接收器进BOOT模式为Fn+ESC'
      ]
    },
    {
      version: 'V2.0.13',
      changes: [
        '优化低功耗模式，修改后灭屏蓝牙不会断连',
        '增加进入屏保和低功耗时间可配置'
      ]
    },
    {
      version: 'V2.0.14',
      changes: [
        '修复SP键无法正常工作的BUG',
        '增加小红点读取数据期间禁用中断'
      ]
    },
    {
      version: 'V2.0.15',
      changes: [
        '修改按键弹起逻辑，避免出现重复键码',
        '优化USB HID信息发送状态的判断'
      ]
    },
    {
      version: 'V2.1.1',
      changes: [
        '【代码逻辑优化和稳定性】优化按键按下时HID编码逻辑，更新I2C驱动',
        '【SDK 更新】更新WCH SDK至2024年1月版本',
        '【优化 2.4G 连接】更新版本后RF模式下Numlock状态会被显示在OLED，当信号不好出现丢包后键盘会自动发起重传，默认发起重传时间为 10ms，可以通过RF_chk_ms参数修改时间，该功能需要同步升级接收器固件后才能生效',
        '【扩展模块协议】适配miniFOC(TP78foc)和TP78mini扩展模块',
        '【低功耗相关】低功耗相关代码更新',
      ]
    },
    {
      version: 'V2.1.2',
      changes: [
        '支持VIA修改按键宏功能，但不支持延迟发送功能',
      ]
    },
    {
      version: 'V2.1.3',
      changes: [
        '取消触摸条左中右按键振动，修复小红点和触摸条联合使用会造成小红点无法移动的BUG',
        '优化扩展模块连接稳定性',
        '修改USB/BLE/RF的连接描述符配置，新增旋钮配置。更新版本后需要同步升级接收器固件',
      ]
    },
    {
      version: 'V2.1.5',
      changes: [
        '修改触摸条按键/滑动触发振动的功能为可配置（配置项：motor_en）',
      ]
    },
    {
      version: 'V2.1.6',
      changes: [
        '增加USB和蓝牙共存模式，按Fn+F9切换至共存模式。在共存模式下，按Fn+PageUp切换到USB输入，按Fn+PageDown切换到蓝牙输入',
        '修改VIA的layout布局文件，原先键盘布局为15列，实际只有14列，对应固件VIA相关内容进行修改。更新版本后VIA的布局文件需要同步最新(使用官方VIA网站改键需关注)',
      ]
    },
    {
      version: 'V2.1.7',
      changes: [
        '修复主机睡眠后键盘无法唤醒主机并连接上USB的BUG',
      ]
    },
    {
      version: 'V2.1.8',
      changes: [
        '修复V2.1.6和V2.1.7版本无法使用RF功能的BUG',
        '增加Fn+Y单独控制触摸条滑动使能功能，Fn+T只控制小红点使能功能',
        '优化游戏模式下延迟',
      ]
    },
    {
      version: 'V2.1.9',
      changes: [
        '增加VIA磁轴指令',
        '增加测试模式（Fn+Z），该模式仅供新功能测试使用',
      ]
    },
    {
      version: 'V2.1.10',
      changes: [
        '增加记录上次刷入的固件版本号功能',
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
      name: '交换按键',
      key: 'Fn+C',
      desc: '先按下Fn+C，后按下Fn和第一个键，再按下Fn和第二个键，实现第一个键和第二个键交换。交换按键后掉电依然保存'
    },
    {
      name: 'OLED参数配置界面',
      key: 'Fn+O',
      desc: '按下Fn+O进入OLED参数配置界面。选择参数时按W和S上下移动、按A和D选择退回上一级菜单或者进入下一级菜单。输入参数值时按下Enter确定、按下Esc返回'
    },
    {
      name: '切换模式',
      key: 'Fn+F9/F10/F11/F12',
      desc: 'Fn+F9 - USB蓝牙共存模式；Fn+F10 - USB模式；Fn+F11 - 蓝牙模式；Fn+F12 - RF模式'
    },
    {
      name: '接收器进入BootLoader模式',
      key: 'Fn+ESC',
      desc: '按下Fn+ESC让接收器进入BootLoader模式，进入BootLoader后接收器无法正常工作直至刷入新的固件（注意：接收器刷错固件后只能拆卸返修）'
    },
    {
      name: '主键盘进入BootLoader模式',
      key: 'Fn+B',
      desc: '按下Fn+B让主键盘进入kboot模式（仅板子带kboot固件才能生效）'
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
      name: '进入U盘模式',
      key: 'Fn+U',
      desc: '按下Fn+U复位键盘并进入USB+U盘模式（注意：U盘模式下VIA改键无法使用，并且进入U盘模式后下次重启键盘默认失效）'
    },
    {
      name: '进入/退出游戏模式',
      key: 'Fn+G',
      desc: '按下Fn+G进入/退出游戏模式，游戏模式提升了键盘的响应速度，同时屏蔽指点杆、触摸条、OLED和低功耗功能'
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
      name: '彩蛋模式进入/退出',
      key: 'Fn+Del',
      desc: '彩蛋模式下可以看到固件版本，按W/A/S/D控制背光贪吃蛇'
    },
    {
      name: '共存模式下选择发送USB数据',
      key: 'Fn+PageUp',
      desc: '仅在共存模式生效'
    },
    {
      name: '共存模式下选择发送蓝牙数据',
      key: 'Fn+PageDown',
      desc: '仅在共存模式生效'
    },
    {
      name: '测试模式',
      key: 'Fn+Z',
      desc: '仅开发人员使用'
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
    codeBlock: {
      background: '#000',
      padding: '10px',
      borderRadius: '5px',
      whiteSpace: 'pre-wrap' as const
    },
    imageStyle: {
      width: '100%',
      maxWidth: '800px',
      margin: '10px auto',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.mainheading}>TP78v2 指导手册</h1>
      <div style={styles.versionInfo}>
        手册版本 1.1.5<br/>
        固件版本 2.1.10
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
      {`步骤：
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
      {`步骤：
1. 按下Fn+b进入kboot模式/按住ESC键上电进入kboot模式
2. 弹出U盘选择格式化，此时键盘中的主固件被擦除
3. 将新固件（.bin）文件拖进U盘
4. 根据OLED显示，按键W代表方向上，按键S代表方向下，按键Enter代表确认，此时选择Reboot并按下Enter
5. 重启后会弹出U盘里的固件名字，选择Enter后等待几秒升级完毕`
      }
      </pre>
      <p style={styles.note_normal}>注意：若擦除固件未刷入新固件或者刷错固件，键盘会不能使用，此时不需要紧张，按住ESC上电刷入新的固件即可。</p>

      <h2 style={styles.sectionheading}>初次刷入固件</h2>

      <h2 style={styles.sectionheading}>同步固件的最新改动</h2>

      <h2 style={styles.sectionheading}>OLED UI介绍</h2>

      <h2 style={styles.sectionheading}>U盘模式介绍</h2>

      <h2 style={styles.sectionheading}>图标示意</h2>

      <h2 style={styles.sectionheading}>教程视频</h2>
      <ul>
        <li>VIA 改键教程: 
          <a href="https://www.bilibili.com">哔哩哔哩链接</a>
        </li>
      </ul>

      <h2 style={styles.sectionheading}>GitHub代码适配</h2>
      <li>注意：github上代码固件仅适配tp78官方发行版本，若需要基于此进行开发或者DIY，需将Link.ld文件FLASH的起始地址修改为0。</li>
    </div>
  );
};

export default TP78v2_Guide;
