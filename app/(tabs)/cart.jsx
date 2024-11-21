import React from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);
const StyledScrollView = styled(ScrollView);

const cart = () => {
  return (
    <StyledView className="flex-1 bg-gray-100 p-4">
      
      {/* Header */}
      <StyledView className="items-center mb-6">
        <StyledText className="text-2xl font-semibold text-gray-700">My Cart</StyledText>
      </StyledView>

      {/* Cart Items */}
      <StyledScrollView className="flex-1">
        {/* Example Cart Item */}
        <StyledView className="flex-row items-center mb-4 bg-white p-4 rounded-lg shadow-sm">
          <StyledImage 
            source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual image URL
            className="w-20 h-20 mr-4"
            resizeMode="contain"
          />
          <StyledView className="flex-1">
            <StyledText className="text-lg font-semibold">Shoe Name</StyledText>
            <StyledText className="text-gray-500">Size: 42</StyledText>
            <StyledText className="text-gray-500">Qty: 1</StyledText>
          </StyledView>
          <StyledText className="text-lg font-semibold">$100</StyledText>
        </StyledView>

        {/* Add more cart items here */}
      </StyledScrollView>

      {/* Checkout Section */}
      <StyledView className="mt-6">
        <StyledText className="text-xl font-semibold text-gray-700 mb-2">Total: $100</StyledText>
        <StyledPressable className="bg-gray-300 p-4 rounded-full items-center">
          <StyledText className="text-lg font-semibold text-gray-700">Checkout</StyledText>
        </StyledPressable>
      </StyledView>
    </StyledView>
  );
};

export default cart;
