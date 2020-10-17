import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: rgb(64,65,66);
    flex: 1;
    justify-content: center;
    align-items: center;

`;

export const InputArea = styled.View`
    width:100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #e8c60f;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    `
export const CustomButtonText = styled.Text`
    font-size: 24px;
    color: #FFF;
    font-weight: bold;
    text-shadow: #000000 1px -1px;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top:50px;
    margin-bottom: 20px
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #FFF
`;
export const SignMessageButtonTextBold = styled.Text`
font-size: 16px;
color: #FFF;
font-weight: bold;
margin-left: 5px;
`; 

//color="#e8c60f"