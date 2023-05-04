import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function TransactionForm({ onSubmit }) {
  const classes = useStyles();

  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ date, description, amount });
    setDate('');
    setDescription('');
    setAmount('');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        id="date"
        label="Date"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="description"
        label="Description"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className={classes.textField}
      />
      <TextField
        id="amount"
        label="Amount"
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        className={classes.textField}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.button}
      >
        Add Transaction
      </Button>
    </form>
  );
}

export default TransactionForm;
