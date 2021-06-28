import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MovieScreen from '../screen/MovieScreen';
import MovieDetailScreen from '../screen/MovieDetailScreen';
import MovieBooking from '../screen/MovieBooking';

const MoviesNavigator = createStackNavigator(
  {
    Movies: {
      screen: MovieScreen
    },
    MovieDetails: MovieDetailScreen,
    MovieBooking: {
        screen: MovieBooking
      },
  }
);
export default createAppContainer(MoviesNavigator);
