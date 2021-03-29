import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
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

const Home = ({ navigation }) => {
    return (
        <FlatList
            style={styles.list}
            data={COLOR_PALETTES}
            keyExtractor={(item) => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    handlePress={() => {
                        navigation.navigate('ColorPalette', item);
                    }}
                    colorPalette={item}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: 'white',
    },
});

export default Home;
