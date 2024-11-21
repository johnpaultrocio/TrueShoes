import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const home = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-4 border-b border-gray-200">
        <Image 
          source={ require ("../../assets/icons/Shoes.png")} // Replace with your logo URL
          className="w-10 h-10"
        />
        <TouchableOpacity>
          <Text className="text-sm text-gray-700">Sign Out</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      <ScrollView className="px-4 py-6">
        <Text className="text-xl font-semibold mb-6">New & Featured</Text>
        <Text className="text-xl font-semibold mb-6">Men</Text>
        <Text className="text-xl font-semibold mb-6">Women</Text>
        <Text className="text-xl font-semibold mb-6">Kids</Text>
        <Text className="text-xl font-semibold mb-6">Sale</Text>
        
        {/* Shoe Image */}
        <Image
          source={{ uri: 'https://via.placeholder.com/300' }} // Replace with the actual shoe image URL
          className="w-full h-80 mt-10"
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
};

export default home;
