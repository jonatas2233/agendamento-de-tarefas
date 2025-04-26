import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TarefaItem from './Tarefaitem';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation =useNavigation()

    return (
            <View style={styles.container}>
              <View style={styles.cabecalho} >
                <Text style={styles.titulo}>ABRIL / 2025</Text>
                <View style={styles.icone}></View>


            </View>
            <View style={styles.body}>
                <TarefaItem
                nome= 'Tarefa 1'
                status= 'a cumprir'
                data='24/04/2004'
                categoria='estudo'
                />
                <TarefaItem
                nome= 'Tarefa 2'
                status= 'a cumprir'
                data='24/04/2004'
                categoria='estudo'
                />

                
                <TouchableOpacity
                        style={styles.botaoAdicionar}
                        onPress={() =>{
                            navigation.navigate('NovaTarefa')
                        }}
                        >

                        <Text style={styles.botaoMais}>+</Text>
                    </TouchableOpacity>

                    

            
            </View>
        </View>
    );
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
    icone:{
        backgroundColor:'gray',
        width:40,
        height: 40,
        borderRadius:20,
        position:'absolute',
        right:15
    },
    body:{
        backgroundColor:'white',
        flex:1

    },
    botaoAdicionar:{
        width:50,
        height:50,
        backgroundColor:'blue',
        borderRadius:40,
        
        position:'absolute',
        right:15,
        bottom:0,
        justifyContent:'center',
        alignItems:'center'
        
        
    },
    botaoMais:{
        width:100,
        height:100,
        fontSize:50,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
    }

});