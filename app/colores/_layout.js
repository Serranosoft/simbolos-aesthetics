import { useState } from 'react';
import { Stack } from 'expo-router';
import Header from '../../src/components/header';
import TabViewComponent from '../../src/components/tab-view';
import ColoresRosa from './rosa';
import ColoresMorado from './morado';
import ColoresRojo from './rojo';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import { bannerId } from '../../src/utils/constants';

export default function Colores() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([ { key: 'rosa', title: 'Rosas' }, { key: 'morados', title: 'Morados' }, { key: 'rojos', title: 'Rojos' } ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case "rosa":
                return <ColoresRosa />;
            case "morados":
                return <ColoresMorado />;
            case "rojos":
                return <ColoresRojo />;
        }
    };

    return (
        <>
            <Stack.Screen options={{ header: () => <Header title={"Coquette por colores"} /> }} />
            <TabViewComponent renderScene={renderScene} setIndex={setIndex} index={index} routes={routes} />
            <BannerAd unitId={bannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{}} />
        </>
    );
}