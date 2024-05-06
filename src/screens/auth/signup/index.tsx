import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Signup = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1}}>
        <View>
          <Text style={styles.textSignup}>Sign Up</Text>
        </View>
        <View>
          <TextInput
            style={[styles.input, {marginTop: 50}]}
            placeholder="Name"></TextInput>
          <TextInput style={styles.input} placeholder="Email"></TextInput>
          <TextInput style={styles.input} placeholder="Password"></TextInput>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.textOr}>or</Text>
          <TouchableOpacity style={styles.btnSocial}>
            <Text style={styles.btnSocialText}>sign up with google</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.textAlready}>Already have an account?</Text>
          <Text style={styles.textLogin}>Log In</Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
