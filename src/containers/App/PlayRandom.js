import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import { makeSelectTurn } from './selectors';
import { homeStyle } from './style';
import choices from './data/choices';
import { decrementTurn } from './actions';

const key = 'App';

function App({ turn }) {
  useInjectReducer({ key, reducer });
  const [backgroundActive, setBackgroundActive] = useState(false);
  const [isPlayingRandom, setisPlayingRandom] = useState(false);
  const dispatch = useDispatch();
  const onPlayRandomChoices = () => {
    setisPlayingRandom(true);
    if (isPlayingRandom === true) {
      return false;
    }
    if (turn <= 0) {
      Alert.alert('Not enough turn!');
      return false;
    }
    dispatch(decrementTurn(1));
    let i = 0;
    const intetrval = setInterval(() => {
      setBackgroundActive(Math.floor(Math.random() * choices.length));
      i += 1;
      if (i === 50) {
        clearInterval(intetrval);
        setisPlayingRandom(false);
      }
    }, 100);
  };

  return (
    <>
      <View style={homeStyle.header}>
        <Text style={homeStyle.title}>TAKE THE CHHALLENGE OF YOUR CHOICE</Text>
      </View>
      <View style={homeStyle.listChoices}>
        {choices.map((choice, index) => (
          <View style={homeStyle.choices}>
            <ImageBackground
              style={homeStyle.backgroundChoices}
              source={`${
                index === backgroundActive
                  ? images.home.backroundButtonActive
                  : images.home.backgroundButtonNormal
              }`}>
              <Text style={homeStyle.contentChoices}>{choice}</Text>
            </ImageBackground>
          </View>
        ))}
      </View>
      <TouchableOpacity
        onPress={onPlayRandomChoices}
        onLongPress={onPlayRandomChoices}>
        <View style={[homeStyle.container, { justifyContent: 'center' }]}>
          <Image style={homeStyle.buttonPlay} source={images.home.buttonPlay} />
        </View>
      </TouchableOpacity>
    </>
  );
}

App.propTypes = {
  turn: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(App);
