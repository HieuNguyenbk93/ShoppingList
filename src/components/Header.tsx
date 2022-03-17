import {Text, View} from 'react-native';
import React from 'react';

const Header: React.FC<Props> = ({title}) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default Header;
