import { useNavigation } from '@react-navigation/native';
import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { dateNow } from '../../ultis/date';
import { addNoteList, removeNoteList } from './actions';
import { makeSelectNoteList, makeSelectTurn } from './selectors';
import { homeStyle } from './style';
// eslint-disable-next-line react/prop-types
function NoteList({ turn, noteList }) {
  const navigation = useNavigation();
  // const notelist = notes.notes;
  const [isShowButtons, setShowButtons] = useState(false);
  const [inputName, setInputName] = useState('');
  const onSetShowButtons = () => {
    setShowButtons(!isShowButtons);
  };
  const onViewNoteList = (note, index) => {
    const noteListDetails = noteList[index]?.noteListDetail;
    navigation.navigate('notes', {
      note,
      index,
      noteListDetails,
    });
  };
  const onSetInputName = text => {
    setInputName(text);
  };
  const dispatch = useDispatch();
  const onCreateNewNote = () => {
    if (inputName === '') {
      Alert.alert('Please enter the name');
      return false;
    }
    dispatch(
      addNoteList({ name: inputName, date: dateNow(), noteListDetail: [] }),
    );
  };

  const onDeleteNote = index => {
    dispatch(removeNoteList(index));
  };
  return (
    <ImageBackground
      style={homeStyle.background}
      source={images.home.background1}>
      <Image style={homeStyle.headerImg} source={images.home.header} />
      <ScrollView style={homeStyle.noteList}>
        {noteList?.map((note, index) => (
          <TouchableOpacity onPress={() => onViewNoteList(note, index)}>
            <ImageBackground
              key={index}
              style={homeStyle.backgroundNote}
              source={images.home.note}>
              <View style={homeStyle.container}>
                <View style={homeStyle.description}>
                  <Text style={homeStyle.title}>{note.name}</Text>
                  <Text style={homeStyle.date}>{note.date}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      onDeleteNote(index);
                    }}>
                    <Image
                      style={homeStyle.deleteButton}
                      source={images.home.deleteButton}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ImageBackground
        style={homeStyle.backgroundNote}
        source={images.home.note}>
        <View style={homeStyle.formInput}>
          <TextInput
            placeholder="Name"
            value={inputName}
            placeholderTextColor="#999"
            style={homeStyle.nameInput}
            onChangeText={text => onSetInputName(text)}
          />
          <Text style={homeStyle.dateNow}>{dateNow()}</Text>
        </View>
      </ImageBackground>

      <TouchableOpacity onPress={onCreateNewNote} onLongPress={onCreateNewNote}>
        <Image
          style={homeStyle.createNewNoteButton}
          source={images.home.createNewNoteButton}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}

NoteList.propTypes = {
  turn: PropTypes.number,
  noteList: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  noteList: makeSelectNoteList(),
});

export default connect(mapStateToProps)(NoteList);
