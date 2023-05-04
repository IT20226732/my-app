import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
  table: {
    minWidth: 650,
  },
}));

const transactions = [
  {
    id: 1,
    date: '2023-05-01',
    description: 'Payment from John Doe',
    amount: 100.0,
  },
  {
    id: 2,
    date: '2023-04-29',
    description: 'Payment from Jane Doe',
    amount: 50.0,
  },
  // Add more transactions as needed
];

function TransactionTable() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Transaction table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell component="th" scope="row">
                  {transaction.id}
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell align="right">{transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
}

export default TransactionTable;