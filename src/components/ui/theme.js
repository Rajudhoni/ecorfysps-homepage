import { createMuiTheme } from '@material-ui/core/styles';


const arcOrange = "#f48522"
const arcBlue = "#0b2146"
const white = "#fff"




const Theme = createMuiTheme({

  palette: {
    common:{
        arcBlue: `${arcBlue}`,
        arcOrange: `${arcOrange}`,
        white: `${white}`,
       
    },
    primary: {
       main: `${arcOrange}`
       
    },
    secondary: {
      main: `${arcBlue}`
    }
  },
  typography: {
    body: {
      fontFamily: "DM Sans, sans-serif",
      fontSize: "16px",
      lineHeight: "20px",
      color: `${arcBlue}`,
    },
      tab: {
        fontFamily: "DM Sans, sans-serif",
        textTransform: "none",
        fontWeight: "600",
        fontSize: "14px",
       
      },
      estimate: {
        fontFamily: "DM Sans, sans-serif",
        fontSize: "1rem",
        textTransform: "none",
        color: "white"
      }
  }
});

export default Theme;