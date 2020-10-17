import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvaider from './src/context/UserContex';
import MainStack from './src/stacks/MainStack';

export default () => {
  return(
    < UserContextProvaider>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </UserContextProvaider>
  )
}