import React from "react";
import Lista from "./Components/Lista";
import Atributos from "./Components/Atributos";
import './style.css';
import Hooks from "./Components/Hooks";
import USEeffect from "./Components/USEeffect";
import FetchEuseEffects from "./Components/FetchEuseEffects";
import Props from "./Components/Props";
import Condicional from "./Components/Condicional";
import { BrowserRouter, Route} from "react-router-dom";
import NavegacaoRouterDom from "./Components/NavegacaoRouterDom";
import Produtos from "./Pages/Produtos";
import Sobre from "./Pages/Sobre";
import Home from "./Pages/Home";


const App = () => {
    return <BrowserRouter>
        <Route path="/" exact>
        <Lista/>
        <Atributos/>
        <Hooks/>
        <USEeffect/>
        <FetchEuseEffects/>
        <Props/>
        <Condicional/>
        <NavegacaoRouterDom/>
        </Route>
        <Route path="/produtos" component={Produtos}>
          <Produtos />
        </Route>
        <Route path="/sobre" component={Sobre}>
          <Sobre/>
        </Route>
        <Route path="/home" component={Home}>
          <Home/>
        </Route>
    </BrowserRouter>
}

export default App;