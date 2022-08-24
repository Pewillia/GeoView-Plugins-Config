/**
 * @author Vijendra Yadav <Vijendra.Yadav@nrcan-rncan.gc.ca >
 */
import Form from "@rjsf/material-ui";
import { useLocation } from "react-router-dom";
import React from "react";
import { Box, Button } from "@material-ui/core";
import validator from "@rjsf/validator-ajv6";
//import NewWindow from 'react-new-window';
import { render } from "react-dom";
//import { unmountComponentAtNode, render ,unount} from "react-dom";

//import App from "../App.js";

//import { useNavigate } from "react-router-dom"; // react 18

 //import App from "../App.js";

// import validateFormData from "@rjsf/core/lib/validate";

//import { render } from 'react-dom'; // dont pute in brackets get ncaught TypeError: react_dom_client__WEBPACK_IMPORTED_MODULE_1__ is not a function


//import validateFormData from "@rjsf/core";
//import validator from "@rjsf/utils";

// below works

//const onSubmit = ({ formData }) => { alert("Data submitted: ", formData); window.open('https://canadian-geospatial-platform.github.io/geoview/public/default-config.html?p=3857&z=4&c=-100,40&l=en&t=dark&b={id:transport,shaded:false,labeled:true}&i=dynamic&cc=overview-map&keys=12acd145-626a-49eb-b850-0a59c9bc7506,ccc75c12-5acc-4a6a-959f-ef6f621147b9#HLCONF7'
 //,'_blank', 'scrollbars = no, menubar = no, he"ight = 600, width = 800, resizable = yes, toolbar = no');
//};
    //    myWindow.document.write("<label>Entar Name:</label><label>Michael</label><br/><br/><label>Entar Age:</label><label>25</label>");
//"<div id='mapWM' class='llwp-map' data-lang='en' data-config-url='https://canadian-geospatial-platform.github.io/geoview/public/configs/my-config.json'></div>'";
//let Geoviewwindow ="<div id='mapWM' class='llwp-map' data-lang='en' data-config-url='https://canadian-geospatial-platform.github.io/geoview/public/configs/my-config.json'></div>'";
//const onSubmit = ({ formData }) => { alert("Data submitted: ", formData); window.open("<div id='mapWM' class='llwp-map' data-lang='en' data-config-url='https://canadian-geospatial-platform.github.io/geoview/public/configs/my-config.json'></div>'", '_blank', 'scrollbars = no, menubar = no, height = 600, width = 800, resizable = yes, toolbar = no');


//const onSubmit = ({ formData }) => {
 // alert("Data submitted: ", formData); let myWindow = window.open("", '_blank', 'scrollbars = no, menubar = no, height = 600, width = 800, resizable = yes, toolbar = no');
 
// myWindow.document.write("<div id='mapWM' class='llwp-map' data-lang='en' data-config-url='https://canadian-geospatial-platform.github.io/geoview/public/configs/my-config.json'></div>");
 //let Geoviewmap= "<div id=&quot;UC1&quot; class=l&quot;lwp-map&quot; data-lang=&quot;en&quot; data-config=&quot;{ 'map': {"+
//let Geoviewmaphead ="<head><script src=&quot;https://canadian-geospatial-platform.github.io/geoview/public/cgpv-main.js&quot;></script></head>"
//let Geoviewmaphead ="<head><script src=&quot;https://canadian-geospatial-platform.github.io/geoview/public/cgpv-main.js&quot;></script>"

//let navigate = useNavigate();

let formData = new FormData(); // added nov 21


const Geoviewmapdiv = document.createElement("div");
 //Geoviewmapdiv.dangerouslySetInnerHTML = "<div id=\"mapTwo\"class=\"llwp-map\" data-lang=\"en\"  style=\" height: 100vh;\" data-config=\"{ 'map': {" +

 // "><button onclick=\"window.cgpv.init()\"> click</button> </div>";
  // myWindow.document.write(eval(Geoviewmap));
  //let Geoviewmap = "Hi ";
  // myWindow.document.write(Geoviewmap);
 
