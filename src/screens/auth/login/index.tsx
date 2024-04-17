import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textLogin}>Log In</Text>
      <TextInput
        style={[styles.inputStyle, {marginTop: 80}]}
        placeholder="Email"></TextInput>
      <TextInput style={styles.inputStyle} placeholder="Password"></TextInput>
      <TouchableOpacity
        onPress={toggleCheckBox}
        style={styles.checkboxContainer}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
          {isChecked && <Text style={styles.checkIcon}>✓</Text>}
        </View>
        <Text style={styles.label}>remember me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.textForgot}>forgot password?</Text>
      <View style={styles.viewBottom}>
        <Text style={styles.textAccount}>Don't have an account?</Text>
        <Text style={styles.textSignUp}>Sign Up</Text>
      </View>
    </View>
  );
};

export default Login;
