
import { Link, SplashScreen, Stack, Tabs } from 'expo-router';
import { StatusBar, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { createRef, useEffect, useState } from 'react';
import { ui } from '../src/utils/styles';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { DataContext } from '../src/utils/DataContext';
import { runOnJS } from 'react-native-reanimated';
import AdsHandler from '../src/components/AdsHandler';
SplashScreen.preventAutoHideAsync();

export default function Layout() {

    // Carga de fuentes.
    const [fontsLoaded] = useFonts({
        "Regular": require("../assets/fonts/Mali-Regular.ttf"),
        "Medium": require("../assets/fonts/Mali-Medium.ttf"),
        "Semibold": require("../assets/fonts/Mali-Semibold.ttf"),
        "Bold": require("../assets/fonts/Mali-Bold.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    const [openFavorites, setOpenFavorites] = useState(false);
    const tap = Gesture.Tap().onBegin((event) => { if (openFavorites) runOnJS(setOpenFavorites)(false) })

    // Gestión de anuncios
    const [adTrigger, setAdTrigger] = useState(0);
    const adsHandlerRef = createRef();

    useEffect(() => {
        if (adTrigger > 4) {
            adsHandlerRef.current.showIntersitialAd();
            setAdTrigger(0);
        }
    }, [adTrigger])

    if (!fontsLoaded) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="light" />
            <AdsHandler ref={adsHandlerRef} adType={[0]} />
            <GestureDetector gesture={tap}>
                <DataContext.Provider value={{ openFavorites: openFavorites, setOpenFavorites, setAdTrigger: setAdTrigger }}>
                    <View style={styles.container}>
                        <Stack screenOptions={{ headerShown: true }} />
                    </View>
                </DataContext.Provider>
            </GestureDetector>
        </GestureHandlerRootView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#F9BAC6"
    },

})