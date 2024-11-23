import React, { useState } from 'react';
import { TextInput, View, Text, Button, Alert, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data.js';

const Add = ({ navigation }) => {
    const [number, setNumber] = useState('');
    const [type, setType] = useState('💧Water');

    const handleSubmit = () => {
        if (number.trim() === '') {
            Alert.alert('Error', 'Please enter a valid Pokémon number!');
            return;
        }


        const indexNum = datasource.findIndex((item) => item.title === type);

        if (indexNum !== -1) {

            const cardImage = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${number}-2x.png`;


            const newPokemon = { name: `Pokémon #${number}`, cardImage };


            datasource[indexNum].data.push(newPokemon);


            navigation.navigate('Home');
        } else {
            Alert.alert('Error', 'Invalid Pokémon type selected!');
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Pokémon Number:</Text>
                <TextInput
                    style={styles.input}
                    value={number}
                    onChangeText={(text) => setNumber(text)}
                    placeholder="Enter Pokémon Number"
                    keyboardType="numeric"
                />
            </View>


            <View style={styles.inputGroup}>
                <Text style={styles.label}>Type:</Text>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: '💧Water', value: '💧Water' },
                        { label: '🔥 Fire', value: '🔥 Fire' },
                        { label: '🌍 Earth', value: '🌍 Earth' },
                    ]}
                />
            </View>


            <Button title="SUBMIT" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFF',
        flex: 1,
    },
    inputGroup: {
        marginBottom: 20,
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
        fontSize: 16,
    },
});

export default Add;




