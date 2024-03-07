import React, {useState} from 'react';
import {
   View,
   Text, 
   Button, 
   StyleSheet, 
   Alert } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import {Expediente, Password} from './Login';

const App = () => {

  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = () => {
    if (expediente.length !== 6) ! Alert.alert("El expediente debe tener 6 caracteres") 
    if (password.length < 8) ! Alert.alert("El password debe ser mayor o igual a 8 caracteres")
    else Alert.alert("Login exitoso")
      
  }

  return (
    
    <LinearGradient
    // Background Linear Gradient
    colors={['black','#211951','#211951','#836FFF'	]}
    style={styles.container}
  >
    <View style ={styles.loginbox}>
      <View style={styles.titleContainer}>

        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputsContainer}>
        <Expediente 
        onChangeText={(text)=> {
          setExpediente(text)
        }}
        value={expediente} />

        <Password 
        onChangeText={(text)=> {
          setPassword(text)
        }}
        value={password} />
      </View>
      
      <View style={styles.buttonContainer}>
      <Button
        title="Login"
        color="#836FFF"
        onPress={handleSubmit}
        
      />
      </View>
      
    </View>
    </LinearGradient>
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loginbox:{
    borderRadius: 10,
    backgroundColor: 'black',
    marginHorizontal: 13,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#F0F3FF',
    fontSize: 30,
  },
  inputsContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    
  },
  
 
});
export default App;