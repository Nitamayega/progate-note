import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'


// Widget for rendering the current page based on the state
const CurrentPageWidget = ({ 
  noteList,
  currentPage, 
  setCurrentPage, 
  addNote, 
  editNote, 
  noteToEdit, 
  setNoteToEdit, 
  deleteNote
}) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setNoteToEdit={setNoteToEdit}
          deleteNote={deleteNote}
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

// Main App component
const App = () => {

  // State for managing the current page
  const [currentPage, setCurrentPage] = useState('home')

  // State for holding the note to be edited
  const [noteToEdit, setNoteToEdit] = useState(null)

  // Initialize the state with one sample note
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Tugas Proyek Note App',
      desc:
        'Mengembangkan fitur "menghapus note" dan "mengubah note"',
    },
  ])

  // Function to add a new note
  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ]);
  };

  // Function to edit an existing note
  const editNote = (id, title, desc) => {
    const updatedNotes = noteList.map((noteItem) =>
      noteItem.id === id ? {
        ...noteItem, title, desc
      } : noteItem
    )
    setNoteList(updatedNotes)
    setNoteToEdit(null)
  }

  // Function to delete a note
  const deleteNote = (id) => {
    const updatedNotes = noteList.filter((note) => note.id !== id)
    setNoteList(updatedNotes)
  }

  // Render the current page widget
  return (
    <CurrentPageWidget
      noteList={noteList}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      editNote={editNote}
      noteToEdit={noteToEdit}
      setNoteToEdit={setNoteToEdit}
      deleteNote={deleteNote}
    />
  )
}

export default App