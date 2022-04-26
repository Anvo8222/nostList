import {
  SET_TURN,
  REQUEST_DATA,
  INCREMENT_TURN,
  DECREMENT_TURN,
  ADD_NOTE_LIST,
  REMOVE_NOTE_LIST,
  ADD_NOTE_LIST_DETAIL,
  REMOVE_NOTE_LIST_DETAIL,
} from './constants';

export const setTurn = turn => ({
  type: SET_TURN,
  turn,
});

export const incrementTurn = amount => ({
  type: INCREMENT_TURN,
  amount,
});

export const decrementTurn = (amount = 1) => ({
  type: DECREMENT_TURN,
  amount,
});

export const requestData = () => ({
  type: REQUEST_DATA,
});

export const addNoteList = payload => ({
  type: ADD_NOTE_LIST,
  payload,
});
export const removeNoteList = index => ({
  type: REMOVE_NOTE_LIST,
  index,
});
// eslint-disable-next-line arrow-body-style
export const addNoteListDetail = ({ index, payload }) => {
  return {
    type: ADD_NOTE_LIST_DETAIL,
    payload,
    index,
  };
};

export const removeNoteListDetail = ({ index, indexNoteListDetail }) => ({
  type: REMOVE_NOTE_LIST_DETAIL,
  index,
  indexNoteListDetail,
});
