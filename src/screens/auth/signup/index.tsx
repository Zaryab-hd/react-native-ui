import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Formik} from 'formik';
import {validationSchema} from '../../../shared/utils/validation';

const Signup = () => {
  return (
    <KeyboardAwareScrollView>
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={values => console.log('Values --- :', values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={{flex: 1}}>
            <View>
              <Text style={styles.textSignup}>Sign Up</Text>
            </View>
            <View>
              <TextInput
                style={[styles.input, {marginTop: 50}]}
                placeholder="Name"
                onChangeText={handleChange('name')}
                value={values.name}></TextInput>
              {errors.name && touched.name && (
                <Text style={{color: 'red', marginLeft: 20}}>
                  {errors.name}
                </Text>
              )}
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange('email')}
                value={values.email}></TextInput>
              {errors.email && touched.email && (
                <Text style={{color: 'red', marginLeft: 20}}>
                  {errors.email}
                </Text>
              )}
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={handleChange('password')}
                value={values.password}></TextInput>
              {errors.password && touched.password && (
                <Text style={{color: 'red', marginLeft: 20}}>
                  {errors.password}
                </Text>
              )}
              <TouchableOpacity
                style={styles.btn}
                onPress={() => handleSubmit()}>
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
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
