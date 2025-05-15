
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { colors } from '../src/utils/styles';
import Constants from "expo-constants";

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

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.container}>
                <Stack screenOptions={{ headerShown: true }} />
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.light
    },

})