// let Geoviewmap= "<div id=&quot;UC1&quot; class=l&quot;lwp-map&quot; data-lang=&quot;en&quot; data-config=&quot;{ 'map': {"+
 // let Geoviewmap= "<div id=&quot;UC1&quot; class=l&quot;lwp-map&quot; data-lang=&quot;en&quot; data-config=&quot;{ 'map': {"+

  //const onSubmit = ({ formData }) => {
 
//  alert("Data submitted: ", ); window.open('https://canadian-geospatial-platform.github.io/geoview/public/default-config.html?' + Geoviewmap +'&keys=12acd145-626a-49eb-b850-0a59c9bc7506,ccc75c12-5acc-4a6a-959f-ef6f621147b9#HLCONF7'+


//  alert("Data submitted: ", formData); window.open('https://canadian-geospatial-platform.github.io/geoview/public/default-config.html?p=3857&z=4&c=-100,40&l=en&t=dark&b={id:transport,shaded:false,labeled:true}&i=dynamic&cc=overview-map&keys=12acd145-626a-49eb-b850-0a59c9bc7506,ccc75c12-5acc-4a6a-959f-ef6f621147b9#HLCONF7'

//const root = React.createRoot(document.getElementById('root'));

 
//createRoot(container[, options]);
//createRoot(contain);
  //const root = createRoot(container);
//root.render(element);
  
//unmountComponentAtNode(document.getElementById('root'));


 // const container = document.getElementById('root');
 // const container = document.getElementById('root');
 
 // container.unmount;

 // const root = createRoot(container);
//const onSubmit = ({ formData }) => alert("Data submitted: ", formData);

//const formData = new formData();
 



