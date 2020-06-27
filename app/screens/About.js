import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: 'blue',
          fontSize: 22,
          fontWeight: '700',
          fontFamily: 'verdana',
          textAlign: 'center',
        }}>
        Computer science position utilizing solid training and experience in
        computer programming, data management, software development, website
        design, mobile application development and system operations.{' '}
      </Text>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua',
  },
});
