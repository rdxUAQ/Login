import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

export const Expediente = ({onChangeText, value}) => {

 

    return(
        <View>
        <TextInput 
          style={styles.inputExpediente} 
          placeholder="Expediente" 
          placeholderTextColor={'#836FFF'}
          value={value} 
          keyboardType='numeric'
          maxLength={6}
          onChangeText = {onChangeText}
          />
        
      </View>
    );
    
   
};

export const Password = ({onChangeText, value}) => {
    
    return(
        <View>
        
        <TextInput 
          style={styles.inputPassword} 
          placeholder="Password" 
          placeholderTextColor={'#836FFF'}
          multiline={false}
          secureTextEntry={true} 
          value={value} 
          onChangeText = {onChangeText}
          />
      </View>
    );

};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    titleContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 30,
    },
    inputsContainer: {
      marginHorizontal: 20,
      marginBottom: 20,
    },
    inputExpediente: {
        
        color: '#F0F3FF',
        borderColor: '#15F5BA',
      borderBottomWidth: 1,
      marginBottom: 20,
    },
    inputPassword: {
        color: '#F0F3FF',
     borderColor: '#15F5BA',
      borderBottomWidth: 1,
    },
    buttonContainer: {
      marginHorizontal: 20,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  });