const onSubmit = ({ formData }) => {// alert("Data submitted: "C);
  console.log(formData);

/*  code below to save and upload a file

  const Form = JSONSchemaForm.default;

const mySchema = {
  "title": "My Form",
  "description": "My Form",
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "title": "Name"
    }
  }
};

*/


  /*
  ReactDOM.render(<MyForm />, document.querySelector("#app"));
  */

// render(<p>Hello</p>, document.getElementById('root'));
   // render(<App />, document.getElementById('root')); //suppose to open in new windpw
   //render(<script src="https://canadian-geospatial-platform.github.io/geoview/public/cgpv-main.js"></script>, document.getElementById('script'));
 
 // render(eval(Geoviewmapdiv), document.getElementById('div'));
  
//render(<App />, document.getElementById("root"));
//const div = document.querySelector('UC1'));
 // render(Geoview, document.getElementById("UC1"));

//  const root = React.createRoot(document.getElementById('root'));
//render(<App />);
 // navigate("/Geoview", {
   //       state: { data: jsonString.plugins, desiredPlugin: values.plugin },
     //   });
 // Demo;
 // document.getElementById('main_place').innerHTML = document.getElementById("UC1").innerHTML;
 //Geoview();
 //render(<a target="_blank" href="http://localhost:3000/GeoView-Plugins-Config/test.html" > </a>, document.getElementById('UC1));
  //document.getElementById("UC1").innerHTML = Geoview;


//  unmountComponentAtNode(document.getElementById("UC1"));


  //unmountComponentAtNode(document.getElementById('UC1'));

  
  //root.render(element);
//const root = createRoot(m);

// works
//root.render( <h1>Hi 👋</h1>);
  
//root.render(eval(Geoviewmapdiv) )
    
 //  root.render(<App name="Geoview" />);
  
  //const root2 = document.getElementById('map');

  
 // var temp = document.createElement("div");
// render
//React.render(<Hello name="World" />, temp);
// grab the container
//var container = document.getElementById("container");
// and replace the child
  
//container.replaceChild(temp.querySelector("#destination"), document.getElementById("destination"));
 
const map = document.getElementById("mapTwo")
 //map.style.display = 'none';


  //const cont = document.getElementById('mapOne');
 //  const cont = documenconst onSubmit = ({ formData }) => alert("Data submitted: ", formData);t.getElementById('body');
  
  //map.style.display = 'none';
  
  const temp = document.createElement("div");
 
 

  render(  // get a react error with style needed  below want to use its wonw method ---    style="height: 100vh;"
    < div class= "llwp-map" id = "mapTwo"   data-lang="en"
    data-config="{
                    'map': {
                        'interaction': 'dynamic',
                        'viewSettings': {
                            'zoom': 12,
                            'center': [45,75],
                            'projection': 3978
                        },
                        'basemapOptions': {
                            'basemapId': 'transport',
                            'shaded': true,
                            'labeled': true
                        },
                      'listOfGeoviewLayerConfig': [
          {
            'geoviewLayerId': 'esriDynamicLYR2',
            'geoviewLayerName': {
              'en': 'Energy',
              'fr': 'Enrgy'
            },
            'metadataAccessPath': {
              'en': 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
              'fr': 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer'
            },
            'geoviewLayerType': 'esriDynamic',
            'listOfLayerEntryConfig': [{ 'layerId': '0' }, { 'layerId': '6' }]
          }
        ]
                    },
                    'theme': 'dark',
                    'components': ['app-bar', 'nav-bar', 'north-arrow'],
                    'corePackages': [],
                    'suportedLanguages': ['en', 'fr']
                }"
 // ><button onClick={this.callGeoview().bind(this)}> click</button></div>, temp);  // need onClick and brakets
// ></div>, temp);  // need onClick and brakets
></div>, temp);  // need onClick and brakets

  //cont.replaceChild(temp, document.getElementById('body'));

  //const div = document.querySelector("div"); // inserts after first dive before mapOne
  // const div = document.querySelector("mapOne"); // doesnt work null returend
 
  //works but doesn't display              react error 31
  //cont.replaceWith(Geoviewmapdiv);

  // map.replaceWith(temp); //
 

     Geoviewmapdiv.innerHTML = "<div id=\"mapTwo\"class=\"llwp-map\" data-lang=Cen\"  style=\" height: 200vh;\" data-config=\"{ 'map': {" +
 "'interaction': 'dynamic'," +
                     "   'viewSettings': {   "  +
                        "    'zoom': 4,  "+
                       "    'center': [-100,75],  " +
                         "   'projection': 3978  "  +
                       " },    "  +
                       " 'basemapOptions': {    "+
                       "     'basemapId': '"+formData.map.basemapOptions.id+"'," +
                      "      'shaded': "+formData.map.basemapOptions.shaded+","+
                     "       'labeled': "+formData.map.basemapOptions.labeled+
                     "   }, "            +
                    "    'listOfGeoviewLayerConfig': [ "    +
                      "  {                               "    +
                       "         'geoviewLayerId': 'esriDynamicLYR2', "+
                       "   'geoviewLayerName': {                       " +
                       "      'en': 'Energy',  "        +
                        "     'fr': 'Energy'  "      +
                         " },                     "                          +
                        "  'metadataAccessPath': {   "                               +
                          " 'en': 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer', "+
                          "  'fr': 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer'" +
                          "}, "+
                          " 'geoviewLayerType': 'esriDynamic' ,"+
                          " 'listOfLayerEntryConfig': [{ 'layerId': '0' }, { 'layerId': '6' }]"    +
                        "}  "+
                     "]"+
                    " },  "+
                    " 'theme': '"+formData.theme+"'," +
  //               " 'components': ['app-bar', 'nav-bar', 'north-arrow'], "+
  "'components': ['"+ formData.components[0]+"','"+formData.components[1]+"','"+formData.components[2]+"','" +formData.components[3]+"'],"+
                    " 'corePackages': ['"+ formData.corePackages[0]+"','"+formData.corePackages[1]+"','"+formData.corePackages[2]+"','" +formData.corePackages[3]+"']," +
                   " 'suportedLanguages': ['"+ formData.suportedLanguages[0]+"','"+formData.suportedLanguages[1]+"']" +
               " }\" "+
    "> </div>"; 
  
  
  Geoviewmapdiv.innerHTML = "<div id=\"mapWM\"class=\"llwp-map\" data-lang=\"en\"  style=\" height: 200vh;\" data-config-url=\"https://canadian-geospatial-platform.github.io/geoview/configs/my-config.json\" "+
 "> </div>"; 
//  <div
 // id="mapWM"
 // class="llwp-map"
 // data-lang="en"
 // data-config-url="https://canadian-geospatial-platform.github.io/geoview/public/configs/my-config.json"
