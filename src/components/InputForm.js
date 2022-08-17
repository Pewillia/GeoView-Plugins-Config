/**
 * @author Vijendra Yadav <Vijendra.Yadav@nrcan-rncan.gc.ca >
 */

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
//import api from "../api/api";

const initialValues = {
  uuid: "",
  language: "",
  plugin: "",
};
/*
async function getSchema(uuid, language, pluginType) {
  try {
    return await api.get("/plugins", {
      params: {
        id: uuid,
        language: language,
        pluginType: pluginType,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
*/

const InputForm = () => {
  let navigate = useNavigate();
  return (
    <div className="InputForm">
      <Formik
        initialValues={initialValues}
        validationSchema={object({
          uuid: string().required("Please enter UUID").uuid("Invalid UUID"),
          language: string().required("Please select Language"),
          plugin: string().required("Please provide desired plugin"),
        })}
        onSubmit={(values, formikHelpers) => {
          //const schema = getSchema(values.uuid, values.language, values.plugin);
          const jsonString = require("./db.json");
          //const customer = JSON.parse(jsonString);
          console.log(jsonString.plugins);

          navigate("/plugin", {
            state: { data: jsonString.plugins, desiredPlugin: values.plugin },
          });
          formikHelpers.resetForm();
        }}
      >
        {({ values, setFieldValue, errors, isValid, touched, dirty }) => (
          <Form>
            <Typography
              align={"center"}
              variant="h4"
              style={{ color: "#000000" }}
            >
              Welcome to NRCan Internal
            </Typography>
            <Box height={40} />
            <Field
              name="uuid"
              type="uuid"
              as={TextField}
              variant="outlined"
              color="info"
              label="UUID"
              placeholder={"Please ENTER valid UUID value"}
              fullWidth
              error={Boolean(errors.uuid) && Boolean(touched.uuid)}
              helperText={Boolean(touched.uuid) && errors.uuid}
            />

            <Box height={14} />

            <FormControl component="fieldset">
              <FormLabel component="legend">Language</FormLabel>

              <RadioGroup
                row
                aria-label="language"
                name="row-radio-buttons-group"
                value={values.initialValues}
                onChange={(event) => {
                  setFieldValue("language", event.currentTarget.value);
                }}
              >
                <FormControlLabel
                  value="English"
                  control={<Radio color="info" />}
                  label="English"
                />
                <FormControlLabel
                  value="French"
                  control={<Radio color="info" />}
                  label="French"
                />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
              <FormLabel component="legend">Available Plugin</FormLabel>
              <RadioGroup
                row
                aria-label="plugin"
                name="row-radio-buttons-group"
                value={values.initialValues}
                onChange={(event) => {
                  setFieldValue("plugin", event.currentTarget.value);
                }}
              >
                <Box height={16} />
                <FormControlLabel
                  value="Range Slider"
                  control={<Radio color="info" />}
                  label="Range Slider"
                />
                <FormControlLabel
                  value="Chart"
                  control={<Radio color="info" />}
                  label="Chart"
                />
                <FormControlLabel
                  value="Swiper"
                  control={<Radio color="info" />}
                  label="Swiper"
                />
                <FormControlLabel
                  value="Draw Toolbar"
                  control={<Radio color="info" />}
                  label="Draw Toolbar"
                />
                <FormControlLabel
                  value="language"
                  control={<Radio color="info" />}
                  label="language"
                />
                 <FormControlLabel
                  value="version"
                  control={<Radio color="info" />}
                  label="version"
                />
                <FormControlLabel
                  value="Services"
                  control={<Radio color="info" />}
                  label="Services"
                />
                 <FormControlLabel
                  value="Ui"
                  control={<Radio color="info" />}
                  label="Ui"
                />
                 <FormControlLabel
                  value="Map"
                  control={<Radio color="info" />}
                  label="Map"
                />
                


              </RadioGroup>
            </FormControl>
            <Box height={14} />
            <div style={{ paddingLeft: 250 }}>
              <Button
                type="submit"
                variant="contained"
                color={"primary"}
                size="large"
                disabled={!isValid || !dirty}
              >
                SUBMIT
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InputForm;
