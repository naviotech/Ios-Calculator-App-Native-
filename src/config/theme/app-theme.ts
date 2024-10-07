import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
};

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },

  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '300',
  },

  mainResultHorizontal: {
    color: colors.textPrimary,
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 5,
    fontWeight: '300',
  },

  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },
  subResultHorizontal: {
    color: colors.textSecondary,
    fontSize: 20,
    textAlign: 'right',
    fontWeight: '300',
  },

  calculatorContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },

  calculatorContainerHorizontal: {
    flex: 1,
    width: '100%',
    padding: 40,
    paddingVertical: 40,
    justifyContent: 'center',
  },

  button: {
    height: 80,
    width: 80,
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonHorizontal: {
    flex: 1,
    height: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: colors.darkGray,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: '500',
    fontSize: 30,
  },

  buttonTextHorizontal: {
    color: 'white',
    fontWeight: '500',
    fontSize: 25,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  rowHorizontal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 0,
    paddingHorizontal: 30,
  },
});
