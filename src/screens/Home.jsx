import React from 'react';
import { Text, View, Button } from 'react-native';
import RepositoryList from '../components/RepositoryList';

const Home = () => {
    return (
        <View style={{flex: 1}}>
            <RepositoryList />
        </View>
        // // <View>
        //     {/* <Button title='Ir al perfil' onPress={() => {navigation.navigate('Profile')}} /> */}
            
        // {/* </View> */}
    )
}

export default Home