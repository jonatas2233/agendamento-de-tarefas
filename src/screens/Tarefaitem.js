import { View, Text, StyleSheet } from "react-native";
export default function tarefaItem(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Tarefa1</Text>
            <Text style={styles.data}>03/04/2025</Text>
            <Text sttyle={styles.categoria}>Categoria - estudo</Text>
            <View style={styles.status}>
               <Text style={styles.textoStatus}> a cumprir</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        whdth:'100%',
        height:  100,
        padding:15,
        borderBottomWidth:1,
    },
    titulo:{
        fontWeight:'bold',
        fontSize:18
    },
    data:{
        marginTop:5,
        marginLeft:4
        
    },
    categoria:{
        marginTop:8
    },
    status:{
        backgroundColor:'orange',
        width:150,
        height:30,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:150
        

    },
    textoStatus:{
        color:'white'
    },
});