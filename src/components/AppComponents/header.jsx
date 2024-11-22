import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={"flex justify-between p-3 items-center mx-10"}>
            <div>

                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography
                        variant="h6"
                        sx={{

                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }}
                    >
                        ZotRent
                    </Typography>
                </Link>
            </div>
            <div className={"flex gap-5"}>
                <Link to={"/rent"}>
                    <Button
                        color="inherit"
                        sx={{
                            fontSize: '1rem',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)'
                            }
                        }}
                    >
                        Rent
                    </Button>
                </Link>
                <Link to={"/"}>
                    <Button
                        color="inherit"
                        sx={{
                            fontSize: '1rem',
                            fontWeight: 'semi-bold',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                            },
                        }}
                    >
                        Advertise
                    </Button>
                </Link>

                <Link to="/rental-page" >
                    <Button
                        color="inherit"
                        sx={{
                            fontSize: '1rem',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)'
                            }
                        }}
                    >
                        Sell
                    </Button>
                </Link>

                <Link to={"/"}>
                    <Button
                        color="inherit"
                        sx={{
                            fontSize: '1rem',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)'
                            }
                        }}
                    >
                        Manage Rentals
                    </Button>
                </Link>

            </div>
            <div>
                <Button
                    color="inherit"
                    sx={{
                        fontSize: '1rem',
                        color: 'white',
                        backgroundColor: '#2563EB',
                        maxWidth: 'fit-content',
                        px: 3,
                        borderRadius: '0.5rem',
                        '&:hover': {
                            backgroundColor: '#1E3A8A',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                        }
                    }}
                >
                    Sign in
                </Button>
            </div>

        </div>

    );
}

export default Header;
