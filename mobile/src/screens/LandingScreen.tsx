import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const LandingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Header with Logo */}
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>MindTrack</Text>
        <Text style={styles.subtitle}>Your Mental Health Companion</Text>
      </View>

      {/* Features Section */}
      <View style={styles.featuresContainer}>
        <View style={styles.featureCard}>
          <Icon name="chart-line" size={30} color="#4a90e2" />
          <Text style={styles.featureTitle}>Mood Tracking</Text>
          <Text style={styles.featureDescription}>Monitor your emotional patterns over time</Text>
        </View>
        
        <View style={styles.featureCard}>
          <Icon name="calendar-alt" size={30} color="#2ecc71" />
          <Text style={styles.featureTitle}>Daily Journal</Text>
          <Text style={styles.featureDescription}>Record your thoughts and reflections</Text>
        </View>
        
        <View style={styles.featureCard}>
          <Icon name="chart-pie" size={30} color="#e74c3c" />
          <Text style={styles.featureTitle}>Insight Analytics</Text>
          <Text style={styles.featureDescription}>Get actionable insights from your data</Text>
        </View>
      </View>

      {/* Call to Action */}
      <View style={styles.ctaContainer}>
        <TouchableOpacity 
          style={styles.primaryButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  featuresContainer: {
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  ctaContainer: {
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4a90e2',
  },
  buttonText: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandingScreen;
