import React from "react";
import { Text, View, StyleSheet, Button} from 'react-native'

const LoginScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
            <Text>Login Screen</Text>
            <Button
            title="Go to SignIn"
            onPress={() => navigation.navigate('SignIn')}/>
      </View>
    );
}

//les styles pour le design
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    }
});

export default LoginScreen;

