import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/styles";

const Contacts = ({route}) => {
    return (
        <View style={globalStyles.main}>
            <Text style={globalStyles.title}>{route.params.name} </Text>
            <Image source={{width: '100%', height: 200, uri: route.params.img}}/>

            <Text style={styles.full}>{route.params.full} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    full: {textAlign: "center", fontSize: 20, marginBottom: 20, fontFamily: 'mt-light'}
})

export default Contacts;
