import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);
const StyledImage = styled(Image);

const profile = () => {
  return (
    <StyledView className="flex-1 bg-gray-100 items-center px-6 py-10">
      
      {/* Profile Picture */}
      <StyledView className="items-center mb-10">
        <StyledImage 
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual profile picture URL
          className="w-24 h-24 rounded-full mb-4"
        />
        <StyledText className="text-lg font-semibold text-gray-700">John Doe</StyledText>
        <StyledText className="text-sm text-gray-500">johndoe@example.com</StyledText>
      </StyledView>

      {/* Profile Options */}
      <StyledView className="w-full">

        {/* Edit Profile */}
        <StyledPressable className="bg-gray-200 w-full py-3 rounded-full items-center mb-4">
          <StyledText className="text-gray-700 text-lg">Edit Profile</StyledText>
        </StyledPressable>

        {/* Order History */}
        <StyledPressable className="bg-gray-200 w-full py-3 rounded-full items-center mb-4">
          <StyledText className="text-gray-700 text-lg">Order History</StyledText>
        </StyledPressable>

        {/* Settings */}
        <StyledPressable className="bg-gray-200 w-full py-3 rounded-full items-center mb-4">
          <StyledText className="text-gray-700 text-lg">Settings</StyledText>
        </StyledPressable>

        {/* Log Out */}
        <StyledPressable className="bg-gray-300 w-full py-3 rounded-full items-center mt-8">
          <StyledText className="text-gray-700 text-lg">Log Out</StyledText>
        </StyledPressable>

      </StyledView>
    </StyledView>
  );
};

export default profile;
