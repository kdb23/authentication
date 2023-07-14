import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignUpScreen = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const onRegisterPressed = () => {
        console.warn("sign in");
    }

    const onForgotPasswordPressed = () => {
        console.warn("on forgot password pressed")
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create an Account</Text>
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
            />
            <CustomInput 
                placeholder="Email" 
                value={email} 
                setValue={setEmail}
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                sercureTextEntry
            />
            <CustomInput 
                placeholder="Password Confirm" 
                value={passwordRepeat} 
                setValue={setPasswordRepeat}
                sercureTextEntry
            />
            <CustomButton text="Register" onPress={onRegisterPressed} />
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FD8075'
    },
})

export default SignUpScreen