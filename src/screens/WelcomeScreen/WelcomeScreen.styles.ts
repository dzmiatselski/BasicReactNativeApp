import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#252137',
  },
  stepper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingHorizontal: 24,
    paddingBottom: 36,
  },
  step: {
    width: 60,
    height: 3,
    backgroundColor: '#fff',
    opacity: 0.3,
    borderRadius: 2,
  },
  activeStep: { backgroundColor: '#fff', opacity: 1 },
  imageWrapper: { width: '100%', paddingHorizontal: 40, paddingBottom: 64 },
  logo: { width: '100%' },
  stepContentWrapper: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 72,
    paddingHorizontal: 32,
    width: '100%',
  },
  arrowButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 13,
  },
  button: {
    width: '100%',
  },
  modalContainer: {
    marginBottom: 0,
  },
  modalContentContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: 40,
  },
});
