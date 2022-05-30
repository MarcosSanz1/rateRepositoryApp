import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import StyledText from './StyledText.jsx'
import RepositoryStats from './RepositoryStats.jsx'
import theme from '../theme.js'

const RepositoryHeader = ({ ownerAvatarUrl, fullName, description, languaje }) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2}}>
        <View style={{ paddingRight: 10 }}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }}/>
        </View>
        <View style={{ flex: 1 }}>
            <StyledText fontWeight={'bold'}>{fullName}</StyledText>
            <StyledText color={'secondary'}>{description}</StyledText>
            <StyledText style={styles.languaje}>{languaje}</StyledText>
        </View>
    </View>
)

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryHeader {...props}/>
            <RepositoryStats {...props}/>
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
    }
}) 

export default RepositoryItem