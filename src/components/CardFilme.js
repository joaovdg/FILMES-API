import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const baseUrl = 'https://api.otaviolube.com';


const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.7;


export default function CardFilme ({ filme }) {
    return (
        <View style = {styles.container}> 
        <Image style={styles.image} source = {{ uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url}}/>
        <Text style = {styles.titulo}> {filme.titulo} </Text>
         <Text style = {styles.sinopse}> {filme.sinopse} </Text>
        <TouchableOpacity style = {styles.button}> <Text style = {styles.btnText}> Comprar </Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 15,
        borderRadius: '25px',
        padding: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH,
    },

    image: {
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        marginBottom: '20px',

    },

    titulo: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '30px',
        marginBottom: '20px',
        borderStyle: 'solid',
        borderTopWidth: '1px',
        borderBottomWidth: '1px',
        width: '100%',
        backgroundColor:  'black',
        color: 'white' 
    },

    sinopse: {
        textAlign: 'center',
        marginBottom: '20px'
    },

    button: {
        height: '50px',
        width: '100%',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '25px'
        
    },
    btnText: {
       fontSize: '20px',
       fontWeight: 'bold'
    }
})

