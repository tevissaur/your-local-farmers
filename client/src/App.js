import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import Homepage from './pages/Homepage'
import SideNavBar from "./components/SideNavBar";
import customTheme from "./extendedTheme";
import { categoryData } from "./categoryData";
import Product from "./components/Product";

function App() {
  console.log(categoryData)
  return (
    <ChakraProvider theme={customTheme}>
     <Router>
       <Routes>
         <Route exact path ="/" element ={<Homepage />}></Route>
         <Route path="/products/:title" element={<Product data={categoryData} />}></Route>
       </Routes>
     </Router>

    </ChakraProvider>
     
  );
}

export default App;
