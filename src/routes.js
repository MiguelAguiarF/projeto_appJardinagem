import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './screens/Home';
import { MaterialIcons, FontAwesome6, FontAwesome, } from '@expo/vector-icons'
import Profile from './screens/Profile';
import Login from "./screens/Login";
import Details from "./screens/Details";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: "#FFF", tabBarInactiveTintColor: "lightgray", tabBarStyle: { backgroundColor: "#08b20e" } }}>


            <Tab.Screen name="Home" component={Home}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={40} color={color} />
                    ),
                }}
            />

            <Tab.Screen name="Profile" component={Profile}
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="account-circle" size={30} color={color} />
                    ),
                }}
            />



        </Tab.Navigator>
    ); S
}

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="TabRoutes" component={TabRoutes} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}

