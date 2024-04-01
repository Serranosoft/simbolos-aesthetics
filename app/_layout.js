
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { DataContext } from '../src/utils/DataContext';
import { runOnJS } from 'react-native-reanimated';

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

    if (!fontsLoaded) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="light" />
            <GestureDetector gesture={tap}>
                <DataContext.Provider value={{ openFavorites: openFavorites, setOpenFavorites }}>
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