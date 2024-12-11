import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen"
import BottomTabs from './src/screens/BottomTabs';
import ProductDetail from './src/screens/ProductDetail';
import { LoginContext } from './src/contexts/UserLoginContext';
import { FavContext } from './src/contexts/RefetchFavContext';
import { CartContext } from './src/contexts/UserCartContext';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [userLogin, setUserLogin] = useState(true)
  const [refetchFav, setRefetchFav] = useState('')
  const [userCart, setUserCart] = useState(0)

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // console.log('events triggered ', fontsLoaded)
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    console.log("Font not loaded yet")
    return null;
  } else {
    console.log("Font loaded")
  }

  return (
    <LoginContext.Provider value={{ userLogin, setUserLogin }}>
      <CartContext.Provider value={{ userCart, setUserCart }}>
      <FavContext.Provider value={{ refetchFav, setRefetchFav }}>
        <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator
            screenOptions={{
              tabBarStyle: {
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 0,
                elevation: 0,
                height: 70,
              }
            }}
          >
            <Stack.Screen
              name="BottomTabs"
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
            <Stack.Screen name="product_detail" component={ProductDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavContext.Provider>
      </CartContext.Provider>
    </LoginContext.Provider>
  );
}
