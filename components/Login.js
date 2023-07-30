import { useState, useContext, createContext } from 'react'
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Pressable} from 'react-native'
import { AuthContext } from "./AuthContext"
import CreateAccount from './CreateAccount'

function Login({navigation}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useContext(AuthContext)
    const [accountValidation, setAccountValidation] = useState('')
    
    const accountValidator = accountError => {
        setAccountValidation(accountError)
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.token}>Token Fun</Text>
                <Text style={styles.accountValidation}>{accountValidation}</Text>
                <TextInput placeholder='Username'
                    style={styles.input} value={username} onChangeText={text =>setUsername(text)} autoCapitalize='none'/>
                <TextInput style={styles.input} secureTextEntry={true}
                    placeholder='Password' value={password} onChangeText={text => setPassword(text)} autoCapitalize='none'/>
                <Pressable style={styles.button} onPress={()=>{login(username, password, accountValidator)}}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable> 
                <Pressable style={styles.button2} onPress={() => navigation.navigate('Create Account')}>
                    <Text style={styles.button2Text}>Create Account</Text>
                </Pressable>
            </View>
        </SafeAreaView>
        )

    }
    const styles = StyleSheet.create({
        container: {
            marginVertical: 70,
        },
        token: {
            fontSize: 50,
            alignSelf: 'center',
            fontWeight: 'bold',
            color: '#1C2541', 
            marginBottom: 20,
        },
        input: {
            height: 40,
            marginBottom: 5,
            marginHorizontal: 20,
            alignSelf: 'stretch',
            borderWidth: 1,
            borderColor: '#C3C9E9',
            paddingHorizontal: 10,
            backgroundColor: 'white',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 1,
            elevation: 2, 
        },
        text: {
            fontSize:20,
            alignSelf: 'center',
            paddingTop: 80,
            paddingBottom: 20,
        },
        button:{
            backgroundColor: "#858AE3",
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 2,
            alignSelf: 'center',
            marginVertical: 30,
            marginHorizontal: 10,
            width: '50%'
        },
        buttonText:{
            fontSize: 25,
            color: "#EEF0F2",
            fontWeight: "bold",
            alignSelf: "center",
            textTransform: "uppercase",
            paddingVertical: 3,
        },
        button2:{
            backgroundColor: "#1C2541",
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 2,
            alignSelf: 'center',
            marginHorizontal: 10,
            width: '50%',
        },
        button2Text:{
            fontSize: 18,
            color: "#EEF0F2",
            fontWeight: "bold",
            alignSelf: "center",
            textTransform: "uppercase",
            paddingVertical: 3,
        },
        usernameValidation:{
            color: '#1C2541',
            marginHorizontal: 20,
            marginBottom: 20,
        },
        accountValidation:{
            color: '#1C2541',
            alignSelf: 'flex-end',
            marginEnd: 18,
            fontSize: 20
        },
    });


export default Login