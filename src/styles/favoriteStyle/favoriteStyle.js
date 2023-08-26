import { StyleSheet } from "react-native";

const favoriteStyle = StyleSheet.create({
    banner:{
       height:150,
       backgroundColor:'#47ab2f'
    },
    bannerText:{
        color:'white',
        fontSize:30,
        alignSelf:"center",
        padding:40
    },
    favouriteDetailsContainer:{
        display:"flex",
        flexDirection:'row',
        backgroundColor:'lightgray',
        marginTop:10,
        width:'95%',
        alignSelf:'center',
        borderRadius:10,
        

    },
    IconStyle:{
       
        color:'#0c2bf2',
        padding:10,
        marginTop:2
    },
    detailsText:{
        fontSize:16,
        padding:2,
        color:'black'
    },
    likedPlaces:{
        padding:20,
        fontSize:20,
    },
    underline:{
        height:2,
        backgroundColor:'lightgray',
        width:40,
        marginLeft:20,
        marginTop:-16
    }
})
export{favoriteStyle}