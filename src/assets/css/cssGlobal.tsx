import {StyleSheet} from 'react-native';

const stylesGlobal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f39e',
  },

  modalView: {
    backgroundColor: 'white',
    padding: 20,
    // borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '100%',
    width: '100%',
  },

  //Flex

  box_center_spaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  box_center: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  space_between: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row_center: {display: 'flex', flexDirection: 'row', justifyContent: 'center'},
  flex_center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default stylesGlobal;
