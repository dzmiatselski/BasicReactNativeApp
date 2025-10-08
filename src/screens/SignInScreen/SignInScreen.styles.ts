import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#252137',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 40,
  },
  actionsWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    gap: 24,
  },
  orWrapper: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
  },
  button: {
    width: '100%',
  },
});
