import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotaoAdicionar = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'flex-end',  // Alinha o botão ao centro horizontal
    marginTop: 0,       // Adiciona um espaço vertical acima do botão
    marginBottom: 0,    // Adiciona um espaço vertical abaixo
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
});

export default BotaoAdicionar;