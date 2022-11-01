import { NavigationContainer } from "@react-navigation/native"
import { useEffect } from "react";
import { LogBox } from "react-native";
import MainNavigation from "./src/navigations/MainNavigation"

export default () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}