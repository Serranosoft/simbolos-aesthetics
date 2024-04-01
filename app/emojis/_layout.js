import { useState } from 'react';
import { Stack } from 'expo-router';
import Header from '../../src/components/header';
import TabViewComponent from '../../src/components/tab-view';
import EmojisAmarillos from './amarillo';
import EmojisAzules from './azul';
import EmojisNaranjas from './naranja';
import EmojisVerdes from './verde';

export default function Aesthetic() {

    const [open, setOpen] = useState(false);
    
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Amarillos' },
        { key: 'second', title: 'Azules' },
        { key: 'third', title: 'Naranjas' },
        { key: 'fourth', title: 'Verdes' },
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case "first":
                return <EmojisAmarillos />;
            case "second":
                return <EmojisAzules />;
            case "third":
                return <EmojisNaranjas />;
            case "fourth":
                return <EmojisVerdes />;
        }
    };

    return (
        <>
            <TabViewComponent renderScene={renderScene} setIndex={setIndex} index={index} routes={routes} />
            <Stack.Screen options={{ header: () => <Header title={"Aesthetic"} /> }} />
        </>
    );
}