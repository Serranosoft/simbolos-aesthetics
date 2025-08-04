import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Link, Stack } from 'expo-router';
import { ui } from '../src/utils/styles';

export default function Root() {

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <Text style={ui.h2}>Copia y pega símbolos coquette</Text>
            <Text style={{ fontSize: 40 }}>🩰🕯️🦢🏹</Text>
            <Image source={require("../assets/home.jpg")} style={styles.separator} />
            <View style={{ marginTop: -64 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.wrapper}>
                        <Link href="/colores/rosa" asChild>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={[ui.h4, { color: "#000", textAlign: "center" }]}>COLORES</Text>
                            </TouchableOpacity>
                        </Link>
                        <Link href="/emojis/amarillo" asChild>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={[ui.h4, { color: "#000", textAlign: "center" }]}>EMOJIS</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                    <View style={styles.wrapper}>
                        <Link href="/aesthetic/mejor" asChild>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={[ui.h4, { color: "#000", textAlign: "center" }]}>AESTHETIC</Text>
                            </TouchableOpacity>
                        </Link>
                        <Link href="/simbolos/corazon" asChild>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={[ui.h4, { color: "#000", textAlign: "center" }]}>SIMBOLOS</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                    <View style={styles.wrapper}>
                        <Link href="/cadenas/simbolos" asChild>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={[ui.h4, { color: "#000", textAlign: "center" }]}>CADENAS</Text>
                            </TouchableOpacity>
                        </Link>
                        <Link href="/top/coquette" asChild>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={[ui.h4, { color: "#000", textAlign: "center" }]}>TOP</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                    <View style={styles.wrapper}>
                        <Link href="/cadenas-con-texto/saludos" asChild>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={[ui.h4, { color: "#000", textAlign: "center" }]}>CADENAS CON TEXTO</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
        alignItems: "center",
        backgroundColor: "#fff",
        position: "relative",
        paddingTop: 40,
    },

    separator: {
        width: "100%",
        resizeMode: "contain",
        marginTop: -80,
    },

    btn: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: "#F7D7E2",
        borderWidth: 4,
        borderColor: "#F9BAC6",
        borderRadius: 100,
        alignSelf: "center",
    },

    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        marginVertical: 20
    }
})