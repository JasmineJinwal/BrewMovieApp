import React,{useState, useEffect} from 'react';
import { View, Text, Image, Linking, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { GET } from '../Services/API';
import { IMAGE_POSTER_URL } from '../config';
import Styles from '../Services/Styles';
import Loader from './Loader';
import Constants from '../Constants';
import Icon from 'react-native-vector-icons/Entypo';
import { DeprecatedAccessibilityRoles } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedViewAccessibility';
import DisplayMode from 'react-native/Libraries/ReactNative/DisplayMode';
import { SliderBox } from 'react-native-image-slider-box';
import TrendingMovies from './TrendingMovies';
import TrendingPeople from './TrendingPeople';

const MovieDetails = (props) => {
   const [loading, setLoading] = useState(true);
   const [details, setDetails] = useState();
   
   useEffect(()=>{
     const getDetails = async () =>{
        const data = await GET(`/movie/${props.route.params.movieId}`);
        console.log(data);
        setDetails(data);
        setLoading(false);
     };
      getDetails(); 
  }, []);

  const getGenre = () => {
    return details.genres.map(genre => (
      <View style = {Styles.genreContainer}>
        <Text style = {Styles.genre}> {genre.name} </Text>
      </View>
    ));
  };

  return (
    <ScrollView style= {Styles.sectionBg}>
      {loading ? <Loader/> : (
       <View>
           <View>
              <Image source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}} style={Styles.imageBg}
              />
            </View>
                <Text style={Styles.detailsMovieTitle}>    {details.original_title}
                </Text>  
            {details.homepage ? (
              <View style={Styles.linkContainer}>
                <TouchableOpacity onPress={() => {Linking.openURL(details.homepage)}}>
                <Icon name="link" size={22} color={Constants.textColor}/>
                </TouchableOpacity>
              </View>
            ): null }
            <Text style={Styles.heading}>OVERVIEW</Text>
            <Text style={Styles.overview}>{details.overview}</Text>
           
           <View style={Styles.detailsContainer}> 
            <View>
              <Text style= {Styles.heading}> DURATION </Text>
              <Text style = {Styles.duration}>{details.runtime} min.</Text>
            </View>

            <View>
              <Text style= {Styles.heading}> BUDGET </Text>
              <Text style = {Styles.budget}>$ {details.budget}</Text>
            </View>

            <View>
              <Text style={Styles.heading}> RELEASE DATE </Text>
              <Text style={Styles.releaseDate}>{details.release_date}</Text>
            </View>
          </View>
             
              <Text style={Styles.heading}>GENRE</Text>
            
             <ScrollView horizontal={true} style={{paddingStart:5, display: 'flex', flexDirection: "row" }}>{getGenre()}</ScrollView> 

          <TrendingPeople title="CAST" navigation={props.navigation} url={`/movie/${props.route.params.movieId}/credits`} 
          isForPage="details"
          />

          <TrendingMovies title="SIMILAR MOVIES" navigation={props.navigation} url={`/movie/${props.route.params.movieId}/similar`} 
          />

        </View>            
   )}
    </ScrollView>
  );
};

export default MovieDetails;
