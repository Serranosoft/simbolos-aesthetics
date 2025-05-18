import { useContext, useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import Header from '../../src/components/header';
import TabViewComponent from '../../src/components/tab-view';
import CadenasSimbolos from './simbolos';
import CadenasEmojis from './emojis';
import CadenasSeparadores from './separadores';
import CadenasUniones from './uniones';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import { bannerId } from '../../src/utils/constants';
import { Context } from '../../src/Context';

export default function Aesthetic() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Símbolos' },
        { key: 'second', title: 'Emojis' },
        { key: 'third', title: 'Divisor' },
        { key: 'fourth', title: 'Unión' },
    ]);

    const { setAdTrigger } = useContext(Context);

    useEffect(() => {
        setAdTrigger((adTrigger) => adTrigger + 1);
    }, [index])

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
            <BannerAd unitId={bannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{}} />
        </>
    );
}