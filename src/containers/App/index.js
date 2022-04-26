import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import notes from './data/notes.json';
import Note from './Note';
import NoteList from './NoteList';
import reducer from './reducer';
import { makeSelectTurn } from './selectors';

const key = 'App';

function App({ turn }) {
  useInjectReducer({ key, reducer });
  const notelist = notes.notes;
  const [isShowButtons, setShowButtons] = useState(false);
  const [isShowNote, setIsShowNote] = useState(false);
  const onSetShowButtons = () => {
    setShowButtons(!isShowButtons);
  };
  const onViewNoteList = () => {
    setIsShowNote(true);
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={NoteList} />
        <Stack.Screen name="notes" component={Note} />
        {/* <NoteList /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

App.propTypes = {
  turn: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(App);
