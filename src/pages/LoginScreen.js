import React from "react";
import{View, TextInput, StyleSheet} from "react-native";

import FormRow from "../components/FormRow";

export default class LoginScreen extends React.Component{
    render(){
        return(
            <view>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com"
                    />
                </FormRow>
                <FormRow>
                    <TextInput 
                        style={styles.input}
                        placeholder="*****"
                        //secureTextEntry={true}
                        secureTextEntry
                    />
                </FormRow>
            </view>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
    }
})