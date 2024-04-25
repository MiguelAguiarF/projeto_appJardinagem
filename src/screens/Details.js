import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from "react";
import aa from '../assets/tulipa.jpg';
import Det from "../components/Details";
import LogoBar from '../components/LogoBar';



export default function Details({ route }) {
    const { nome_cientifico, desc, imagem } = route.params;
    return (
        <View>
            <LogoBar />
            <Det
                image={source={uri:`http://10.0.2.2:3000/assets/${imagem}`}}
                name={nome_cientifico}
                description={desc}
            />
        </View>

    );
}

