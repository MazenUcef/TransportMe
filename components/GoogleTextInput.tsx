import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { GoogleInputProps } from '@/types/type'
import 'react-native-get-random-values'


const apiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY

export default function GoogleTextInput({ icon, initialLocation, containerStyle, textInputBackgroundColor, handlePress }: GoogleInputProps) {
    const [query, setQuery] = useState('');
    const [predictions, setPredictions] = useState([]);

    const fetchPlaces = async (text: any) => {
        setQuery(text);
        if (text.length < 3) return;

        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=${apiKey}&language=en`
            );
            const data = await response.json();
            setPredictions(data.predictions || []);
        } catch (error) {
            console.error('Error fetching places:', error);
        }
    };

    const handlePlaceSelect = async (placeId: any) => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
            );
            const data = await response.json();
            const location = data.result.geometry.location;
            handlePress({
                latitude: location.lat,
                longitude: location.lng,
                address: data.result.formatted_address,
            });
            setPredictions([]);
        } catch (error) {
            console.error('Error fetching place details:', error);
        }
    };

    if (!apiKey) {
        return (
            <View className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}>
                <Text>Google Places API key is missing</Text>
            </View>
        )
    }
    console.log('Google API Key:', process.env.EXPO_PUBLIC_GOOGLE_API_KEY)
    console.log(predictions.length);
    console.log(predictions.length > 0);

    return (
        <View style={{ marginBottom: predictions.length > 0 ? 190 : 5 }} className={`flex flex-row items-center ${predictions.length > 0 ? "mb-[190px]" : "mb-5"} justify-center relative z-50 rounded-xl ${containerStyle} `}>
            <TextInput
                value={query}
                onChangeText={fetchPlaces}
                placeholderTextColor="gray"
                placeholder="Where do you want to go?"
                style={{
                    backgroundColor: 'white',
                    fontSize: 16,
                    fontWeight: '600',
                    padding: 15,
                    borderRadius: 200,
                    marginHorizontal: 20,
                    marginTop: 5,
                    width: '100%',
                    shadowColor: '#d4d4d4',
                    elevation: 2,

                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.2,
                    shadowRadius: 1,
                }}
            />
            <FlatList
                data={predictions}
                keyExtractor={(item: any) => item.place_id}
                renderItem={({ item }: any) => (
                    <TouchableOpacity
                        onPress={() => handlePlaceSelect(item.place_id)}
                        style={{ padding: 10, backgroundColor: 'white' }}
                    >
                        <Text>{item.description}</Text>
                    </TouchableOpacity>
                )}
                style={{
                    position: 'absolute',
                    top: 60,
                    zIndex: 999,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    maxHeight: 200,
                    width: "100%",
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})