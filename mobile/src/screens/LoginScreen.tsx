import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const handleLogin = () => {
    // TODO: Implement login logic
    Alert.alert('Login', 'Login functionality will be implemented');
  };

  const handleSignup = () => {
    // TODO: Implement signup logic
    Alert.alert('Signup', 'Signup functionality will be implemented');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>MindTrack</Text>
        <Text style={styles.subtitle}>Your Mental Health Companion</Text>
      </View>

      {/* Tab Switcher */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'login' && styles.activeTab]}
          onPress={() => setActiveTab('login')}
        >
          <Text style={[styles.tabText, activeTab === 'login' && styles.activeTabText]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'signup' && styles.activeTab]}
          onPress={() => setActiveTab('signup')}
        >
          <Text style={[styles.tabText, activeTab === 'signup' && styles.activeTabText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity 
            style={styles.eyeButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon 
              name={showPassword ? 'eye-slash' : 'eye'} 
              size={20} 
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {activeTab === 'signup' && (
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={!showPassword}
          />
        )}

        {activeTab === 'login' && (
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        )}

        {activeTab === 'signup' && (
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By signing up, you agree to our{' '}
              <Text style={styles.linkText}>Terms of Service</Text>{' '}
              and{' '}
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Text>
          </View>
        )}

        <TouchableOpacity 
          style={styles.button}
          onPress={activeTab === 'login' ? handleLogin : handleSignup}
        >
          <Text style={styles.buttonText}>
            {activeTab === 'login' ? 'Login' : 'Sign Up'}
          </Text>
        </TouchableOpacity>

        {activeTab === 'login' && (
          <TouchableOpacity 
            style={styles.signupLink}
            onPress={() => setActiveTab('signup')}
          >
            <Text style={styles.signupLinkText}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#4a90e2',
  },
  tabText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: 'white',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeButton: {
    position: 'absolute',
    right: 15,
    top: 50,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: '#4a90e2',
    fontSize: 14,
  },
  termsContainer: {
    marginBottom: 15,
  },
  termsText: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
  },
  linkText: {
    color: '#4a90e2',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupLink: {
    alignItems: 'center',
  },
  signupLinkText: {
    color: '#4a90e2',
    fontSize: 14,
  },
});

export default LoginScreen;
