import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import ColossalLogo from "../assets/logo_colossal.png";
import CustomButton from "../components/CustomButton";
import styles from "../../Styles";
import { Entypo, AntDesign } from '@expo/vector-icons';

export default function Login() {
  const [email, setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();
  // Credenciais
  const credentialsEmail = "123";
  const credentialsPassword = "123";

  function handleSubmit() {
    setError("");
    if(!email.trim()) {
      setError("Por favor, insira um e-mail");
      return;
    }

    if(!password.trim()) {
      setError("Por favor, insira uma senha");
      return;
    }

    if(email !== credentialsEmail || password !== credentialsPassword) {
      setError("Credenciais invalidas");
      setEmail("");
      setPassword("");
    }

   navigation.navigate("TabRoutes")
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={ColossalLogo} />
      <View styles={styles.text}>
        <Text style={styles.texto}>Entrar</Text>
      </View>

      <View style={styles.input}>
      <Entypo name="email" size={22} color="#959ba3" />
        <TextInput
        style={styles.intexto}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder= " Digite seu email"
          placeholderTextColor="#959ba3"
          keyboardType="email-address"
          
        />
        </View>

    <View style={styles.input}>
      <AntDesign name="lock" size={24} color="#959ba3" />
      <TextInput
        style={styles.intexto}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Digite sua senha"
        placeholderTextColor="#959ba3"
        secureTextEntry={true}
      />
    </View>

        <TouchableOpacity>
          <Text style={styles.text}>Esqueceu a senha?</Text>
        </TouchableOpacity>
    
      <CustomButton title="A c e s s a r" 
      onPress={() => {
        handleSubmit()
      }} />

      {error && <Text style={styles.errorText}>{error}</Text>}

    </View>
  );
}
