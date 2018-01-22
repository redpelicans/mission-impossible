import React from 'react';
import '@blueprintjs/core/dist/blueprint.css';
import { connect } from 'react-redux';
import { Header, HeaderLeft, HeaderRight } from './components/header';
import { Menu } from './components/menu';
import { Title } from './components/title';
import Missions from './components/missions/index';
import './App.css';
import {
  removeMission,
  toggleMission,
  removeMissions,
  unauthorized,
  sortByName,
  sortByStartDate,
  sortByEndDate,
} from './actions';
import { missionsSelector } from './selectors';

//import connect from './connect';

const App = props => (
  <div>
    <Header>
      <HeaderLeft>
        <Title />
      </HeaderLeft>
      <HeaderRight>
        <Menu />
      </HeaderRight>
    </Header>
    <Missions {...props} />
  </div>
);
const mapDispatchToProps = {
  removeMission,
  removeMissions,
  toggleMission,
  unauthorized,
  sortByName,
  sortByStartDate,
  sortByEndDate,
};
const mapStateToProps = state => ({
  ...state,
  missions: missionsSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
