import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import * as Speech from 'expo-speech';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container : {
        flex :1,
        marginTop : StatusBar.currentHeight || 0,
    }, 
    input : {
        height: 40,
        color : 'white',
        width : '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 6,
        padding: 5
    }
});

const Texto = () => {
    const [text, setText] = useState('');

    const speak = () => {
        Speech.speak(text);
    }

    return(
       <View styles={styles.container}>
           <TextInput value={text} onChangeText={t => setText(t)} style={styles.input}/>
            <Button title="Clique para conversar" onPress={() => speak()}/>
           <Text>Text</Text>
       </View>
    )
}

export default Texto;