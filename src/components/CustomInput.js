import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = () => {
    return (
        <View style={StyleSheet.container}>
            <TextInput placeholder="test test placeholder" style={styles.input} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {},
    input: {},
})

export default CustomInput