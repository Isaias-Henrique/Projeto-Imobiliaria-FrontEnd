import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Header/Footer";
import Erro from "../pages/Erro";
import Anuncio from "../pages/Home/Anuncio";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Perfil from "../pages/Perfil";
import PrivateRoute from "../components/PrivateRoute"; // se for usar rota privada
import ScrollToTop from "../components/ScrollToTop";
import MeusImoveis from "../pages/MeusImoveis";


const RouterApp = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/imovel/:slug" component={Anuncio} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/meus-imoveis" component={MeusImoveis} />
        <PrivateRoute path="/perfil" component={Perfil} />
        <Route path="*" component={Erro} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterApp;
