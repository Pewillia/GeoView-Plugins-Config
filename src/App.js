import InputForm from "./components/InputForm";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Plugin from "./components/SchemaForm";


const App = () => {
    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<InputForm/>}/>
                <Route exact path="/Plugin" element={<Plugin/>}/>
            </Routes>
        </Router>
    );
};

export default App;

