import React from 'react';
import * as SplashScreen from 'expo-splash-screen'; //  Exibir uma tela de carregamento (splash screen) personalizada ao iniciar um aplicativo Expo.
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
 } from '@expo-google-fonts/inter';
 import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
 } from '@expo-google-fonts/archivo';
 
import { Routes } from './src/routes';
import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded]  = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if (!fontsLoaded) {    // se o fontsLoaded não(!) tiver carregado, executar o App loading para segurar a aplicação enquanto as fontes são carregadas 
    return null
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
