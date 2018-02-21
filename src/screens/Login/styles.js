import { StyleSheet } from 'react-native';
import * as theme from '../../config/theme';

const styles = ({ screenTheme }) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme[screenTheme].bgScreen
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  logoContainerCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16
  },
  tagline: {
    color: 'rgba(255,255,255,0.6)',
    marginTop: 8,
    textAlign: 'center',
    fontSize: 24
  },
  formCenter: {
    flex: 1, 
    justifyContent: 'flex-start'
  },
  row: {
    height: 48,
    flexDirection: 'column',
    marginBottom: 8
  },
  inputText: {
    backgroundColor: theme[screenTheme].bgInput,
    color: '#FFF',
    padding: 8,
    flex: 1
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    borderRadius: 2,
    borderColor: '#FFF',
    borderWidth: 2,
    marginTop: 8
  },
  loginLabel: {
    color: theme[screenTheme].clrLabel,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'
  }
});

export default styles;
