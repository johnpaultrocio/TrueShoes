import React, {useState} from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import CustomButton from '../components/CustomButton';
import FormField from '../components/FormField';
import { router} from 'expo-router'

const Register = () => {

  const [ form, setForm] = useState({
    email: '',
    username: '',
    password: ''
  })

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center px-6">
      
      {/* Logo Section */}
      <View className="items-center mb-10">
        <Image 
          source={require ("../assets/icons/Shoes.png")} // Replace with your logo URL
          className="w-24 h-24 rounded-full mb-2"
        />
        <Text className="text-2xl font-Gsans text-gray-700">
          TrueShoes Online
        </Text>
      </View>

      {/* Form Section */}
      <View className="bg-gray-200 w-full rounded-lg p-6 items-center">
        
        {/* Email Input */}
        <FormField
        title ="Email:"
        value ={form.email}
        handleChangeText={(e) => setForm({ ...form, email: e})}
        otherStyles="mt-5"
        keyboardType="email-address"
        />


        {/* Username Input */}
        <FormField
        title ="Username:"
        value ={form.username}
        handleChangeText={(e) => setForm({ ...form, username: e})}
        otherStyles="mt-5"
        keyboardType="username"
        />


        {/* Password Input */}
        <FormField
        title ="Password:"
        value ={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e})}
        otherStyles="mt-5"
        />

        {/* Create Account Button */}
        <CustomButton
        title="Create"
        containerStyles="items-center mt-4"
        handlePress={()=> router.push("/login")}
        />
      </View>
    </View>
  );
};

export default Register;
