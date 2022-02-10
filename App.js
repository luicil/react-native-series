import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./src/pages/LoginScreen";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Series">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{
            title: "Series",
            headerTintColor: "white",
            headerStyle:{
              backgroundColor: "#6ca2f7",
              borderBottomWidth: 1,
              borderBottomColor: "#c5c5c5",
            },
            headerTitleStyle:{
              color: "white",
              fontSize: 30,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
