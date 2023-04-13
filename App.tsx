import React from 'react';
// import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from "@expo-google-fonts/inter";

import { Home } from './src/screens/Home/index';
import theme from './src/styles/theme';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  })

  /* if(!fontsLoaded){
    return <AppLoading/>
  } */
  
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home/> : <Loading/>}
    </ThemeProvider>
  );
}
