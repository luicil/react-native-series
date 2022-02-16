import React from "react";
import{View, TextInput, StyleSheet, Button} from "react-native";

import FormRow from "../components/FormRow";

export default class LoginScreen extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            mail: "",
            password: "",
        }
    }

    onChangeHandler(field, value){
        //const newState = {};
        //newState[field] = value;
        //this.setState(newState);
        this.setState({
            [field]: value
        });
    }

    tryLogin(){
        
    }

    render(){
        return(
            <view>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler("mail", value)}
                    />
                </FormRow>
                <FormRow>
                    <TextInput 
                        style={styles.input}
                        placeholder="*****"
                        //secureTextEntry={true}
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler("password", value)}
                    />
                </FormRow>
                <Button
                    title="Entrar"
                    onPress={() => this.tryLogin()}

                />
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