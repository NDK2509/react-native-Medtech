import { faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { DiabetesScreen, ProfileScreen } from "../screens"
import colors from "../theme/colors"
import HomeStack from "./HomeStack"
import Tab from "./Tab"

const focusedIcon = (isFocused: boolean) => {
  return isFocused ? 30 : 20
}

export default () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primaryBlue }}>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ tabBarIcon: ({ focused, color }) => <FontAwesomeIcon color={color} icon={faHome} size={focusedIcon(focused)} />, title: "" }} />
      <Tab.Screen name="Diabets" component={DiabetesScreen} options={{ tabBarIcon: ({ focused, color }) => <FontAwesomeIcon color={color} icon={faHome} size={focusedIcon(focused)} />, title: "" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ focused, color }) => <FontAwesomeIcon color={color} icon={faUser} size={focusedIcon(focused)} />, title: "" }} />
    </Tab.Navigator>
  )
}