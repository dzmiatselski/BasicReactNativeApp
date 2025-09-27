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
  text: { fontSize: 32, fontWeight: 600, textAlign: 'center', color: '#fff' },
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
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
});
