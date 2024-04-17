import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  appleIcon,
  boyIcon,
  facebookIcon,
  googleIcon,
  mailIcon,
} from '../../../assets/icons/index';
import styles from './styles';

const SignUpPrtc = () => {
  return (
    <View style={styles.viewMain}>
      <Image style={styles.profileLogo} source={boyIcon} />
      <Text style={styles.textAccount}>Create an Account</Text>
      <TouchableOpacity style={[styles.btnStyle, {marginTop: 60}]}>
        <Image style={styles.iconStyle} source={facebookIcon} />
        <Text style={styles.btnText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle}>
        <Image style={styles.iconStyle} source={googleIcon} />
        <Text style={styles.btnText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle}>
        <Image style={styles.iconStyle} source={appleIcon} />
        <Text style={styles.btnText}>Continue with Apple</Text>
      </TouchableOpacity>
      <Text style={styles.textOr}>or</Text>
      <TouchableOpacity style={[styles.btnStyle, {marginTop: 20}]}>
        <Image style={styles.iconStyle} source={mailIcon} />
        <Text style={styles.btnText}>Sign Up with Email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpPrtc;
