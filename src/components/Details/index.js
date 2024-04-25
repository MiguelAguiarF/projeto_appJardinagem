import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Entypo, AntDesign, Fontisto, Ionicons } from '@expo/vector-icons';
import Home from '../../screens/Home';
import { useNavigation } from '@react-navigation/native';



export default function Posts({
    image,
    name,
    description}) {
        const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.seta}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <AntDesign name="arrowleft" size={40} color="black" />
            </TouchableOpacity>
            </View>

            <View style={styles.post}>
           <View style={{
            alignContent:'flex-start',
            justifyContent: 'space-between',
            marginTop:7,
           }}>

           
            </View>
            <Image style={{width:'100%',height:400, marginVertical:10}} source={image} />


            <View style={{flexDirection:'row', width:'95%'}}>
                <View style={{flexDirection:'row', flex:1}}>
                <Text style={{flex:1, marginLeft:15, fontSize:25, fontWeight:'bold', justifyContent:'center' }}>{name}</Text>
                </View>

                <View>
                </View>
            </View>
            <Text style={{fontSize:15, width:'95%'}}>{description}</Text>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center'
    },
    post: {
        width: '95%',
        backgroundColor:'white',
        marginVertical:25,
        alignItems:'center',
        textAlign:'center',
    
    },

    seta:{
        width:'100%',
        marginTop:20,

    },
})