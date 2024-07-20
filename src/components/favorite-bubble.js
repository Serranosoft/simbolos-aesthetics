import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
    interpolateColor,
} from 'react-native-reanimated';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from '../utils/styles';

export default function FavoriteBubble({ triggered, text }) {

    const triggerAnimation = useSharedValue(0);

    useEffect(() => {
        triggerAnimation.value = triggered ? 1 : 0;
    }, [triggered]);

    const animatedCircleStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                scale: withTiming(triggerAnimation.value ? 1 : 0, {
                    duration: 150,
                    easing: Easing.linear,
                })
            }],
            position: 'absolute',
            top: -20,
            left: -20,
            borderRadius: 100,
            backgroundColor: colors.light,
            width: 40,
            height: 40,
            padding: 5
        };
    });

    const animatedBorderStyle = useAnimatedStyle(() => {
        return {
            borderWidth: withTiming(triggerAnimation.value ? 6 : 0, {
                duration: 150,
                easing: Easing.linear,
            }),
            position: 'absolute',
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            borderColor: colors.light
        };
    });

    async function addToFavorites() {
        const exist = await checkIfExist();

        if (!exist) {
            let favorites = await AsyncStorage.getItem("favorites") || [];
            if (favorites.length > 0) {
                favorites = JSON.parse(favorites);
            }
            
            favorites.push(text);
            await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
        }

        ToastAndroid.showWithGravityAndOffset(
            `${text} guardada en favoritos`,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );

    }

    async function checkIfExist() {
        let favorites = await AsyncStorage.getItem("favorites") || null;
        if (favorites) {
            favorites = JSON.parse(favorites);
            if (favorites.includes(text)) {
                return true;
            } else {
                return false
            }
        }
        return false;
    }


    return (
        <Animated.View style={animatedBorderStyle}>
            <Animated.View style={animatedCircleStyle}>
                <TouchableOpacity onPress={addToFavorites}>
                    <Image source={require("../../assets/heart2.png")} style={{ width: "100%", height: "100%" }} />
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    )
}