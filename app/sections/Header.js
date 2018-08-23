import React from 'react';
import { 
    Alert,
    AsyncStorage,
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native'

export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            loggedUser: false,
            loading: true,
        }
    }

    toggleUser = () => {
        if (this.state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false, 
                    loggedUser: false
                })
                Alert.alert('User logged out')
            })
        } else {
            this.props.navigate('LoginRT')
        }
    }

    async componentWillMount() {
        this.setState({ loading: false });
    }

    componentDidMount(){
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            console.log(result)
            if (result==='none'){
                console.log('NONE')
            } else if (result === null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('Set user to NONE')
                })
            } else {
                this.setState({
                    isLoggedIn: true, 
                    loggedUser: result,
                })
            }
        })
    }
    
    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message
        if (this.state.loading) {
            return(
                <View style={ styles.container }>
                    <Text>Loading...</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.headStyle}>
                    <TouchableHighlight style={styles.logoContainer} onPress={() => {this.props.navigate('WebViewOldRT')}}>
                        <Image
                            style={styles.logoStyle}
                            source={ require('./img/tv.jpg')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.logoContainer} onPress={() => {this.props.navigate('WebViewNewRT')}}>
                         <Image
                              style={styles.logoStyle}
                              source={ require('./img/fancy-tv.jpg')}
                         />
                    </TouchableHighlight>
                    <Text
                        style={styles.headText}
                        onPress={this.toggleUser}>{display}
                    </Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right', 
        color: '#ffffff',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 20,
        flex: 1
    },
    headStyle: {
        paddingTop: 40,
        paddingRight: 10,
        backgroundColor: '#356076',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    },
    logoContainer: {
        marginLeft: 10,
        height: 30,
    },
    logoStyle: {
        width: 30,
        height: 30,
    }
})