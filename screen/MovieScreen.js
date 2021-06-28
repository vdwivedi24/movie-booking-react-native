import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import MovieItem from '../components/MovieItem';

const MovieScreen = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:6700/movies')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    const renderMovieItem = itemData => {
      return (
        <MovieItem
          title={itemData.item.Title}
          onSelectmovie={() => {
            props.navigation.navigate({
              routeName: 'MovieDetails'
            });
          }}
        />
      );
    };
  

    return (
      <View style={styles.screen}>
        {isLoading ? <Text>Loading...</Text> : 
        <FlatList
          data={data}
          renderItem={renderMovieItem}
          style={{ width: '100%' }}
        />
}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15
    }
  });

export default MovieScreen;
