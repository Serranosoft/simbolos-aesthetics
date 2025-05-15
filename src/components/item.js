import { Alert, Platform, Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
import FavoriteBubble from "./favorite-bubble";
import { memo, useEffect, useState } from "react";
import * as Clipboard from 'expo-clipboard';

function Item({ text, id, handleActive, activeId, setText }) {

    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        if (activeId !== null) {
            setTrigger(id === activeId);
        }
    }, [activeId])

    async function addToClipboard() {
        await Clipboard.setStringAsync(text);

        if (Platform.OS === "android") {
            ToastAndroid.showWithGravityAndOffset(
                `¡${text} Copiado!`,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        } else {
            Alert.alert(`¡${text} Copiado!`);
        }

        handleActive(id);
        if (setText) {
            setText(text);
        }
    }

    return (
        <View style={styles.card}>
            <Pressable onPress={addToClipboard}>
                <Text style={styles.text}>{text}</Text>
                <FavoriteBubble triggered={trigger} text={text} />
            </Pressable>
        </View>
    )
}

export default memo(Item)

const styles = StyleSheet.create({
    card: {
        margin: 12,
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#ff6b87",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.99,
        shadowRadius: 3.22,
        elevation: 4,
        borderWidth: 1,
        borderColor: "rgba(247, 215, 226, 0.25)"
    },
    text: {
        fontSize: 25,
        padding: 12,
        textAlign: "center"
    }
})