//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import {observer} from 'mobx-react';

import API from '../api/api';
import CharacterCard from '../components/characterCard';
import SearchHeader from '../components/searchHeader';
import ComicsStore from '../stores/comicsStore';
import {SafeAreaView} from 'react-native-safe-area-context';

@observer
class CharcterSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.getAllCharacters();
  }

  handleToDetailPage = character => {
    this.props.navigation.navigate('Detail', {character: character});
    console.log('CharctersScreen -> character', character);
  };

  getAllCharacters = () => {
    API.getCharacters({orderBy: '-modified'})
      .then(response => {
        this.setState({loading: false});
        ComicsStore.setCharacters(response.data.results);
      })
      .catch(err => {
        this.setState({loading: false, error: err});
      });
  };

  handleSearchSubmit = text => {
    API.getCharacters({nameStartsWith: text})
      .then(response => {
        this.setState({loading: false});
        ComicsStore.setCharacters(response.data.results);
      })
      .catch(err => {
        this.setState({loading: false, error: err});
      });
  };

  renderHeader = () => {
    return (
      <SearchHeader
        onSubmit={this.handleSearchSubmit}
        cancelSearch={() => this.getAllCharacters()}
      />
    );
  };

  renderCharacters = () => {
    return (
      <FlatList
        data={ComicsStore.characters.slice()}
        renderItem={({item}) => (
          <CharacterCard
            character={item}
            goToDetail={this.handleToDetailPage}
          />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          {this.state.loading ? <ActivityIndicator /> : this.renderCharacters()}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FfFfFf',
  },
});

export default CharcterSearchScreen;
