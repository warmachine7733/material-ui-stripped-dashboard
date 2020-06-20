import React from "react";
import {
  Grid,
TextField,Button
} from "@material-ui/core";
// import { useTheme } from "@material-ui/styles";


// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";




export default function Dashboard(props) {
  var classes = useStyles();
  // var theme = useTheme();

  // local
  // var [mainChartState, setMainChartState] = useState("monthly");

  return (
    <>
      <PageTitle title="Dashboard"  />
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
        <h2>Create a new meeting</h2>
        <TextField id="outlined-basic" label="Meeting Name" variant="outlined" /><br/>
    
        <Button variant="contained" color="primary" className={classes.createButton}>
  Start
</Button>
        </Grid>
      </Grid>
    </>
  );
}






 

