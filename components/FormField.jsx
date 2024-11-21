import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import React, {useState} from 'react'
import images from '../assets/constants/images';

const FormField = ({title, value, placeHolder, handleChangeText, otherStyles,...props}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-lg text-black font-pmedium">{title}</Text>     
      <View className="bg-gray-50 w-full p-6 px-44 rounded-md mb-4">
        <TextInput
          className="flex-1 text-black font-psemibold text-base"
          value={value}
          placeholder={placeHolder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? images.eye : images.hide_eye}
              className="w-6 h-6 left-4"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

      </View>
    </View>
  )
}

export default FormField