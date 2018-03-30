import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";
import styles from './styles';
import * as theme from '../../config/theme';

class Login extends Component {
  render() {
    const themeProps = this.props.theme;
    const { 
      container, 
      logoContainer, 
      logoContainerCenter, 
      tagline, 
      formCenter, 
      row, 
      inputText, 
      loginButton, 
      loginLabel
    } = styles({ screenTheme: themeProps });
    const formPosition = this.props.formPosition;

    return (
      <KeyboardAvoidingView behavior="padding" style={container}>
        <StatusBar barStyle="light-content" />
        <View style={formPosition === 'center' ? logoContainerCenter : logoContainer}>
          <Image
            source={require('../../images/icon.png')}
            style={{ height: 100, width: 100 }}
          />
          <Text style={tagline}>{this.props.tagline}</Text>
        </View>
        <View style={formPosition === 'center' ? formCenter : ''}>
          <View style={row}>
            <TextInput
              placeholder="Username or Email"
              placeholderTextColor={theme[themeProps].clrPlaceholder}
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              style={inputText}
            />
          </View>
          <View style={row}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={theme[themeProps].clrPlaceholder}
              returnKeyType="go"
              secureTextEntry={true}
              style={inputText}
              ref={input => (this.passwordInput = input)}
            />
          </View>
          <View style={row}>
            <TouchableOpacity
              style={loginButton}
              onPress={() => {}}
            >
              <Text style={loginLabel}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  tagline: PropTypes.string.isRequired,
  formPosition: PropTypes.string,
  theme: PropTypes.string
};

export default Login;
