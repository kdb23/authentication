import { useState, useContext, createContext } from 'react'
import { AuthContext } from "./AuthContext";
import { SafeAreaView, Text, TextInput, View, Pressable } from 'react-native'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <SafeAreaView>
            <View>
                <Text>Application Name Here</Text>
                <TextInput 
                    placeholder='Username'
                    value={username} 
                    onChangeText={text =>setUsername(text)} 
                />
                <TextInput
                    placeholder='Password' 
                    value={password} 
                    onChangeText={text => setPassword(text)} 
                />
                    <Text>Login</Text>
            </View>
        </SafeAreaView>
    )
}

export default Login