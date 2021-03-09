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
      fontFamily: [
        'DM Sans',
        'sans-serif',
      ].join(','),
      fontSize: "16px",
      lineHeight: "20px",
      color: `${arcBlue}`,
    },
    h2: {
      fontFamily: [
        'Ramabhadra',
        'sans-serif',
      ].join(','),
      marginTop: "24px",
      marginBottom: "16px",
      lineHeight: "1.2",
      fontWeight: 700,
    },
      tab: {
        fontFamily: [
          'DM Sans',
          'sans-serif',
        ].join(','),
        textTransform: "none",
        fontWeight: "600",
        fontSize: "14px",
       
      },
      estimate: {
        fontFamily: [
          'DM Sans',
          'sans-serif',
        ].join(','),
        fontSize: "1rem",
        textTransform: "none",
        color: "white"
      }
  }, 
  img: {
    maxWidth: "100%",
    verticalAlign: "middle",
    display: "inline-block",
    border: 0,
    borderTopColor: "initial",
    borderTopStyle: "initial",
    borderTopWidth: "0px",
    borderRightColor: "initial",
    borderRightStyle: "initial",
    borderRightWidth: "0px",
    borderBottomColor: "initial",
    borderBottomStyle: "initial",
    borderBottomWidth: "0px",
    borderLeftColor: "initial",
    borderLeftWidth: "0px",
    borderLeftStyle: "initial",

    borderImageSource: "initial",
    borderImageSlice: "initial",
    borderImageWidth: "initial",
    borderImageOutset: "initial",
    borderImageRepeat: "initial"

}, 
});

export default Theme;