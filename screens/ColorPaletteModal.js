import React, { useCallback } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';

const ColorPaletteModal = () => {
    const [name, setName] = React.useState('');

    const handleSubmit = useCallback(() => {
        if (!name) {
            Alert.alert('Please enter a palette name');
        }
    }, [name]);

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Name of the Palette</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Palette Name"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    container: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
    },
    button: {
        height: 40,
        backgroundColor: 'teal',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    name: {
        marginBottom: 10,
    },
});

export default ColorPaletteModal;
