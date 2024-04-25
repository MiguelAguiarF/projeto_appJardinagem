import { StyleSheet, View, FlatList, Text, Image, StatusBar, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import LogoBar from "../components/LogoBar";
import Plantbanner from "../components/Plantbanner";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Home(props) {
  const [plantData, setPlantData] = useState([]);
  const [query, SetQuery] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    fetch("http://10.0.2.2:3000/plantas")
      .then((response) => response.json())
      .then((data) => setPlantData(data));
  }, []);

  const filteredPlant = query
    ? plantData.filter((item) =>
      item.nome.toLowerCase().includes(query.toLowerCase())
    )
    : plantData;

  return (
    <View style={styles.container}>
      <LogoBar />

      <View style={styles.list}>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <View style={styles.filtro} >
          <FontAwesome name="search" size={17} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="  Pesquisar plantas"
            placeholderTextColor="#cccccc"
            value={query}
            onChangeText={(text) => SetQuery(text)}
          />
        </View>


        <FlatList
          data={filteredPlant}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Plantbanner
              planta={item}
              onPress={() => props.navigation.navigate('Details', item)}
            />
          )} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  list: {
    width: 412,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 160
  },
  searchInput: {
    flex: 1
  },
  filtro: {
    marginBottom: 20,
    width: "92%",
    height: 30,
    color: "#ffffff",
    borderRadius: 15,
    borderWidth: 1.5,
    padding: 5,
    flexDirection: "row",
    borderColor: "green"
  }
});
