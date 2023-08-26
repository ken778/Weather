import { StyleSheet } from "react-native";

const teperatureStyle = StyleSheet.create({
    mainContainerL:{
        height:'50%',
        // backgroundColor:'red'
    },
    temperatureContainer:{
        alignSelf:'center',
        // marginTop:70,
    },
    temperatureText:{
        alignSelf:'center',
        padding:5,
        fontSize:55,
        color:'white'
    },
    weather:{
        alignSelf:'center',
        padding:5,
        fontSize:30,
        textTransform:'uppercase',
        color:'white'
      
    },
    backgroundImage: {
      
        resizeMode: 'stretch', // Adjust the resizeMode as needed
        justifyContent: 'center', // You can adjust this based on your design
      },

})

export{teperatureStyle}