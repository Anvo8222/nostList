/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import produce from 'immer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SET_TURN,
  INCREMENT_TURN,
  DECREMENT_TURN,
  ADD_NOTE_LIST,
  REMOVE_NOTE_LIST,
  ADD_NOTE_LIST_DETAIL,
  REMOVE_NOTE_LIST_DETAIL,
} from '../constants';

const data = async () => {
  try {
    const value = await AsyncStorage.getItem('@nodeList');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    return [];
  }
};

const newData = data();
export const initialState = {
  turn: 10,
  noteList: [],
};

export default (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_TURN:
        AsyncStorage.setItem('@turn', JSON.stringify(action.turn));
        draft.turn = action.turn;
        break;
      case ADD_NOTE_LIST:
        draft.noteList.push(action.payload);
        AsyncStorage.setItem('@nodeList', JSON.stringify(draft.noteList));
        break;
      case REMOVE_NOTE_LIST:
        draft.noteList.splice(action.index, 1);
        // AsyncStorage.setItem('@nodeList', JSON.stringify(draft.noteList));
        break;
      case ADD_NOTE_LIST_DETAIL:
        draft.noteList[action.index].noteListDetail.push(action.payload);
        break;
      case REMOVE_NOTE_LIST_DETAIL:
        draft.noteList[action.index].noteListDetail.splice(
          action.indexNoteListDetail,
          1,
        );
        break;

      case INCREMENT_TURN:
        AsyncStorage.setItem(
          '@turn',
          JSON.stringify(Number(action.amount) + Number(draft.turn)),
        );
        draft.turn += Number(action.amount);
        break;

      case DECREMENT_TURN:
        AsyncStorage.setItem(
          '@turn',
          JSON.stringify(Number(draft.turn) - Number(action.amount)),
        );
        draft.turn -= Number(action.amount);
        break;
    }
  });
