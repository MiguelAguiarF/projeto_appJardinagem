import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import ColossalLogo from "../assets/colossal_logo.png";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import planta1 from "../assets/tulipa.jpg";
import planta2 from "../assets/Suculenta.jpg";
import planta3 from "../assets/Samambaia-america.jpg";
import LogoBar from '../components/LogoBar';

export default function Profile(){
   return(
    <View style={styles.container}>
        <View style={styles.header}>
            <LogoBar/>
        </View>
        <View style={styles.perfil}>
          <MaterialCommunityIcons name="account-circle" size={90} color="black" />
        </View>
        <View>
            <TouchableOpacity style={styles.botao}>
                <Text>e d i t a r  p e r f i l</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.settings}>      
        <AntDesign name="setting" size={33} color="black"/>
        </TouchableOpacity>
        <View style={styles.username}>
            <Text>user name</Text>
        </View>
        <View style={styles.informacao}>
            <Text>informação</Text>
        </View>
        <View style={styles.box}>
            <TouchableOpacity>
                <MaterialCommunityIcons name="plus-box-outline" size={24} color="gray" />
            </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        <View style={styles.plantas}>
            <TouchableOpacity>
                <Image source={planta1} style={styles.image}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={planta2} style={styles.image}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={planta3} style={styles.image}></Image>
            </TouchableOpacity>
        </View>
        </View>
   )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    perfil:{
        marginTop: 30,
    },
    botao:{
        width: 200,
        height: 25,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: 110,
        marginTop: -55,
    },
    settings:{
        width: 36,
        height: 36,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 345,
        marginTop: -60
    },
    username:{
        marginTop: 30,
        padding: 15,
        fontSize: 20,
    },
    informacao:{
        padding: 15,
        fontSize: 20,
    },
    box:{
        padding: 15,
        marginLeft: 180
    },
    line:{
        width: '100%',
        height: 0,
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    plantas:{
        padding: 15,
        display: "flex",
        flexDirection:"row",
        gap: 10
    },
    
    image:{
        width:120,
        height:120,
        borderWidth:5,
        borderRadius:10,
    }
});
