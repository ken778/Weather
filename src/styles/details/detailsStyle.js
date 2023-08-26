import { StyleSheet } from "react-native";


const detailsStyle = StyleSheet.create({
    banner:{
        height:"55%",
       
    
    },
    backgroundImage:{
       // Adjust the resizeMode as needed
        justifyContent: 'center', // You can adjust this based on your design
    },
    heading:{
        padding:15,
        fontSize:20
    },
    detailsContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        marginTop:20
    },
    details:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-evenly',
       // backgroundColor:'red',
        width:130,
        padding:2
    },
    button:{
        width:"75%",
        padding:20,
        backgroundColor:'green',
        alignSelf:'center',
        marginTop:40,
        borderRadius:10,
    },
    buttonText:{
        alignSelf:'center',
        color:'white'
    },
    iconStyle:{
        marginTop:10
    },weatherText:{
        color:'black',
        fontWeight:'bold',
    },
    temperatureStyle:{
        color:'black',
        fontWeight:'bold',
    },
    locationTextStyle:{
        marginTop:-50,
        padding:10,
        fontSize:25,
        color:'white'
    }
})

export{detailsStyle}