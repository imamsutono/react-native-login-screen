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
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../images/icon.png')}
            style={{ height: 100, width: 100 }}
          />
          <Text style={styles.tagline}>{this.props.tagline}</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="Username or Email"
            placeholderTextColor="rgba(255,255,255,0.5)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            style={styles.inputText}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.5)"
            returnKeyType="go"
            secureTextEntry={true}
            style={styles.inputText}
            ref={input => (this.passwordInput = input)}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {}}
          >
            <Text style={styles.loginLabel}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
