
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { createRef, useEffect, useState } from 'react';
import { colors } from '../src/utils/styles';
import Constants from "expo-constants";
import AdsHandler from '../src/components/AdsHandler';
import { Context } from '../src/Context';

SplashScreen.preventAutoHideAsync();

export default function Layout() {

    // Carga de fuentes.
    const [fontsLoaded] = useFonts({
        "Regular": require("../assets/fonts/Mali-Regular.ttf"),
        "Medium": require("../assets/fonts/Mali-Medium.ttf"),
        "Semibold": require("../assets/fonts/Mali-Semibold.ttf"),
        "Bold": require("../assets/fonts/Mali-Bold.ttf"),
    });

    // Anuncios
    const adsHandlerRef = createRef();
    const [adTrigger, setAdTrigger] = useState(0);
    const [showOpenAd, setShowOpenAd] = useState(true);

    // Trigger para mostrar anuncio intersitial
    useEffect(() => {
        if (adTrigger > 3) {
            adsHandlerRef.current.showIntersitialAd();
            setAdTrigger(0);
        }
    }, [adTrigger])

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <StatusBar style="light" />
            <AdsHandler ref={adsHandlerRef} showOpenAd={showOpenAd} setShowOpenAd={setShowOpenAd} />
            <Context.Provider value={{ setAdTrigger }}>
                <View style={styles.container}>
                    <Stack screenOptions={{ headerShown: true }} />
                </View>
            </Context.Provider>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        justifyContent: "center",
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.light
    },

})