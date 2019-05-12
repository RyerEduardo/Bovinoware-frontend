import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import api from "../services/api";

export default class Detalhes extends Component {

  render(){
    const params = this.props.navigation.state.params.param;
    
    //const paramss = this.props.navigation.state.params;
    //const brinco = this.props.navigation.getParam('brinco');
    
    return (
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>Data Compra: <Text style={styles.productValue}> {params.dataCompra}</Text></Text>
        <Text style={styles.productTitle}>Peso Compra: <Text style={styles.productValue}> {params.pesoCompra}</Text></Text>
        <Text style={styles.productTitle}>Valor Compra: <Text style={styles.productValue}> {params.valorCompra}</Text></Text>
        <Text style={styles.productTitle}>Data Nascimento: <Text style={styles.productValue}> {params.dataNascimento}</Text></Text>
        <Text style={styles.productTitle}>Raça: <Text style={styles.productValue}> {params.raca}</Text></Text>
        <Text style={styles.productTitle}>Brinco Nº: <Text style={styles.productValue}> {params.brinco}</Text></Text>
        <Text style={styles.productTitle2}>Data Venda: <Text style={styles.productValue}> {params.dataVenda}</Text></Text>
        <Text style={styles.productTitle2}>Peso Venda: <Text style={styles.productValue}> {params.pesoVenda}</Text></Text>
        <Text style={styles.productTitle2}>Valor Venda: <Text style={styles.productValue}> {params.valorVenda}</Text></Text>
     
        <TouchableOpacity
          style={styles.btnAtualizar}
          onPress={() => {
            //this.props.navigation.navigate("detales", {bovino: this.state});
            //this.props.navigation.navigate('tela2', {resultado: this.state.resutadoSoma})
            //this.props.navigation.navigate("Hyperlink", { hyperlink: item });
          }}
        >
          <Text style={styles.productButtonText}>Atualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnExcluir}
          onPress={() => {
            Alert.alert('Excluir', 'Deseja realmente excluir este cadastro?',
            [
              { text: 'Sim', onPress: () => api.delete(`/bovinos/${params._id}`)
               + alert('Exclusão Realizada!') 
               +  this.props.navigation.navigate("Home")}, //se excluir volta para Home
              { text: 'Não', onPress: () => alert('Operação Cancelada!')}
            ]
            
            );

            //this.props.navigation.navigate("detales", {bovino: this.state});
            //this.props.navigation.navigate('tela2', {resultado: this.state.resutadoSoma})
            //this.props.navigation.navigate("Hyperlink", { hyperlink: item });
          }}
        >
          <Text style={styles.productButtonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    );
    
  };
}






/*
const Hyperlink = ({ navigation }) => {
 
 dataCompra: navigation.state.params.bovino.dataCompra
  pesoCompra: navigation.state.params.bovino.pesoCompra
  valorCompra: navigation.state.params.bovino.valorCompra
  dataNascimento navigation.state.params.bovino.dataNascimento
  raca navigation.state.params.bovino.raca
  brinco navigation.state.params.bovino.brinco

  
  render(){
    return(
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>Brinco Nº {item.brinco}</Text>
      <Text style={styles.productDescription}>Data da Compra: {item.dataCompra}</Text>  
    </View>);
  }
};
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  list: {
    padding: 20
  },
  productContainer: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 2
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF4500"
  },
  productTitle2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#32CD32"
  },
  productValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  productDescription: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },
  btnAtualizar: {
    height: 42,
    borderRadius: 5,
    backgroundColor: "#FFFF00",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 1
  },
  btnExcluir: {
    height: 42,
    borderRadius: 5,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 1
  },
  productButtonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold"
  }
});



/*
const Hyperlink = ({ navigation }) => {
  return <WebView source={{ uri: navigation.state.params.hyperlink.url }} />;
};

Hyperlink.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.hyperlink.title
});

export default Hyperlink;*/

