import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import StyledText from './StyledText.jsx'
import RepositoryStats from './RepositoryStats.jsx'
import theme from '../theme.js'

const RepositoryHeader = ({ ownerAvatarUrl, fullName, description, languaje }) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2}}>
        <View style={{ paddingRight: 10 }}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        </View>
        <View style={{ flex: 1 }}>
            <StyledText fontWeight={'bold'}>{fullName}</StyledText>
            <StyledText color={'secondary'}>{description}</StyledText>
            <StyledText style={styles.languaje}>{languaje}</StyledText>
        </View>
    </View>
)

const RepositoryItem = (props, {navigation}) => {
    return (
        <View key={props.id} style={styles.container} >
            {/* <TouchableOpacity
                // style={styles.button}
                onPress={() => {navigation.navigate('Profile')}}
            > */}
                <RepositoryHeader {...props}/>
                <RepositoryStats {...props}/>
            {/* </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5
    },
    languaje: {
        padding: 5,
        marginVertical: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 5,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 5
    },
    button: {
        backgroundColor: "#DDDDDD",
    }
}) 

export default RepositoryItem