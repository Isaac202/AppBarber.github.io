import React,{useEffect} from 'react';
import {Container, LoadinIcon} from './style';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import BarberLogo from '../../assets/barber.svg';

export default () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                //validar token
            }else{
                navigation.navigate('SignIn');
            }

        }
        checkToken();
    }, []);

    return(
    <Container>
      <BarberLogo width='100%' height='160'/>
      <LoadinIcon size='large' color='#FFFFFF' />
    </Container>
);
}