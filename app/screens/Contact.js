import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';

const githubURL = 'https://github.com/remzigunes21';
const linkedlnURL =
  'https://www.linkedin.com/in/remzi-g%C3%BCne%C5%9F-20797a168/';

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const Contact = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={githubURL}>Open Github URL</OpenURLButton>
      <OpenURLButton url={linkedlnURL}>Open Linkedln URL</OpenURLButton>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
