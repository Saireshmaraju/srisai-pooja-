import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap'
import './bootstrap.min.css'
import HomeScreen from "./screens/HomeScreen";
import Carouseli from "./components/Carouseli";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <>
      <Header/>
       <main>

         <Container>
           <HomeScreen/>
         </Container>

</main>
<Carouseli/>
<ProductScreen/>
      <Footer/>
    </>
  );
}

export default App;
