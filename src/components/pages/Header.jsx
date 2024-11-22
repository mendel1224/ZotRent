import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function header()
{

return (
    <AppBar
        position="sticky"
        sx={{
            backgroundColor: 'white',
            boxShadow: 'none',
            borderBottom: 'none'
        }}
    >
        <Toolbar
            sx={{
                display: 'flex',
                justifyContent: 'center',
                minHeight: '68px',
                px: { xs: 2, sm: 4 }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: { xs: 1, sm: 10 },
                }}
            >
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
                <Button
                    color="inherit"
                    sx={{
                        fontSize: '1rem',
                        fontWeight: 'semi-bold',
                        paddingX: 2,
                        paddingY: 1.5,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.08)',

                        },
                    }}
                >
                    Advertise
                </Button>
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
                <Button
                    color="inherit"
                    sx={{
                        fontSize: '1rem',
                        color: 'white',
                        backgroundColor: '#2563EB',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        maxWidth: 'fit-content',
                        px: 3,
                        borderRadius: '0.5rem',
                        position: 'absolute',
                        right: 20,
                        '&:hover': {
                            backgroundColor: '#1E3A8A',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                        }
                    }}
                >
                    Sign in
                </Button>

            </Box>

            <Typography
                variant="h6"
                sx={{
                    position: 'absolute',
                    left: 20,
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }}
            >
                ZotRent
            </Typography>
        </Toolbar>
    </AppBar>
      );
}
export default header;