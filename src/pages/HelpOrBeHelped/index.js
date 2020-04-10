import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import { TabContainer, TopDecorationImage, TopDecoration, Tab } from './styles';
import AvailableHelpers from './components/AvailableHelpers';
import AvailableNeeded from './components/AvailableNeeded';
import { Row } from '../../globalComponents';

export default function HelpBeHelped() {
  const [value, setValue] = React.useState('one');
  const [isHelping, setIsHelping] = React.useState(false);

  const toggleIsHelping = () => {
    setIsHelping(!isHelping);
  };

  return (
    <div style={{ position: 'relative' }}>
      <TopDecoration
        isHelping={isHelping}
        style={{ display: 'flex', alignItems: 'flex-end' }}
      >
        <TopDecorationImage isHelping={isHelping}></TopDecorationImage>
        <TabContainer>
          <Tab
            isHelping={isHelping}
            highLight={isHelping}
            style={{ left: '0' }}
            onClick={toggleIsHelping}
          >
            <strong style={{ display: 'block', textAlign: 'center' }}>
              Precisa de ajuda
            </strong>
          </Tab>
          <Tab
            isHelping={isHelping}
            highLight={!isHelping}
            style={{ right: '0' }}
            onClick={toggleIsHelping}
          >
            <strong style={{ display: 'block', textAlign: 'center' }}>
              Quer te ajudar
            </strong>
          </Tab>
        </TabContainer>
      </TopDecoration>
      <div style={{ zIndex: '10', position: 'absolute', width: '100%' }}>
        {isHelping && <AvailableHelpers></AvailableHelpers>}
        {!isHelping && <AvailableNeeded></AvailableNeeded>}
      </div>
    </div>
  );
}
