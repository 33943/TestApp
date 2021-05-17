import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import Tabs from "./navigation/tabs"
import { Home, Search, Order, Setting } from './screens'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initalRouteName={"Home"}
            >
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Order" component={Order} />
                <Stack.Screen name="Setting" component={Setting} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;