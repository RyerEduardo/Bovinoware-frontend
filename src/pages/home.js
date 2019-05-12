import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight
} from "react-native";

import api from "../services/api";

export default class Home extends Component {
  state = {
    bovinoInfo: {},
    docs: [],
    page: 1
  };

  componentDidMount() {
    this.loadBovinos();
  }

  loadBovinos = async (page = 1) => {
    try {
      const response = await api.get(`/bovinos?page=${page}`);

      const { docs, ...bovinoInfo } = response.data;

      this.setState({
        docs: [...this.state.docs, ...docs],
        bovinoInfo,
        page
      });
    } catch (error) {
      console.log(error);
    }
  };

  loadMore = () => {
    const { page, bovinoInfo } = this.state;

    if (page === bovinoInfo.pages) return;

    const pageNumber = page + 1;

    this.loadBovinos(pageNumber);
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>Brinco Nº {item.brinco}</Text>
        <Text style={styles.productDescription}>Data da Compra: {item.dataCompra}</Text>

        <TouchableOpacity
          style={styles.productButton}
          onPress={() => {
            this.props.navigation.navigate('Detales', {item});
           // this.props.navigation.navigate("Detales", { param: this.state });
            //this.props.navigation.navigate("detales", {bovino: this.state});
            //this.props.navigation.navigate('tela2', {resultado: this.state.resutadoSoma})
            //this.props.navigation.navigate("Hyperlink", { hyperlink: item });
          }}
        >
          <Text style={styles.productButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  };



  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("CadastroLinks");
          }}
          underlayColor="white"
        >
          <Text>Cadastrar Links</Text>
        </TouchableHighlight> */}
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

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
