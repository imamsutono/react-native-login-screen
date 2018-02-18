import React, { Component } from "react";
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

class Login extends Component {
  render() {
    const { container, logoContainer, tagline, row, inputText, loginButton, loginLabel } = styles;

    return (
      <KeyboardAvoidingView behavior="padding" style={container}>
        <StatusBar barStyle="light-content" />
        <View style={logoContainer}>
          <Image
            source={require('../../images/icon.png')}
            style={{ height: 100, width: 100 }}
          />
          <Text style={tagline}>{this.props.tagline}</Text>
        </View>
        <View style={row}>
          <TextInput
            placeholder="Username or Email"
            placeholderTextColor="rgba(255,255,255,0.5)"
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
            placeholderTextColor="rgba(255,255,255,0.5)"
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
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
