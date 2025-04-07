import {faQq, faGithub, faAlipay} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {VIALogo} from '../icons/via';
import {TaobaoLogo} from '../icons/taobao';
import {CategoryMenuTooltip} from '../inputs/tooltip';
import {CategoryIconContainer} from '../panes/grid';

const ExternalLinkContainer = styled.span`
  position: absolute;
  right: 1em;
  display: flex;
  gap: 1em;
`;

export const ExternalLinks = () => (
  <ExternalLinkContainer>
    <a href="https://caniusevia.com/" target="_blank">
      <CategoryIconContainer>
        <VIALogo height="25px" fill="currentColor" />
        <CategoryMenuTooltip>Official Website</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
    <a href="https://qm.qq.com/q/IIJ9Co95ee" target="_blank">
      <CategoryIconContainer>
        <FontAwesomeIcon size={'xl'} icon={faQq} />
        <CategoryMenuTooltip>Discord</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
    <a href="https://github.com/ChnMasterOG/via_app" target="_blank">
      <CategoryIconContainer>
        <FontAwesomeIcon size={'xl'} icon={faGithub} />
        <CategoryMenuTooltip>Github</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
    <a href="https://item.taobao.com/item.htm?ft=t&id=765881659540" target="_blank">
      <CategoryIconContainer>
        <TaobaoLogo height="25px" fill="currentColor" />
        <CategoryMenuTooltip>Buy TP78</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
  </ExternalLinkContainer>
);
