import InputForm from "./components/InputForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Plugin from "./components/SchemaForm";
//import Geoview from "./components/Geoview";
// import Dynamic from "./components/Dynamic";

// oct 31 just added       <Route path="*" element={<NotFoundPage />} />
      //  <Route exact path="/" element={Home} />
       //  <Dynamic  path="dynamic" /> 
    //     <Route path='/Geoview' component={() => { 
//  window.location.href = 'https://canadian-geospatial-platform.github.io/geoview/public/default-config.html?p=3857&z=4&c=-100,40&l=en&t=dark&b={id:transport,shaded:false,labeled:true}&i=dynamic&cc=overview-map&keys=12acd145-626a-49eb-b850-0a59c9bc7506,ccc75c12-5acc-4a6a-959f-ef6f621147b9#HLCONF5'; 
  //   return null;
//}}/>
  //<Link to="myRoute" params={myParams} target="_blank"></Link>
  
//  <Link to="Geoview" Geoview2 target="_blank" rel="noopener noreferrer" />
  //        <Route exact path="/" element={<Geoview />} />
  ///> can't pass a div to react 
   //           <Route exact path="/" element={<Geoview />} /> 
    //    <Route exact path="/Geoview" element={<Geoview />} />
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}> 
      <Routes>
        <Route exact path="/" element={<InputForm />} />
        <Route exact path="/Plugin" element={<Plugin />} />

        <Route path="*" />
        <Route path="/"  />

      </Routes>
    </Router>
  );
};


export default App;
