import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabContainer, TopDecorationImage, TopDecoration } from './styles';
import AvailableHelpers from './components/AvailableHelpers';
import AvailableNeeded from './components/AvailableNeeded';

export default function HelpBeHelped() {
  const [value, setValue] = React.useState('one');
  const [isHelping, setIsHelping] = React.useState(true);

  const handleChange = (event, newValue) => {
    setIsHelping(!isHelping);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <TopDecoration isHelping={isHelping}>
        <TopDecorationImage isHelping={isHelping}></TopDecorationImage>
      </TopDecoration>
      <TabContainer isHelping={isHelping}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='wrapped label tabs example'
        >
          <Tab value='one' label='Quero ajudar' wrapped {...a11yProps('one')} />
          <Tab value='two' label='Preciso de ajuda' {...a11yProps('two')} />
        </Tabs>
      </TabContainer>
      {isHelping && <AvailableHelpers></AvailableHelpers>}
      {!isHelping && (
        <div value={value} index='two'>
          <AvailableNeeded></AvailableNeeded>
        </div>
      )}
    </div>
  );
}
