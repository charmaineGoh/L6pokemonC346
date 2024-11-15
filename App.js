import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const pokemonData = [
  {
    title: ' 💧Water', color: 'skyblue',
    data: [
      { name: 'Magikarp', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_129-2x.png' },
      { name: 'Blastoise', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9-2x.png'},
    ],
  },
  {
    title: '🔥 Fire', color: '#FA8072',
    data: [
      { name: 'Charizard', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png'},
      { name: 'Charmeleon', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_5-2x.png'},
    ],
  },
  {
    title: ' 🌍 Earth', color: 'lightgreen',
    data: [
      { name: 'Kakuna', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_14-2x.png'},
      { name: 'Ivysaur', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_2-2x.png'},
    ],
  },
];

const renderPokemon = ({ item }) => (
    <TouchableOpacity style={styles.cardItem}>
      <Text style={styles.pokemonName}>{item.name}</Text>
      <Image source={{ uri: item.cardImage }} style={styles.cardImage} />
    </TouchableOpacity>
);

function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Button style={styles.button} title="Add Pokémon" />
        <SectionList
            sections={pokemonData}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderPokemon}
            renderSectionHeader={({ section }) => (
                <View style={[styles.header, { backgroundColor: section.color }]}>
                  <Text style={styles.headerText}>{section.title}</Text>
                </View>
            )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F0F0F0',
  },

  header: {
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'yellow',
    marginHorizontal: 10,
    borderWidth: 1,
  },

  pokemonName: {
    fontSize: 16,
    fontWeight: '500',
  },

  cardImage: {
    width: 100,
    height: 140,
    resizeMode: 'contain',
  },
});

export default App;

