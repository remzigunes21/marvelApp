import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const SearchHeader = props => {
  const [value, setValue] = React.useState('');

  // eslint-disable-next-line no-undef
  cancelSearchs = () => {
    setValue('');
  };

  const {onSubmit} = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={text => setValue(text)}
        placeholder="Search"
        color="textDark"
        onSubmitEditing={() => {
          onSubmit(value);
        }}
        returnKeyType="google"
      />

      {value !== '' ? (
        // eslint-disable-next-line no-undef
        <TouchableOpacity style={styles.deleteButton} onPress={cancelSearchs}>
          <Icon name="trash" size={22} color="red" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  input: {
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,

    borderWidth: 1,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 4,
  },
});

export default SearchHeader;
