import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';

const Edit = ({ route, navigation }) => {
    const { index, type, key, updatePokemon } = route.params;

    const [name, setName] = useState(key); // Initial Pokémon name
    const [cardImage, setCardImage] = useState('');

    const handleSave = () => {
        if (!name || !cardImage) {
            Alert.alert('Error', 'Name and image URL cannot be empty!');
            return;
        }

        const updatedPokemon = { key: name, cardImage };
        updatePokemon(updatedPokemon);

        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Edit Pokémon Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter Pokémon Name"
            />

            <Text style={styles.label}>Edit Pokémon Image URL:</Text>
            <TextInput
                style={styles.input}
                value={cardImage}
                onChangeText={setCardImage}
                placeholder="Enter Pokémon Image URL"
            />

            <Button title="Save Changes" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
    },
});

export default Edit;

