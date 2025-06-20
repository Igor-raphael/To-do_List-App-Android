import React, { useState } from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';
import { style } from './styles';
import Logo from '../../assets/logo.png' 
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from '../../global/themes';




export default function Login (){

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);

     async function getLogin(){
      try {
        setLoading(true)

          if(!email || !password){
            return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
          }

          //simulação de um sistema de login
          setTimeout(() => {
            if(email === 'igor' && password === 'igor'){
              Alert.alert('Logado com sucesso')

            }else{
              Alert.alert('Usuario não encontrado!')
            }
            setLoading(false)
          },3000)

      } catch (error) {
        console.log(error)
        
      }
     }

    return(
    <View style={style.container}>

        <View style={style.boxTop}>
            <Image
              source={Logo}
              style={style.logo}
              resizeMode="contain"
            />

            <Text style={style.text}>Bem vindo de volta</Text>
        </View>

        <View style={style.boxMid}>

              <Text style={style.titleInput}> EMDEREÇO E-MAIL </Text>
              



              <View style={style.boxInput}>

              <TextInput
                  style={style.input}
                  value={email}
                  onChangeText={setEmail}
              />
                <MaterialIcons
                  name="email"
                  size={22}
                  color={themas.Colors.gray}
                />
              
              </View >




              <Text style={style.titleInput}> SENHA </Text>



              <View style={style.boxInput}>

              <TextInput 
              style={style.input}
              value={password}
              onChangeText={setPassword}
              
              />
                
                <MaterialIcons
                  name="password"
                  size={22}
                  color={themas.Colors.gray}
                />

              </View>



        </View>






        <View style={style.boxBottom}>
          <TouchableOpacity 
          style={style.button}
          onPress={()=>getLogin()}>

            {loading?
               <ActivityIndicator color={'#ffff'} size={"small"}/>
            :
                <Text style={style.textButton}>Entrar</Text>
            }

              
          </TouchableOpacity>
        </View>

        <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.Colors.primary}}>Crie agora</Text></Text>




    </View>

    )
}