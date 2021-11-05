import React from "react";
import { Text, View, StyleSheet} from 'react-native'

const SignScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Sign Screen</Text>
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

export default SignScreen;
