import { faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DiabetesScreen, HomeScreen, ProfileScreen } from "./src/screens"
import colors from "./src/theme/colors"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const focusedIcon = (isFocused: boolean) => {
  return isFocused ? 30 : 20
}

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Category" component={DiabetesScreen} />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: colors.primaryBlue}}>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({focused, color}) => <FontAwesomeIcon color={color} icon={faHome} size={focusedIcon(focused)} />, title: ""}}/>
        <Tab.Screen name="Diabets" component={DiabetesScreen} options={{tabBarIcon: ({focused, color}) => <FontAwesomeIcon color={color} icon={faHome} size={focusedIcon(focused)}/>, title: ""}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: ({focused, color}) => <FontAwesomeIcon color={color} icon={faUser} size={focusedIcon(focused)} />, title: ""}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}