//></div>
  
  
 // https://canadian-geospatial-platform.github.io/geoview/configs/my-config.json
//<div

 // id="mapWM"
 // class="llwp-map"
////  data-lang="en"
//  data-config-url="https://canadian-geospatial-platform.github.io/geoview/public/configs/my-config.json"
//></div>
  
 //const formdatajson= JSON.stringify(formData);
  
  console.log('map div=',Geoviewmapdiv);
  map.replaceWith(Geoviewmapdiv); // rect error 31

  window.cgpv.init();

  //const file = Window.showOpenFilePicker();

  console.log('map components1',formData);
console.log('map components',formData.components);

  //replaceChildren

  //localStorage.setItem('language', 'en');

   //window.open("http://localhost:3000/GeoView-Plugins-Config/public/test2.html", '_blank', 'scrollbars = no, menubar = yes, height = 600, width = 800, resizable = yes, toolbar = yes');
    
  //navigate("/Geoview", {
   //         state: { data: jsonString.plugins, desiredPlugin: values.plugin },
    //      });
  
  //map.replaceWith(eval(Geoview)); //
  
  //winGeoview();

  //alert("Data submitted: ", formData);
  
 //map.replaceWith(temp); //
 
  //cgpv.init();  .. how to call cgpv init cuntion that is in html fon page load

  //$(map).change(function(cgpv.init()));

  //window.location.reload(false);
  
  //remove mapOne
  //map.remove;

// doesnt call map init function on pasge
//https://canadian-geospatial-platform.github.io/geoview/public/default-config.html?p=3857&z=4&c=-100,40&l=en&t=dark&b={id:transport,shaded:false,labeled:true}&i=dynamic&cc=overview-map&keys=12acd145-626a-49eb-b850-0a59c9bc7506,ccc75c12-5acc-4a6a-959f-ef6f621147b9#HLCONF7
 //render(eval(Geoviewmapdiv) ,document.getElementById('root'));
//render(Geoview ,document.getElementById('root'))

//render( <h1>Hi 👋</h1> ,document.getElementById('root'))

};

//  alert("Data submitted: ", formData); window.open(Geoviewmap
//, '_blank', 'scrollbars = no, menubar = no, height = 600, width = 800, resizable = yes, toolbar = no');
//};

// works below

 
  //  alert("Data submitted: ", formData); window.open("https://canadian-geospatial-platform.github.io/geoview/default-config.html?p=3857&z=4&c=-100,40&l=e,&d=https://canadian-geospatial-platform.github.io/geoview/public/configs/my-config.json&keys=12acd145-626a-49eb-b850-0a59c9bc7506,ccc75c12-5acc-4a6a-959f-ef6f621147b9#"
  
  

  
  //let Geoviewwindow ="<div id='mapWM' class='llwp-map' data-lang='en' data-config-url='https://canadian-geospatial-platform.github.io/geoview/public/configs/my-config.json'></div>'");



//function winGeoview() {
  // works
 // window.open("http://localhost:3000/GeoView-Plugins-Config/test2.html","popup","width=800,height=800");
//};




