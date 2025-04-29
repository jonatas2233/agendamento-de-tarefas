import { View, Text, StyleSheet, TextInput} from 'react-native';

export default function NovaTarefa(){
    return(
        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Adionar Tarefa</Text>
                

            </View>
            <View style={styles.body}>
                
            
                <Text style={styles.texto}>Nome da Tarefa:</Text>
                <TextInput style={styles.TextImput}/>

                <Text style={styles.texto}>Categoria da Tarefa:</Text>
                <TextInput style={styles.TextImput}/>

                <Text style={styles.texto}>Selecione a categoria:</Text>
                <TextInput style={styles.TextImput}/>
                
            
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    cabecalho:{
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    
    
    },
    titulo:{
        Color: 'white',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },
    
    body:{
      
      width: '100%',
      height: 60,
      fontWeight:'bold',
      fontSize:18,
      
      
      
      padding: 10,
      
      
        

    },
    texto:{
        fontWeight:'bold',
        fontSize:15

    },
    tarefa:{
        
        margin:15,
        fontWeight:'bold'
    },
    imput:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        borderRadius:15
    },

});        
        
                