import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Instructions } from "./routes/Instructions";
import { Categories } from "./routes/Categories";
import { Game } from "./routes/Game";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
