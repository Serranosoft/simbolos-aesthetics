import { useState } from 'react';
import { Stack } from 'expo-router';
import Header from '../../src/components/header';
import TabViewComponent from '../../src/components/tab-view';
import CadenasSimbolos from './simbolos';
import CadenasEmojis from './emojis';
import CadenasSeparadores from './separadores';
import CadenasUniones from './uniones';

export default function Aesthetic() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Símbolos' },
        { key: 'second', title: 'Emojis' },
        { key: 'third', title: 'Divisor' },
        { key: 'fourth', title: 'Unión' },
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case "first":
                return <CadenasSimbolos />;
            case "second":
                return <CadenasEmojis />;
            case "third":
                return <CadenasSeparadores />;
            case "fourth":
                return <CadenasUniones />;
        }
    };

    return (
        <>
            <TabViewComponent renderScene={renderScene} setIndex={setIndex} index={index} routes={routes} />
            <Stack.Screen options={{ header: () => <Header title={"Cadenas decorativas"} /> }} />
        </>
    );
}