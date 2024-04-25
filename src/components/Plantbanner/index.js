import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function Plantbanner({planta,onPress}){

const navigation = useNavigation();

    return(
      <TouchableOpacity onPress={onPress}>
        <View style={styles.plant}>
           <Image style={styles.img} source={{uri:`http://10.0.2.2:3000/assets/${planta.imagem}`}} />
          <View style={styles.nameview}>
          <Text style={styles.name}>{planta.nome}</Text>
          </View >
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    plant:{
        marginTop:20,
        width:380,
        height:120,
        borderRadius:10,
        overflow:"hidden",
        backgroundColor:"#5ece62",
        flexDirection:"row",
        flex:1,
        alignItems:"center"
      },
      img:{
        width:150,
        height:120,
      },

      nameview:{
        justifyContent:"center",
        alignItems:"center",
        
        height:30,
        width:200,
        marginLeft:15,
        marginBottom:35
      }
      ,
      name:{
          fontSize:21,
          textDecorationLine:"underline",
          fontWeight:"bold",
          
      }
})