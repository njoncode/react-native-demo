import React, { useCallback } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Switch,
} from 'react-native';

const ColorPaletteModal = ({ navigation }) => {
    const [name, setName] = React.useState('');

    const handleSubmit = useCallback(() => {
        if (!name) {
            Alert.alert('Please enter a palette name');
        } else {
            const newColorPalette = {
                paletteName: name,
                name: [],
            };
            // navigation.goBack();
            navigation.navigate('Home', { newColorPalette });
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
            <View style={styles.color}>
                <Text>Color Name</Text>
                <Switch vale={true} onValueChange={() => { }} />
            </View>

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
    color: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
});

export default ColorPaletteModal;
