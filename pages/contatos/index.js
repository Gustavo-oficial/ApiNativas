import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Contacts from 'expo-contacts';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    container : {
        flex :1,
        marginTop : StatusBar.currentHeight || 0,
    },
    Item : {
        marginVertical: 8,
        padding : 20,
        backgroundColor : '#f9c2ff',
        marginHorizontal: 16,
    },
    nome: {
        fontSize: 32,
    }
});

const Item = ({nome}) => {
    return(
    <View style={tyles.Item}>
       <Text style={styles.nome}>{nome}</Text>
    </View>
    )
}

const Contatos = () => {
    
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
            });
    
            if (data.length > 0) {
                setContatos(data);
            }
          }
        })();
      }, []);

    const renderItem = ({item}) => {
        return(
        <Item nome={item.name}/>
        )
    }

    return(
       <View styles={styles.container}>
           <Text>Contatos</Text>
           <FlatList
              data={contatos}
              renderItem={renderItem}
              keyExtractor={item => item.id}
           />
       </View>
    )
}

export default Contatos;