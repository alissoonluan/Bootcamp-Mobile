import React, { useState } from "react";
import {StyleSheet,View} from "react-native";
import SearchInput from "../components/form/SearchInput";
import Input from "../components/form/Input";

const HomeScreen = () => {
    const [stateNome,setStateNome] = useState("");
    const [statePesquisa,setStatePesquisa] = useState("");
    return (
        <>
        <View style={styles.viewStyle}>
            <SearchInput onchange={(text)=>setStatePesquisa(text)} initialValue={""} />
        </View>
        <View style={styles.viewStyle}>
            <Input label="Nome" onchange={(text)=>setStateNome(text)} 
            initialValue={"Alisson"}/>
        </View>
        </>
    )
}


export default HomeScreen;

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        alignItems: "stretch",
        justifyContent: "flex-start",
        marginTop:10
    }
})


