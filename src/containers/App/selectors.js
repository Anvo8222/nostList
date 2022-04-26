import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectGlobal = () => createSelector(selectGlobal, state => state);

const makeSelectTurn = () => createSelector(selectGlobal, state => state.turn);
const makeSelectNoteList = () =>
  createSelector(selectGlobal, state => state.noteList);

export { makeSelectGlobal, makeSelectTurn, makeSelectNoteList };
