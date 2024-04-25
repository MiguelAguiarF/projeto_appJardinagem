import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from "react";
import aa from '../assets/tulipa.jpg';
import Det from "../components/Details";
import LogoBar from '../components/LogoBar';



export default function Details({routes}){

    return(
        <View>
            <LogoBar />
           <Det />
        </View>

    );
}

