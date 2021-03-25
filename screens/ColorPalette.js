import React from 'react';
import { Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = () => {
    const COLORS = [
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

    return (
        <FlatList
            style={styles.container}
            data={COLORS}
            keyExtractor={(item) => item.colorName}
            renderItem={({ item }) => (
                <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
            )}
            ListHeaderComponent={<Text style={styles.text}>Solarized</Text>}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 40,
        backgroundColor: 'white',
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ColorPalette;

/**
 * In React navigation, the default color for the background is not white, it's kinda greyish.

 * We don't need the SafeAreaView anymore. Because we have Header bar, React navigation handles the SafeAreaView.

 */
