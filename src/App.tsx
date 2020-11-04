import React, { useState } from 'react';
import {NewNoteInput} from './NewNoteInput'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {NotesState} from './notesReducer'
import { addNote } from './actions';

function App() {
  const dispatch = useDispatch()
  const notes = useSelector<NotesState, NotesState['notes']>(
    (state) => state.notes
  )

  const onAddNote = (note: string) => {
    dispatch(addNote(note))
  }

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr/>
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>
        })}
      </ul>
    </>
  );
}

export default App;
