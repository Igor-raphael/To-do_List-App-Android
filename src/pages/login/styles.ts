import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },

    boxTop:{
        height:Dimensions.get("window").height/3,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',

    },

    boxMid:{
        height:Dimensions.get("window").height/4,
        width:'100%',
        paddingHorizontal:37

    },

    boxBottom:{
        height:Dimensions.get("window").height/3,
        width:'100%',
        alignItems:'center',
    },

    logo:{
          width:80,
          height:80
    },

    text:{
        fontWeight:'bold',
        marginTop:40,
        fontSize:18
    },

    titleInput:{
        marginLeft:5,
        color:themas.Colors.gray,
        marginTop:20
    },

    boxInput:{
       width:'100%',
       height:40,
       borderWidth:1,
       marginTop:10,
       flexDirection:'row',
       alignItems:'center',
       borderRadius:40,
       paddingHorizontal:5,
       backgroundColor: themas.Colors.lightGray,
       borderColor: themas.Colors.lightGray
    },

    input:{
        height:'100%',
        width:'90%',
        borderRadius:40,
        paddingLeft:10
    },

    button:{
        width:230,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.Colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },

    textButton:{
        fontSize:16,
        color:'#ffff',
        fontWeight:'bold'

    },


    textBottom:{
        fontSize:16,
        color: themas.Colors.gray,
    }





})