import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import Homepage from './pages/Homepage'
import SideNavBar from "./components/SideNavBar";

function App() {
  return (
    <ChakraProvider>
     <Router>
       <Routes>
         <Route exact path ="/" element ={<Homepage />}></Route>
       </Routes>
     </Router>

    </ChakraProvider>
     
  );
}

export default App;
