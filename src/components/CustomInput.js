import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, setValue, placeholder }) => {
    return (
        <View style={StyleSheet.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder} 
                style={styles.input} 
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
})

export default CustomInput