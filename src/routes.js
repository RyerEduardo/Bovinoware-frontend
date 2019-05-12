import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./pages/home";
import Detales from "./pages/detales";
import Cadastrar from "./pages/Cadastrar";
//import Listar from "./pages/listar";

const defaultStyle = title => {
  return {
    title,
    headerStyle: {
      backgroundColor: "#444"
    },
    headerTintColor: "#FFF"
  };
};

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => defaultStyle("Home")
  },
  Detales: {
    screen: Detales,
    navigationOptions: () => defaultStyle("Detales")
  }
});
/*
const ListarStack = createStackNavigator({
  Listar: {
    screen: Listar,
    navigationOptions: () => defaultStyle("Listar")
  }
  
});


const CadastroLinksStack = createStackNavigator({
  CadastroLinks: {
    screen: CadastroLinks,
    navigationOptions: () => defaultStyle("Cadastro de Bovino")
  }
});*/

const CadastrarStack = createStackNavigator({
  Cadastrar: {
    screen: Cadastrar,
    navigationOptions: () => defaultStyle("Cadastro de Bovino")
  }
});


const TabStackNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Cadastrar: {
      screen: CadastrarStack,
      navigationOptions: () => ({
        title: "Cadastrar"
      })
    }
    
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : "-outline"}`;
          // iconName = `ios-home`;
        } else if (routeName === "Cadastrar") {
          iconName = `add${focused ? "-off" : ""}`;
        } 
        return <Icon name={iconName} size={18} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#5C87A7",
      inactiveTintColor: "gray"
    }
  }
);

/*
const TabStackNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    CadastroLinks: {
      screen: CadastroLinksStack,
      navigationOptions: () => ({
        title: "Adicionar Links"
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : "-outline"}`;
          // iconName = `ios-home`;
        } else if (routeName === "CadastroLinks") {
          iconName = `link${focused ? "-off" : ""}`;
        }
        return <Icon name={iconName} size={18} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#5C87A7",
      inactiveTintColor: "gray"
    }
  }
);*/

export default createAppContainer(TabStackNavigator);
