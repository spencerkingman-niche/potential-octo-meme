import React from 'react'
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native'
import Button from './Button'

const aboutGlobo = 'My name is Spencer. I work at Niche.com. We have an app, but we are going to try to make it better by building it with react-native instead of Expo. I know, I know, subtle difference, but you\'d be surprised at all the great things it can do! First of all, I am going to swap out some of the different navigation libraries, and see which one works the best. This version uses "react-navigation"'

const whatGlobo = 'Here at Niche Inc. we do lots of things. We sit in our chairs sometimes and type. Sometimes we go to meetings. Sometimes the power goes out and we read a book. We\'re always trying to get that organic traffic number really high.'

export class About extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return ( 
            <ScrollView style={styles.container}>
                <Image style={styles.pics} source={require('../sections/img/arch640.jpg')}/>

                <Text style={styles.aboutTitle}>Who We Are</Text>
                <Text style={styles.aboutText}>{aboutGlobo}</Text>

                <Image style={styles.pics} source={require('../sections/img/pd.png')}/>

                <Text style={styles.aboutTitle}>What We Do</Text>
                <Text style={styles.aboutText}>{whatGlobo}</Text>
                <View style={styles.backButton}>
                    <Button onPress={() => this.props.navigation.goBack()} label="Go Back"/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    pics: {
        height: 300,
        alignSelf: 'center',
    },
    aboutText: {
        paddingBottom: 20,
    },
    aboutTitle: {
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 10,
        textAlign: 'center',
    },
    backButton: {
        height: 100,
        marginLeft: -10,
    }
})