function SchemaForm() {
  const location = useLocation();

 // let demo = "https://canadian-geospatial-platform.github.io/geoview/public/default-config.html?p=3857&z=4&c=-100,40&l=en&t=dark&b={id:transport,shaded:false,labeled:true}&i=dynamic&cc=overview-map&keys=12acd145-626a-49eb-b850-0a59c9bc7506,ccc75c12-5acc-4a6a-959f-ef6f621147b9#HLCONF7";
//let demo2="form target="_blank" action="http://example.com">"

  let transformErrors = (errors) => {
 //console.log(errors);
  var e = [];
  errors.map(error => {
    if (error.message !== "should be equal to one of the allowed values") {
      e.push(error)
    }
    if (error.message === "should be number") {
      error.message = "devrait etre numero";
      e.push(error)
   }
  });
 // console.log(e);
  return e;
  };
  
// function validate(formData, errors) {
  
    //following codde slet us defone owm error message or shoudl
 // if (formData.pass1 !== formData.pass2) {
 //   errors.pass2.addError("Passwords don't match");
 //    if (formData.map.basemapOtions.shaded  === true) {
 //  errors.pass2.addError("devrait marcher");
 //}
// return errors;
//}
 
  let dataObject = location.state.data;
  console.log('data object-',dataObject);
  
  let jsonObject = JSON.stringify(dataObject);
  let schemaData = JSON.parse(jsonObject);
 
  console.log('form dagta-'); // all data inisde plugin ?
 // console.log('form dagta-', formData); // all data inisde plugin ?
 
  /*
  class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          initialData: props.initialData,
        };
    }

    onChangeUploadData  = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.fileName = e.target.files[0].name;
        fileReader.onload = e => {
          this.setState({ initialData: JSON.parse(fileReader.result) });
          console.log(this.state.initialData);
        };
    };

    handleSubmit({formData}) {
        var blob = new Blob([JSON.stringify(formData, null, 2)], { type: "application/json;charset=utf-8" });
        saveAs(blob, "hello_world.json");
        console.log(formData);
    }

    render() {
        return (
          <div>
            
            <input label="Upload File" type="file" onChange={this.onChangeUploadData}/>
          <Form schema={ schemaData[0].map} onSubmit={this.handleSubmit}  formData={this.state.initialData}/>
   //       <Form schema={ schemaData[0].map} onSubmit={this.handleSubmit}  formData={this.state.initialData}/>
          </div>
        )
    }
}
  
  */
  

  const desiredSchema = location.state.desiredPlugin;
   console.log('desired schema', desiredSchema); // all data inisde plugin ?
 
  //let formData, setFormData;
  //[formData, setFormData] = React.useState(null);

  if (desiredSchema === "Range Slider") {
    schemaData = dataObject[0].rangeSlider;
  } else if (desiredSchema === "Chart") {
    schemaData = schemaData[0].chart;
  } else if (desiredSchema === "languages") {
    schemaData = schemaData[0].languages;
  } else if (desiredSchema === "version") {
    schemaData = schemaData[0].version;
  } else if (desiredSchema === "Ui") {
    schemaData = schemaData[0].Ui;
  } else if (desiredSchema === "map") {
    console.log('schma map-', schemaData[0].map);
    schemaData = schemaData[0].map;
  } else if (desiredSchema === "Services") {
    schemaData = schemaData[0].Services;
  } else if (desiredSchema === "Swiper") {
    schemaData = schemaData[0].swiper;
  } else if (desiredSchema === "Draw Toolbar") {
    schemaData = schemaData[0].draw;
  } else {
    schemaData = schemaData[0].thematicSlider;
  } // works if put fill data in schema data
  // <Form schema={schemaData} onSubmit={onSubmit}></Form>
  //  showErrorList={false} - removes list of all errors displayed at top of form
  //  validate={validate}  - use ths to circumvent form validateion
  // fill form with existing data formContext={formData}
  return (
    <div className="Schema-Form"> 
      <Form schema={schemaData} onSubmit={onSubmit} showErrorList={false} validator={validator}
        transformErrors={transformErrors}  formContext={formData} liveValidate>
        <div />
        <Box height={14} />
        <Button type="submit" variant="contained" color="primary" size="large">
          SUBMIT
        </Button>
          <Box height={14} />
        <Button type="save" variant="contained" color="primary" onclick="alert('here',formData);" size="large">
          SAVE
        </Button>
        
      </Form>
    </div>
  );
}

//https://canadian-geospatial-platform.github.io/geoview/public/default-config.html?p=3857&z=4&c=-100,40&l=en&t=dark&b={id:transport,shaded:false,labeled:true}&i=dynamic&cc=overview-map&keys=12acd145-626a-49eb-b850-0a59c9bc7506,ccc75c12-5acc-4a6a-959f-ef6f621147b9#HLCONF7

//  function save() {
            // save the file. Some browsers like IE and Edge doesn't support File constructor, use blob
            // https://stackoverflow.com/questions/39266801/saving-file-on-ie11-with-filesaver
   //         const file = new Blob([modelManager.save()], { type: 'application/json' });
    //        FileSaver.saveAs(file, `${self.fileName}.json`);
    //        self.close();
    //    }

   
export default SchemaForm;
