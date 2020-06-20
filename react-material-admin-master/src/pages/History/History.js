import React from "react";
import { Grid } from "@material-ui/core";

// styles
// import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";


export default function HistoryPage() {
  // var classes = useStyles();

  return (
    <>
      <PageTitle title="History" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
         HistoryPage will be shown
        
        </Grid>
      </Grid>
    </>
  );
}
