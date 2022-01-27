/**
 * @author Vijendra Yadav <Vijendra.Yadav@nrcan-rncan.gc.ca >
 */
import Form from "@rjsf/material-ui";
import { useLocation } from "react-router-dom";
import React from "react";
import { Box, Button } from "@material-ui/core";

const onSubmit = ({ formData }) => alert("Data submitted: ", formData);

function SchemaForm() {
  const location = useLocation();
  let dataObject = location.state.data;
  console.log(dataObject);
  let jsonObject = JSON.stringify(dataObject);
  let schemaData = JSON.parse(jsonObject);

  const desiredSchema = location.state.desiredPlugin;
  //let formData, setFormData;
  //[formData, setFormData] = React.useState(null);

  if (desiredSchema === "Range Slider") {
    schemaData = dataObject[0].rangeSlider;
  } else if (desiredSchema === "Chart") {
    schemaData = schemaData[0].chart;
  } else if (desiredSchema === "Swiper") {
    schemaData = schemaData[0].swiper;
  } else if (desiredSchema === "Draw Toolbar") {
    schemaData = schemaData[0].draw;
  } else {
    schemaData = schemaData[0].thematicSlider;
  }
  return (
    <div className="Schema-Form">
      <Form schema={schemaData} onSubmit={onSubmit}>
        <div />
        <Box height={14} />
        <Button type="submit" variant="contained" color="primary" size="large">
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}

export default SchemaForm;
