import {View, Text, StyleSheet} from 'react-native'
import ComponenteCalendario from './components/calendariocp';
import BotaoAdicionar from './components/BotaoAdicionar';






export default function App(){
  return(
    <View style={styles.container}>
      <Text>Desenvolvendo um Aplicativo</Text>
      <BotaoAdicionar/>
      <ComponenteCalendario/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  } 
})