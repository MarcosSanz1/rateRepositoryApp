import React from 'react';
import { Text, View, Button } from 'react-native';

const About = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>About screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default About