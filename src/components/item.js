import { Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
import FavoriteBubble from "./favorite-bubble";
import { memo, useContext, useEffect, useState } from "react";
import * as Clipboard from 'expo-clipboard';
import { DataContext } from "../DataContext";

function Item({ text, id, handleActive, activeId, setText }) {

    const [trigger, setTrigger] = useState(false);
    const { setAdTrigger } = useContext(DataContext);

    useEffect(() => {
        if (activeId !== null) {
            setTrigger(id === activeId);
        }
    }, [activeId])

    async function addToClipboard() {
        await Clipboard.setStringAsync(text);

        ToastAndroid.showWithGravityAndOffset(`¡${text} Copiado!`, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50);
        handleActive(id);
        if (setText) {
            setText(text);
        }

        setAdTrigger((adTrigger) => adTrigger + 1);
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