import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {

    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.9}
            className ={`bg-gray-300 px-12 py-2 rounded-full mt-4 ${containerStyles} ${isLoading ? 'opacity-100': ''}`}
            disabled={isLoading}
        >
          <Text className ={`font-nestor text-xl ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
      )
    }
    
export default CustomButton