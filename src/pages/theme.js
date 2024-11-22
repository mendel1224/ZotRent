import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      background: {
        default: '#ffffff',
      },
      text: {
        primary: '#000000',
      },
      primary: {
        main: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h6: {
        fontWeight: 700,
        color: '#000000',
        fontSize: '1.5rem', 
      },
      button: {
        textTransform: 'none',
        color: '#000000',
        fontSize: '0.95rem', 
      },
    },
  });

  export default theme;