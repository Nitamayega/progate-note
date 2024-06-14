import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, noteToEdit, editNote, setNoteToEdit }) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setNoteToEdit={setNoteToEdit}
        />
      )
    case 'add':
      return (
        <AddNote 
          setCurrentPage={setCurrentPage} 
          addNote={addNote} 
          />
      )
    case 'edit':
      return (
        <EditNote 
          setCurrentPage={setCurrentPage}
          noteToEdit={noteToEdit}
          editNote={editNote}
        />
      )
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [noteToEdit, setNoteToEdit] = useState(null)

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNote = (id, title, desc) => {
    const updatedNotes = noteList.map(note =>
      note.id === id ? {
        ...note, title, desc
      } : note
    )
    setNoteList(updatedNotes)
    setNoteToEdit(null)
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      noteToEdit={noteToEdit}
      editNote={editNote}
      setNoteToEdit={setNoteToEdit}
    />
  )
}

export default App