import React, { useState } from 'react';
import { StatusBar, SectionList, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { datasource as initialDatasource } from './Data'; // Rename the import for clarity

const Home = ({ navigation }) => {
    const [data, setData] = useState(initialDatasource); // Make the data source stateful

    const renderItem = ({ item, index, section }) => (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() => {
                navigation.navigate('Edit', {
                    index: index,
                    type: section.title,
                    key: item.key,
                    updatePokemon: (updatedPokemon) => {

                        const sectionIndex = data.findIndex((sec) => sec.title === section.title);
                        if (sectionIndex !== -1) {
                            const updatedData = [...data];
                            updatedData[sectionIndex].data[index] = updatedPokemon;
                            setData(updatedData);
                        }
                    },
                });
            }}
        >
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, justifyContent: 'space-between', padding: 10 }}>
            <Button
                title="Add Pokémon"
                onPress={() => navigation.navigate('Add')}
            />
            <SectionList
                sections={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.key + index}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    textStyle: {
        fontSize: 16,
        padding: 10,
    },
    opacityStyle: {
        backgroundColor: '#f9f9f9',
        marginVertical: 5,
    },
});

export default Home;


