import React, { useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const SOLARIZED = [
    { colorName: 'Grey', hexCode: '#808080' },
    { colorName: 'Blue', hexCode: '#0000FF' },
    { colorName: 'Aqua', hexCode: '#00ffff' },
    { colorName: 'Teal', hexCode: '#008080' },
    { colorName: 'Orange', hexCode: '#FFA500' },
    { colorName: 'Magenta', hexCode: '#FF00FF' },
    { colorName: 'Green', hexCode: '#008000' },
    { colorName: 'Olive', hexCode: '#808000' },
    { colorName: 'DarkBlue', hexCode: '#0000A0' },
    { colorName: 'Lime', hexCode: '#00FF00' },
    { colorName: 'Maroon', hexCode: '#800000' },
    { colorName: 'Navy', hexCode: '#000080' },
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Aquamarine', hexCode: '#7fffd4' },
];

const RAINBOW = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
    { paletteName: 'Solarized', colors: SOLARIZED },
    { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
    { paletteName: 'Rainbow', colors: RAINBOW },
];

const Home = ({ navigation, route }) => {
    const newColorPalette = route.paramas
        ? route.params.newColorPalette
        : undefined;
    const [colorPalettes, setcolorPalettes] = React.useState([]);

    const [isRefreshing, setIsRefreshing] = React.useState(false);

    const fetchColorPalettes = React.useCallback(async () => {
        const result = await fetch(
            'https://color-palette-api.kadikraman.now.sh/palettes',
        );
        if (result.ok) {
            const palettes = await result.json();
            console.log(result);
            setcolorPalettes(palettes);
        }
    }, []);

    useEffect(() => {
        fetchColorPalettes();
    }, []);

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await fetchColorPalettes();
        setTimeout(() => {
            setIsRefreshing(false);
        }, 1000);
    }, []);

    React.useEffect(() => {
        if (newColorPalette) {
            setColorPalette((palettes) => [newColorPalette, ...palettes]);
        }
    }, [newColorPalette]);

    return (
        <FlatList
            style={styles.list}
            data={colorPalettes}
            keyExtractor={(item) => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    handlePress={() => {
                        navigation.navigate('ColorPalette', item);
                    }}
                    colorPalette={item}
                />
            )}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            ListHeaderComponent={
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ColorPaletteModal');
                    }}
                >
                    <Text style={styles.buttonText}>Add a color scheme</Text>
                </TouchableOpacity>
            }
        />
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: 'white',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'teal',
        marginBottom: 10,
    },
});

export default Home;
