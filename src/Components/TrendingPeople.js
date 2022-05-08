import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { IMAGE_POSTER_URL } from '../config';
import { GET } from '../Services/API';
//import Constants from '../Constants';
import Loader from './Loader';
import Styles from '../Services/Styles';

const TrendingPeople = props => {
    const [loading,setLoading] = useState(true);
    const [people,setPeople] = useState();
    
   useEffect(()  => {
    const getPeople = async() => {
       const data = await GET(props.url);
      // console.log(data);
       setPeople(props.isForPage === 'details' ? data.cast : data.results);
       setLoading(false);
    };
    getPeople();
   }, []);
 
    return (
        <View>{loading ? (<Loader/>) : (
        <View>
            <Text style = {Styles.heading}>{props.title}</Text>
            <FlatList
               keyExtractor={ item => item.id}
               data = {people}
               renderItem={displayPeople}
               horizontal
            />
        </View>
        )}
        </View>
    );
};

const displayPeople = ({item}) => {
    return (
        <View style={Styles.trendingPeopleContainer}>
            <Image
                source={{uri: `${IMAGE_POSTER_URL}${item.profile_path}`}}
                style = {Styles.trendingPeopleImage}
                />
            <Text style = {Styles.trendingPeopleName}> {item.name}</Text>
        </View>
    );
};

export default TrendingPeople;