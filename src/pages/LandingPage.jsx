import React from 'react';

import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(270deg, #2e003e 50%, #3d1e6d 50%)',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1: {
        fontFamily: 'Ubuntu, sans-serif',
        background: '#8874a3',
        padding: '10px',
        // width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '350px'
    },
    box2: {
        fontFamily: 'Ubuntu, sans-serif',
        background: '#e4dcf1',
        padding: '10px',
        // width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '350px'
    },
});


export default function Signup() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid
                container
                direction='column'
            >
                <Link style={{ textDecoration: 'none' }}>
                    <Typography
                        variant='h2'
                        color='primary'
                        backgroundColor='#8874a3'
                    >
                        WeOffice
                </Typography>
                </Link>
            </Grid>
            <Grid
                container
                // direction='row'
                className={classes.box2}
                xs={6}
            >
                <Typography
                    variant="h5"
                >
                    <Link to='/signin' style={{ textDecoration: 'none' }}>
                        SIGN IN
                        </Link>
                </Typography>

            </Grid>
            <Grid
                container
                // direction='row'
                className={classes.box1}
                xs={6}
            >
                <Typography
                    variant="h5"
                >
                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                        SIGN UP
                        </Link>
                </Typography>
            </Grid>
        </Grid>
    )
}