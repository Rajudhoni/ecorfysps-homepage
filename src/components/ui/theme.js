import { createMuiTheme } from '@material-ui/core/styles';



const arcBlue = "#0b2146"
const arcOrange = "#f48522"
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
      tab: {
        fontFamily: "Raleway",
        textTransform: "none",
        fontWeight: "700",
        fontSize: "1rem",
      },
      estimate: {
        fontFamily: "Pacifico",
        fontSize: "1rem",
        textTransform: "none",
        color: "white"
      }
  }
});

export default Theme;