import React from "react";
import{
        View, 
        TextInput, 
        Text,
        StyleSheet, 
        Button, 
        ActivityIndicator,
        Alert,
    } from "react-native";

import FormRow from "../components/FormRow";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default class LoginScreen extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            mail: "",
            password: "",
            isLoading: false,
        }
    }

    componentDidMount(){
        const config = {
            apiKey: "AIzaSyDhgktvJuZ3pcBtFqVWUVuBM_nKhULTCQ4",
            authDomain: "series-5cf5c.firebaseapp.com",
            projectId: "series-5cf5c",
            storageBucket: "series-5cf5c.appspot.com",
            messagingSenderId: "755133384026",
            appId: "1:755133384026:web:6e06666cd36691b1d09f63"
          };        
          firebase.initializeApp(config);

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
        
        this.setState({ isLoading: true, message: "" });

        const{mail, password} = this.state;

        const loginUserSucess = user =>{
            this.setState({message: "Sucesso !"});
        };

        const loginUserFailed = error =>{
            this.setState({
                message: this.getMessageByErrorCode(error.code)
            });                                
        };

        firebase.auth()
        .signInWithEmailAndPassword(mail,password)
        .then(loginUserSucess)
        .catch(error =>{
            if(error.code === "auth/user-not-found"){
                Alert.alert(
                    "Usuário não encontrado",
                    "Deseja cadastrar o usuário ?",
                    [{
                        text: "Não",
                        onPress: ()=>{},
                        style: "cancel"
                    },
                    {
                        text: "Sim",
                        onPress: ()=>{
                            firebase
                                .auth()
                                .createUserWithEmailAndPassword(mail, password)
                                .then(loginUserSucess)
                                .catch(loginUserFailed)
                        }
                    }],
                    { cancelable: false }
                )    
            } else {
                loginUserFailed(error);
            }
        })
        .then(()=> this.setState({ isLoading: false }));
    }

    getMessageByErrorCode(errorCode){
        switch (errorCode){
            case "auth/invalid-email":
                return "email inválido";
            case "auth/wrong-password":
                return "senha incorreta";
            case "auth/user-not-found":
                return "usuário não encontrado"
            default:
                return "erro indefinido";
        }
    }

    renderMessage(){
        const {message} = this.state;
        if(!message){
            return null;
        } else {
            return(
                <View>
                    <Text>{message}</Text>
                </View>
            )

        }
    }

    renderButton(){
        if(this.state.isLoading) {
            return <ActivityIndicator />
        } else {
            return(
                <Button
                    title="Entrar"
                    onPress={() => this.tryLogin()}
                />    
            );    
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <FormRow first={true}>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler("mail", value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput 
                        style={styles.input}
                        placeholder="***"
                        //secureTextEntry={true}
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler("password", value)}
                    />
                </FormRow>

                { this.renderButton() }
                { this.renderMessage() }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
    },
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },

})