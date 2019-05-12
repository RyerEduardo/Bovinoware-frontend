import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default class Detalhes extends Component {

  render(){
    const params = this.props.navigation.state.params;
    const brinco = this.props.navigation.getParam('brinco');
    
    return (
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>Data Compra: {params.dataCompra}</Text>
        <Text style={styles.productTitle}>Peso Compra: {params.pesoCompra}</Text>
        <Text style={styles.productTitle}>Valor Compra: {params.valorCompra}</Text>
        <Text style={styles.productTitle}>Data Nascimento: {params.dataNascimento}</Text>
        <Text style={styles.productTitle}>Raça: {params.raca}</Text>
        <Text style={styles.productTitle}>Brinco Nº: {brinco}</Text>
        <Text style={styles.productTitle}>Data Venda: {params.dataVenda}</Text>
        <Text style={styles.productTitle}>Peso Venda: {params.pesoVenda}</Text>
        <Text style={styles.productTitle}>Valor Venda: {params.valorVenda}</Text>
     
  
        <TouchableOpacity
          style={styles.productButton}
          onPress={() => {
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
    color: "#333"
  },
  productDescription: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    backgroundColor: "#ddd",
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

