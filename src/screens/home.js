import React from 'react'
import { StatusBar ,FlatList, StyleSheet, View, Text } from 'react-native'
import CustomButton from '../components/customButton'

// Component to display each note card
const NoteCard = ({ 
  item, 
  setCurrentPage, 
  setNoteToEdit, 
  deleteNote 
}) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.desc}</Text>
      <View style={styles.buttons}>
        <CustomButton
          backgroundColor="#FFC300"
          color="#151D3B"
          text="Ubah"
          fontSize={12}
          width={100}
          onPress={() => {
            setCurrentPage('edit')
            setNoteToEdit(item)
          }}
        />
        <CustomButton
          backgroundColor="#D82148"
          color="#fff"
          text="Hapus"
          fontSize={12}
          width={100}
          onPress={() => {deleteNote(item.id)}}
        />
      </View>
    </View>
  )

// Home component to display list of notes
const Home = ({ noteList, setCurrentPage, setNoteToEdit, deleteNote }) => (
<View style={styles.container}>
    <CustomButton
    backgroundColor="#DDD"
    color="#203239"
    text="Tambahkan Note"
    width="100%"
    onPress={() => {
      setCurrentPage('add')
    }}
    />
    {noteList.length === 0 ? (
      <Text style={styles.noNotesText}>Tidak ada catatan.</Text>
    ) : (
      <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
          <NoteCard 
            item={item} 
            setCurrentPage={setCurrentPage} 
            setNoteToEdit={setNoteToEdit}
            deleteNote={deleteNote} />
      )}
      keyExtractor={(item) => item.id}
      />
    )}
</View>
)
  
const styles = StyleSheet.create({
container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    marginTop: StatusBar.currentHeight
},
card: {
    padding: 10,
    marginVertical: 15,
    borderColor: '#DDD',
    borderWidth: 2,
    borderRadius: 5,
},
cardTitle: {
    fontWeight: '600',
    color: '#203239',
    fontSize: 16,
    marginBottom: 5,
},
buttons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
},
noNotesText: {
  textAlign: 'center',
  color: '#203239',
  fontSize: 18,
  marginTop: 20,
},
})

export default Home