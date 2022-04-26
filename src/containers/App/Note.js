/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
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
import { addNoteListDetail, removeNoteListDetail } from './actions';
import { makeSelectNoteList } from './selectors';
import { homeStyle, noteStyle } from './style';

// eslint-disable-next-line react/prop-types
function Note({ noteDetail, route, noteList, totalNoteListDetail }) {
  const [isShowNoteList, setIsShowNoteList] = useState(false);
  const [inputTitle, setInputTitle] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [total, setTotal] = useState(0);
  // eslint-disable-next-line react/prop-types
  const { note, index } = route.params;

  const noteListDetail = noteList[index]?.noteListDetail;
  const dispatch = useDispatch();
  const onShowTotal = () => {
    setTotal(
      noteListDetail.reduce((total, item) => {
        total += Number(item.price);
        return total;
      }, 0),
    );
  };
  const onChangeInputTitle = text => {
    setInputTitle(text);
  };
  const onChangeInputPrice = text => {
    setInputPrice(text);
  };
  const addNote = () => {
    if (inputTitle === '' && inputPrice === '') {
      Alert.alert('Please enter the input');
      return false;
    }
    const payload = {
      name: inputTitle,
      price: inputPrice,
    };
    // node.noteListDetail.push(payload);
    dispatch(addNoteListDetail({ index, payload }));
  };
  const onDeleteNoteDetail = indexNoteListDetail => {
    dispatch(removeNoteListDetail({ index, indexNoteListDetail }));
  };

  return (
    <>
      <ImageBackground
        style={homeStyle.background}
        source={images.home.background2}>
        <Image style={homeStyle.headerImg} source={images.home.header} />
        <ScrollView style={noteStyle.noteList}>
          {noteListDetail?.map((note, indexNoteListDetail) => (
            <ImageBackground
              style={noteStyle.underLine}
              source={images.home.underLine}>
              <View style={noteStyle.descriptions}>
                <View style={noteStyle.description}>
                  <Text style={noteStyle.name}>{note?.name}</Text>
                  <Text style={noteStyle.price}>{note?.price}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => onDeleteNoteDetail(indexNoteListDetail)}>
                  <Text style={noteStyle.btnDelete}>Delete</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          ))}
        </ScrollView>
        <View style={noteStyle.container}>
          <TouchableOpacity onPress={addNote}>
            <Text style={noteStyle.add}>+</Text>
          </TouchableOpacity>

          <View style={noteStyle.formInput}>
            <TextInput
              placeholder="Input title"
              placeholderTextColor="#999"
              style={noteStyle.titleInput}
              onChangeText={text => onChangeInputTitle(text)}
            />
            <TextInput
              keyboardType="numeric"
              placeholder="Input price"
              placeholderTextColor="#999"
              style={[noteStyle.priceInput]}
              onChangeText={text => onChangeInputPrice(text)}
            />
          </View>
        </View>
        <TouchableOpacity onPress={onShowTotal}>
          <Image
            style={noteStyle.showAllButton}
            source={images.home.showAllButton}
          />
        </TouchableOpacity>

        <View>
          <Text style={noteStyle.total}>{total}</Text>
        </View>
      </ImageBackground>
    </>
  );
}
Note.propTypes = {
  noteDetail: PropTypes.object,

  noteList: PropTypes.any,
};
const mapStateToProps = createStructuredSelector({
  noteList: makeSelectNoteList(),
});

export default connect(mapStateToProps)(Note);
