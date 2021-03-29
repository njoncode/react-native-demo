import React from 'react';
import { Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
    const { colors, paletteName } = route.params;

    return (
        <FlatList
            style={styles.container}
            data={colors}
            keyExtractor={(item) => item.colorName}
            renderItem={({ item }) => (
                <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
            )}
            ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
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
