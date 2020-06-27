//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Animated,
  Image,
  SafeAreaView,
} from 'react-native';
import API from '../api/api';
import ComicCard from '../components/comicCard';

const {width} = Dimensions.get('screen');

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: null,
      loading: true,
    };
  }

  componentDidMount() {
    const {navigation, route} = this.props;
    const params = route.params;
    this.getComics(params.character?.id);
  }

  getComics = id => {
    API.getComicsOfCharacterById(id, {orderBy: '-onsaleDate'})
      .then(res => {
        this.setState({
          comics: res.data.results,
          loading: false,
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({error: err, loading: false});
      });
  };

  renderComics = () => {
    const {comics} = this.state;
    return comics.map((comic, i) => {
      return <ComicCard key={i} comic={comic} />;
    });
  };

  render() {
    const {loading, comics} = this.state;
    const {navigation, route} = this.props;
    const params = route.params;

    console.log(navigation);
    const character = params.character;
    console.log('DetailScreen -> render -> character', character);

    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={styles.container} scrollEventThrottle={16}>
          <View style={styles.profile}>
            <View style={{alignItems: 'center'}}>
              <Image
                resizeMode="cover"
                style={[styles.image]}
                source={{
                  uri: `${character.thumbnail?.path}.${
                    character.thumbnail?.extension
                  }`,
                }}
              />
            </View>
            {character.description !== '' && (
              <Text style={styles.description}>{character.description}</Text>
            )}
          </View>
          <Text style={styles.sectionTitle}>Çizgi Romanlar</Text>
          <View style={styles.comics}>
            {loading ? <ActivityIndicator /> : this.renderComics()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {},
  comicContainer: {
    padding: 10,
    alignItems: 'center',
  },
  comics: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  description: {
    color: 'white',
    backgroundColor: 'black',
    padding: 10,
  },
  sectionTitle: {
    alignSelf: 'flex-start',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DetailScreen;
