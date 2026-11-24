import { Button, Image, Pressable, StyleSheet, Text, TouchableHighlight, View } from "react-native";


function LoginPage() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}> 
                <Image source={require('../assets/logo.png')} style={{ height: 200, width: 200 }} />
            </View>
            <View style={styles.form}>
                <Text style={styles.title}>Login Page</Text>
                <Text style={styles.subtitle}>Welcome to the login page. Please enter your credentials to continue.</Text>
                <View style={styles.btn_container}>
                  <TouchableHighlight
                    onPress={() => console.log('Login pressed')}
                  >
                     <View style={styles.login}>
                        <Text >Login</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => console.log('Sign up pressed')}
                  >
                     <View style={styles.signup}>
                        <Text>Sign up</Text>
                    </View>
                  </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

export default LoginPage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
     logo: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
    },
    btn_container : {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    login: {
        backgroundColor: 'blue',
        borderRadius: 20,
        width: "40%",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    signup: {
        backgroundColor: 'lightgray',
        borderRadius: 20,
        width: "40%",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
});