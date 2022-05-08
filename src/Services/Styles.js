import { Dimensions, StyleSheet } from "react-native";
import Constants from "../Constants";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Styles= StyleSheet.create({
    sectionBg: {
        color: Constants.baseColor,
        //color: '#151C26',
        height: deviceHeight,
    },
    trendingPeopleImage: {
        height: 70,
        width: 70,
        borderRadius: 500,
      },
      trendingPeopleName: {
        width: 60,
        color: Constants.textColor,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
      },
      trendingPeopleContainer: {
        margin: 10,
      },
      heading:{
        fontSize: 19,
        color: Constants.fadedColor,
        margin: 10,
      },
      posterImage: {
        height:250,
        width: 150,
        borderRadius:10,
      },
      movieTitle: {
        color: Constants.textColor,
        width:150,
        textAlign:'center',
        marginTop: 5,
        fontSize: 16,
      },
      imageBg:{
        width: deviceWidth,
        height: 300,
      },
      detailsMovieTitle:{
         fontSize: 22,
         color: '#faf8f2',
         textAlign:'center',
         marginTop: -32,
         fontWeight:'bold',
         fontStyle:'italic',
      },
      linkContainer:{
        backgroundColor:Constants.secondaryColor,
        borderRadius:100,
        padding: 10,
        width: 40,
        marginLeft:10,
        marginTop:-20,
      },
      overview:{
        fontSize:15,
        color: '#1920f7',
        marginHorizontal: 10,
        textAlign:'justify',
      },
      budget:{
        fontSize:15,
        color: '#1920f7',
        marginHorizontal: 10,
        textAlign:'justify',
        paddingLeft:10,
        fontWeight:'bold',
      },
      releaseDate:{
        fontSize:15,
        color: '#1920f7',
        marginHorizontal: 10,
        textAlign:'justify',
        paddingLeft:10,
        fontWeight:'bold',
      },
      duration:{
        fontSize:15,
        color: '#1920f7',
        marginHorizontal: 10,
        textAlign:'justify',
        paddingLeft:10,
        fontWeight:'bold',
      },
      detailsContainer:{
        marginVertical: 10,
        flexDirection:'row',
        justifyContent:"space-between",
        display:'flex',
      },
      genreContainer:{
        borderRadius: 5,
        borderColor: Constants.textColor,
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginHorizontal: 10,
      },
      genre:{
        color: Constants.textColor,
        fontSize: 13,
      },
});

export default Styles;