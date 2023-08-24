import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { format } from 'currency-formatter';

import Card from './';
import useStyles from '../../../global/styles';
const Recipe = ({ receipt = 0, loading }) => {
  const styles = useStyles();
  return (
    <Card bg='rgb(98, 110, 212)'>
      <Grid container direction='column'>
        <Grid item>
          <Typography className={styles.h2white}>
            {loading ? <Skeleton animation='wave' width='80%' /> : 'Total Receita'}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={styles.moneyLabelWhite}>
            {loading ? <Skeleton animation='wave' variant='rect' height={30} /> : format(receipt, { code: 'BRL' })}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Recipe;
