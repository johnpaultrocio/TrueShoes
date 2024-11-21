import React, {useState} from 'react';
import { View, Text, Image} from 'react-native';
import { router, Link } from 'expo-router'; // Import useRouter for navigation
import CustomButton from '../components/CustomButton';
import FormField from '../components/FormField';

const Login = () => {

const [ form, setForm] = useState({
    username: '',
    password: ''
  })

  return (
    <View className="flex-1 bg-[#202020] justify-center items-center px-6">
      
      {/* Logo Section */}
      <View className="items-center mb-10">
        <Image 
          source={require ('../assets/icons/Shoes.png')} // Replace with your logo URL
          className="w-[250px] h-[250px] rounded-full mb-2"
        />
        <Text className="text-3xl font-Gsans text-white">
          TrueShoes Online
        </Text>
      </View>
      
      {/* Form Section */}
      <View className="bg-gray-200 w-full rounded-xl p-8 items-center">
        
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
         title = "Password: "
         value={form.password}
         handleChangeText={(e) => setForm({ ...form, password: e })}
         otherStyles="mt-5"
         />
        </View>
        
        {/* Log In Button */}
       <CustomButton
       title ="Login"
       containerStyles="items-center mt-4"
       handlePress ={()=> router.push('/home')}
       />

        {/* Forget Password */}
        <Link href ="/register" className="mt-4">
          <Text className="text-base text-white">No account, yet? {"\n"}   Sign Up here</Text>
        </Link>

      </View>
      
  );
};

export default Login;
