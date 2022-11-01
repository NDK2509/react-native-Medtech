import { DiabetesScreen, HomeScreen } from "../screens"
import Stack from "./Stack"

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Category" component={DiabetesScreen} />
    </Stack.Navigator>
  )
}
