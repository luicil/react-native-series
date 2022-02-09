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
            headerTintColor: "#fff",
            headerStyle:{
              backgroundColor: "#10002b",
            },
            headerTitleStyle:{
              color: "#fff",
              fontSize: 23,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
