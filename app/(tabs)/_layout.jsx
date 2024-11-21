import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../assets/constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="w-6 h-6 justify-center items-center"> {/* Adjust container size */}
        <Image
          source={icon}
          resizeMode="contain"
          style={{ tintColor: color }}
          className="w-full h-full"
        />
      </View>
    );
  };
  

const TabLayout = () => {
  return (
   <>
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title:'Home',
          headerShown:false,
          tabBarIcon:({color,focused})=>(
           <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
           />
          )
        }}
      />
    <Tabs.Screen
        name="search"
        options={{
          title:'Search',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.search}
            color={color}
            name="Search"
            focused={focused}
           />
          )
        }}
      />
 <Tabs.Screen
        name="cart"
        options={{
          title:'Cart',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.cart}
            color={color}
            name="Cart"
            focused={focused}
           />
          )
        }}
      />
 <Tabs.Screen
        name="profile"
        options={{
          title:'Profile',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.profile}
            color={color}
            name="Profile"
            focused={focused}
           />
          )
        }}
      />
    </Tabs>
   </>
  )
}

export default TabLayout