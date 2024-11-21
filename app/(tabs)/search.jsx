import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, Pressable } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);

const search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <StyledView className="flex-1 bg-gray-100 p-4">
      
      {/* Header */}
      <StyledView className="items-center mb-4">
        <StyledText className="text-2xl font-semibold text-gray-700">Search Products</StyledText>
      </StyledView>

      {/* Search Input */}
      <StyledTextInput
        className="bg-white p-3 rounded-full mb-6 shadow-sm"
        placeholder="Search for shoes..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Search Results */}
      <StyledScrollView className="flex-1">
        {/* Example Search Result */}
        <StyledPressable className="flex-row items-center mb-4 bg-white p-4 rounded-lg shadow-sm">
          <StyledImage 
            source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual image URL
            className="w-20 h-20 mr-4"
            resizeMode="contain"
          />
          <StyledView className="flex-1">
            <StyledText className="text-lg font-semibold">Shoe Name</StyledText>
            <StyledText className="text-gray-500">$100</StyledText>
          </StyledView>
        </StyledPressable>

        {/* Add more search result items here */}
      </StyledScrollView>
    </StyledView>
  );
};

export default search;
