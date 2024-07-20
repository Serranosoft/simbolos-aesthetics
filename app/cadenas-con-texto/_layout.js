import { useState } from 'react';
import { Stack } from 'expo-router';
import Header from '../../src/components/header';
import TabViewComponent from '../../src/components/tab-view';
import CadenasConTextoSaludos from './saludos';
import CadenasConTextoDespedidas from './despedidas';
import { bannerId } from '../../src/utils/constants';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

export default function CadenasConTexto() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Saludos' },
        { key: 'second', title: 'Despedidas' },
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case "first":
                return <CadenasConTextoSaludos />;
            case "second":
                return <CadenasConTextoDespedidas />;
        }
    };

    return (
        <>
            <TabViewComponent renderScene={renderScene} setIndex={setIndex} index={index} routes={routes} />
            <Stack.Screen options={{ header: () => <Header title={"Cadenas con texto"} /> }} />
            <BannerAd unitId={bannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{}} />
        </>
    );
}