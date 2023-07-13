import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSignInPressed = () => {
        console.warn("sign in");
    }

    const onForgotPasswordPressed = () => {
        console.warn("on forgot password pressed")
    }

    return (
        <View style={styles.root}>
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                sercureTextEntry
            />
            <CustomButton text="Sign In" onPress={onSignInPressed} />
            <CustomButton 
                text="Forgot Password" 
                onPress={onForgotPasswordPressed} 
                type='TERTIARY' 
            />
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    }
})

export default SignInScreen