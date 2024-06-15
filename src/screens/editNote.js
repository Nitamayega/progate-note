import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CustomButton from '../components/customButton'
import CustomTextInput from '../components/customTextInput'

// Component to edit an existing note
const EditNote = ({ setCurrentPage, noteToEdit, editNote }) => {
  const [title, setTitle] = useState(noteToEdit ? noteToEdit.title : '');
  const [desc, setDesc] = useState(noteToEdit ? noteToEdit.desc : '');

  // Set the title and description when the note to edit changes
  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title)
      setDesc(noteToEdit.desc)
    }
  }, [noteToEdit])

  const handleSave = () => {
    editNote(noteToEdit.id, title, desc)
    setCurrentPage('home')
  }

  const handleCancel = () => {
    setCurrentPage('home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Edit Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={handleSave}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Batalkan"
          width="100%"
          onPress={handleCancel}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 30,
  },
})

export default EditNote