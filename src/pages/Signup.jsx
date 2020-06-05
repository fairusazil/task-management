import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Link, useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import { addUser } from '../redux/action/SignupAction';
import { useDispatch } from 'react-redux'

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #2e003e 50%, #3d1e6d 50%)',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        fontFamily: 'Ubuntu, sans-serif',
        background: 'linear-gradient(-45deg, #8874a3 50%, #e4dcf1 50%)',
        padding: '10px',
        minWidth: '200px',
        maxWidth: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        borderRadius: 0
    }
});


export default function Signup() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { handleSubmit, getFieldProps, errors, touched } = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Cannot Blank!').email('Invalid email format'),
            username: Yup.string().required('Cannot Blank!').min(3, 'must be at least 3 characters or more'),
            password: Yup.string().required('Cannot Blank!').min(8, 'must be at least 8 characters or more'),
        }),
        onSubmit: (values) => {
            // console.log(values)
            dispatch(addUser(values))
            alert ('Sign up success!')
            history.push('/signin')
        }
    })
    const history = useHistory()
    return (
        <Grid container className={classes.root}>
            <Grid
                container
                direction='column'
                item
                alignItems='center'
            >
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Typography
                        variant='h2'
                        color='primary'
                        backgroundColor='#8874a3'
                    >
                        WeOffice
                </Typography>
                </Link>
                <Grid
                    container
                    direction='column'
                    className={classes.box}
                    item
                >
                    <Typography
                        variant="h4"
                    >
                        SIGN UP
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            type="email"
                            id="email"
                            label="Email"
                            margin="dense"
                            variant='outlined'
                            helperText={touched.email ? errors.email : ""}
                            error={touched.email && Boolean(errors.email)}
                            {...getFieldProps('email')}
                        />

                        <TextField
                            fullWidth
                            type="text"
                            id="username"
                            label="Username"
                            margin="dense"
                            variant='outlined'
                            helperText={touched.username ? errors.username : ""}
                            error={touched.username && Boolean(errors.username)}
                            {...getFieldProps('username')}
                        />

                        <TextField
                            fullWidth
                            type="password"
                            id="password"
                            label="Password"
                            margin="dense"
                            variant='outlined'
                            helperText={touched.password ? errors.password : ""}
                            error={touched.password && Boolean(errors.password)}
                            {...getFieldProps('password')}
                        />
                        <Button className={classes.btn} type="submit" variant="contained" color="primary">Sign Up</Button>
                        <Typography>
                            Already signup?
                            <Link to='/signin'>
                                Click here!
                            </Link>
                        </Typography>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}