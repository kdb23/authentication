import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
            <CustomButton />
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