import React from 'react';
import { View, Text } from 'react-native';
import DiscoverMovies from './Components/DiscoverMovies';
import TrendingMovies from './Components/TrendingMovies';
import TrendingPeople from './Components/TrendingPeople';
import MovieDetails from './Components/MovieDetails';
import Constants from './Constants';
import Styles from './Services/Styles';

const Home = (props) => {
    return (
        <View styles={Styles.sectionBg}>
        {/* <View styles={Constants.baseColor}> */}
        <DiscoverMovies navigation={props.navigation}/>
        <TrendingPeople title="Trending People" url="/trending/person/week" />
        <TrendingMovies title=" Trending Movies" url="/movie/top_rated" navigation={props.navigation} />
        </View>
    );
};

export default Home;
