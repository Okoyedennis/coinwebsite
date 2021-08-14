import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Converter from "./component/Converter";

function App() {
  return (
    <ChakraProvider>
      <div className="app">
        <Converter />
      </div>
    </ChakraProvider>
  );
}

export default App;
