import React from "react";
import{View, Text, TextInput} from "react-native";

import FormRow from "../components/FormRow";

export default class LoginScreen extends React.Component{
    render(){
        return(
            <FormRow>
                <TextInput />
            </FormRow>
        )
    }
}