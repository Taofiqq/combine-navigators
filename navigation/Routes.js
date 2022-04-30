import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Predictor from "../screens/DrawerScreens/Predictor";
import History from "../screens/DrawerScreens/History";
// import Predictor from "../screens/DrawerScreens/Predictor";
// import Predictor from "../screens/DrawerScreens/Predictor";
// import Predictor from "../screens/DrawerScreens/Predictor";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Predictor" component={Predictor} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
