import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #F5EEC9;
    flex-direction: row;
    border-radius: 30px;
    padding-left:15px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size:18px;
    color:#404142;
    margin-left: 10px;
`


export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width='24' height= '24' fill= '#e8c60f'/>
            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}