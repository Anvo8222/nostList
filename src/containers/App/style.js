import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  turn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '6%',
    left: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: '10%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    elevation: 3,
  },
  button: {
    color: 'white',
    width: '45%',
    textAlign: 'center',
    padding: 5,
    borderColor: 'black',
    borderWidth: 2,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    backgroundColor: `#fff`,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export const homeStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  headerImg: {
    resizeMode: 'contain',
    height: 90,
    width: '100%',
  },
  container: {
    marginBottom: 6,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  noteList: {
    maxHeight: '50%',
    margin: 10,
  },
  createNewNoteButton: {
    width: '100%',
    height: 70,
    resizeMode: 'contain',
  },
  backgroundNote: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  deleteButton: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  description: {
    height: '100%',
    paddingLeft: '12%',
    paddingRight: '4%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 2,
  },
  date: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: 2,
  },
  nameInput: {
    color: 'white',
    paddingLeft: 50,
  },
  dateNow: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    height: 80,
    width: '100%',
  },
});
export const noteStyle = StyleSheet.create({
  showAllButton: {
    width: '100%',
    height: 50,
    marginLeft: 2,
    resizeMode: 'contain',
  },
  underLine: {
    width: '100%',
    height: 70,
    resizeMode: 'cover',
    marginBottom: 20,
    marginLeft: 6,
  },
  descriptions: {
    height: 70,
    paddingLeft: '12%',
    paddingRight: '4%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    height: 70,
    paddingLeft: '12%',
    paddingRight: '4%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  noteList: {
    maxHeight: '40%',
    margin: 10,
  },
  btnDelete: {
    color: 'red',
    maxWidth: 50,
  },
  name: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 2,
  },
  add: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    width: 20,
  },
  price: {
    color: 'white',
    textAlign: 'left',
    fontSize: 16,
    paddingTop: 2,
  },
  total: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
  },
  container: {
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  underLineInput: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
  },
  formInput: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleInput: {
    height: 40,
    borderWidth: 1,
    width: '90%',
    fontSize: 18,
    color: 'white',
    placeholderTextColor: 'white',
  },
  priceInput: {
    height: 40,
    borderWidth: 1,
    width: '90%',
    fontSize: 18,
    color: 'white',
    placeholderTextColor: 'white',
  },
  backButton: {
    marginTop: '2%',
    width: '100%',
    height: 50,
    marginLeft: 2,
    resizeMode: 'contain',
  },
});
