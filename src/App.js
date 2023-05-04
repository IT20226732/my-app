import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TransactionTable from "./view/viewTransaction";
import SideNav from "./view/sideNavBar";
import AddTransaction from "./view/AddTransaction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  addTransactionPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <SideNav />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <h2>Transaction Table</h2>
            <TransactionTable />
          </Paper>
          <Paper className={classes.addTransactionPaper}>
            <h2>Add Transaction</h2>
            <AddTransaction />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
