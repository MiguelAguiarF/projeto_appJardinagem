import { Image, StyleSheet } from "react-native";
import logo from "../../assets/colossal_logo.png";
import {LinearGradient} from 'expo-linear-gradient';

export default function LogoBar (){
    return(
        <LinearGradient start={{x:0, y:0}} end={{x:1, y:0}} colors={['#08b20e','#045106']} style={styles.logobar} ><Image source={logo} style={{height:50, marginLeft:-25,marginTop:20,resizeMode:"contain"}} />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    logobar:{
        width:"412",
        height:70,
        justifyContent:"center",
        
      }
})