import { useEffect, useState } from "react";
import CardFilme from "./src/components/CardFilme";
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";


export default function App() {
    
    let [ filmes, setFilmes ] = useState([]);

    const baseUrl = 'https://api.otaviolube.com/api/filmes?populate=*';
    
    useEffect(function(){
        fetch(baseUrl)
        .then(data => data.json())
        .then(objeto => {
            console.log(objeto);
            setFilmes(objeto.data);
        })
    }, []);

    return (
        <SafeAreaView style = {styles.container}> 
        <ScrollView horizontal>
            { filmes.length > 0 ? filmes.map ( filme => 
            <CardFilme key={filme.id} filme={filme.attributes}/>) : 
            <Text style={{}}>Carregando . . . </Text>}
         </ScrollView>
        </SafeAreaView>
    );
    } 

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'center',
        },

    });