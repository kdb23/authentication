import React, {useContext, useEffect, useState } from 'react'
import { Text, View, Pressable } from 'react-native'
import { AuthContext } from './AuthContext'


function Home(){
    const {userInfo} = useContext(AuthContext)    
    return(
        <View>
            <Text> {userInfo.first_name}'s HomePage</Text>
        </View>
    )
}