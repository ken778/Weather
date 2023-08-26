import { StyleSheet } from "react-native";

const weeklyTemperatureStyle = StyleSheet.create({
    mainContainer:{
        height:'50%',
        backgroundColor:'#47ab2f',
     

    },
    sunny:{
      backgroundColor:'#47ab2f',
      height:'50%',

    },
    rainy:{
      backgroundColor:'#57575D',
      height:'50%',
    },
    cloudy:{
      backgroundColor:'#54717A',
      height:'50%',
    },
    container: {
        borderBottomWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 4,
        padding: 5,
        marginBottom: 10,
      },
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        // borderBottomWidth: 1,
        borderColor: '#ddd',
      },
      cell: {
        color:'white',
       marginLeft:10,
       marginRight:10,
   
      },
      temperatureDetails: {
        display:"flex",
        flexDirection:'row',
        justifyContent: 'space-around',
      
        color: 'white',
      },
      temperatureDetailsText:{
        color: 'white',
        fontSize:16,
       
      },
      dayTextStyle:{
        width:'30%',
        color: 'white',
     
      },
      iconStyle: {
      width: 25, 
      height: 25, 
      alignSelf:'center'
      },
      degreeTextStyle:{
        alignSelf:'flex-end',
        color:'white',
        fontSize:16,
      },
      weekDaysTextStyle:{
        color:'white',
        fontSize:16,
        padding:4
      }
})
export{weeklyTemperatureStyle}