import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import {FontAwesome} from '@expo/vector-icons'

const index = () => {

  return (
    <View className ="flex-1 justify-start bg-[#202020] pt-12">
      <Image className =" absolute w-[300px] h-[300px] top-[180px] left-[100px]" source= {require ("../assets/icons/Shoes.png")}/>
      <View className = "left-2">
      <FontAwesome name="star" size={40} color="white"/>
      </View>
      <View className ="relative top-[400px] left-5 mb-20">
        <Text className =" absolute bottom-[540px] left-7 text-4xl text-white font-Gsans ">TrueShoes</Text>
        <Text className ="text-5xl text-gray-300 font-bold"> {"\n"}Step into {"\n"}Uniqueness</Text>
      </View>

      <View className =" relative left-8 top-[370px] space-y-6" >
      <TouchableOpacity className = "rounded-full bg-white w-[160px] h-[60px] justify-center items-center">
        <Link href="/login">
      <Text className =" text-3xl font-extrabold">Login</Text>
      </Link>
      </TouchableOpacity>
      <TouchableOpacity className = "rounded-full bg-white w-[160px] h-[60px] justify-center items-center">
        <Link href="/register">
      <Text className =" text-3xl font-extrabold">Register</Text>
      </Link>
      </TouchableOpacity>
    </View>
    </View>

    
     
  )
}
export default index