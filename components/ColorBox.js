import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
    return (
        <View style={[styles.box, styles.cyan]}>
            <Text style={styles.boxText}>{colorName}: {hexCode}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

    box: {
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
    },

    cyan: {
        backgroundColor: '#2aa198',
    },

    boxText: {
        color: 'white',
        fontWeight: 'bold',
    }

})

export default ColorBox;