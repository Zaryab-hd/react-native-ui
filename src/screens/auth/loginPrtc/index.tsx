import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  appleIcon,
  facebookIcon,
  googleIcon,
  welcomeIcon,
} from '../../../assets/icons';
import styles from './styles';

const LoginPrctc = () => {
  return (
    <View style={styles.viewMain}>
      <Image style={styles.imageStyle} source={welcomeIcon}></Image>
      <Text style={styles.textWelcome}>Welcome Back!</Text>
      <TextInput style={styles.inputStyle} placeholder="Email"></TextInput>
      <TextInput style={styles.inputStyle} placeholder="Password"></TextInput>
      <Text style={styles.textOr}>or</Text>
      <View style={styles.viewSocial}>
        <TouchableOpacity style={styles.btnStyle}>
          <Image style={styles.iconStyle} source={facebookIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Image style={styles.iconStyle} source={googleIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Image style={styles.iconStyle} source={appleIcon}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.viewSignUp}>
        <Text style={styles.accountStyle}>Don't have an account?</Text>
        <Text style={styles.signupStyle}>SignUp</Text>
      </View>
    </View>
  );
};

export default LoginPrctc;
