import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";

import api from "../../services/api";
import styles from "./styles";

export default class Cadastrar extends Component {
  state = {
    dataCompra: "",
    pesoCompra: "",
    valorCompra: "",
    dataNascimento: "",
    raca: "",
    brinco: ""
  };

  handleSubmit = async () => {
    const response = await api.post("bovinos", {
      dataCompra: this.state.dataCompra,
      pesoCompra: this.state.pesoCompra,
      valorCompra: this.state.valorCompra,
      dataNascimento: this.state.dataNascimento,
      raca: this.state.raca,
      brinco: this.state.brinco
    });

    this.props.navigation.navigate("Home");
  };

  render(props) {
    console.log(this.props);

    return (
      
      <ScrollView style={styles.form}>
       

        <TextInput
          style={styles.inputText}
          placeholder="Data da Compra ex: 12/10/2010"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.dataCompra}
          onChangeText={text => this.setState({ dataCompra: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Peso em Kg, ex: 500"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.pesoCompra}
          onChangeText={text => this.setState({ pesoCompra: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Valor da Compra, ex: 800"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.valorCompra}
          onChangeText={text => this.setState({ valorCompra: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Data de Nascimento, ex: 10/10/2010"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.dataNascimento}
          onChangeText={text => this.setState({ dataNascimento: text })}
        />


        <TextInput
          style={styles.inputText}
          placeholder="Raça, ex: Nelore"
          placeholderTextColor="#999"
          autoCapitalize="characters"// modificado
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.raca}
          onChangeText={text => this.setState({ raca: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Brinco Nº, ex: 499"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.brinco}
          onChangeText={text => this.setState({ brinco: text })}
        />

        <TouchableOpacity
          style={styles.productButton}
          onPress={this.handleSubmit}
        >
          <Text style={styles.productButtonText}>Salvar</Text>
        </TouchableOpacity>
       
      </ScrollView >
    );
  }
}
