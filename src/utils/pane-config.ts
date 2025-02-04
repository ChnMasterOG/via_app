import {
  faBrush,
  faBug,
  faGear,
  faKeyboard,
  faStethoscope,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import {ConfigurePane} from '../components/panes/configure';
import {Debug} from '../components/panes/debug';
import {Reference} from '../components/panes/reference';
import {DesignTab} from '../components/panes/design';
import {Settings} from '../components/panes/settings';
import {Test} from '../components/panes/test';
import {ErrorsPaneConfig} from '../components/panes/errors';

export default [
  {
    key: 'default',
    component: ConfigurePane,
    icon: faKeyboard,
    title: 'Configure',
    path: '/',
  },
  {
    key: 'test',
    component: Test,
    icon: faStethoscope,
    path: '/test',
    title: 'Key Tester',
  },
  {
    key: 'design',
    component: DesignTab,
    icon: faBrush,
    path: '/design',
    title: 'Design',
  },
  {
    key: 'settings',
    component: Settings,
    icon: faGear,
    path: '/settings',
    title: 'Settings',
  },
/* hidden debug
  {
    key: 'debug',
    icon: faBug,
    component: Debug,
    path: '/debug',
    title: 'Debug',
  },
*/
  {
    key: 'reference',
    icon: faBook,
    component: Reference,
    path: '/reference',
    title: 'Reference',
  },
  ErrorsPaneConfig,
];
