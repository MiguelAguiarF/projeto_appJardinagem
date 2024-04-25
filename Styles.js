import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems:"center",
    padding: 15,
    backgroundColor: "#ffffff",
    marginTop: 30,

  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 50,
  },
  texto:{
    fontSize:25, 
    fontWeight:"bold",
    alignItems:"stretch",
    width:370,
    textAlign:"left",
  },

  intexto:{
    fontSize:20,
  },

  input: {
    width: "100%",
    marginBottom: 16,
    borderWidth: 0,
    padding: 10,
    fontSize: 20,
    borderRadius: 8,
    borderColor: "#000000",
    backgroundColor: "#fff",
    color: "#1f2124",
    borderBottomWidth:1,
    flexDirection: "row",
  },

  text:{
    fontSize:15, 
    fontWeight:"bold",
    alignItems:"stretch",
    width:370,
    textAlign:"right",
    marginBottom:20,
  },
  errorText: {
    color: "red",
    marginTop: 16,
    fontSize: 16,
  },
});

export default styles;
