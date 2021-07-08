import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BotaoHamburguer = (onPress) => {
    return (
        <Icon.Button
            name="menu"
            backgroundColor="#3b5998"
            onPress={onPress}
        >
        </Icon.Button>
    );
};

export default BotaoHamburguer;