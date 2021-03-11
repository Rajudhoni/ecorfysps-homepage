import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import clsx from  'clsx';
import Button from "@material-ui/core/Button";
import introimg from '../images/headerimg.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from "@material-ui/core/styles";



const useStyles = makeStyles((theme)=>({
    margin: {margin: theme.spacing(3)},
    root: {
        flexGrow: 1,
        display: "block",
        paddingTop: "40px",
        alignSelf: "center",
        order: 0,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1150px",
        [theme.breakpoints.down("md")]:{
            paddingTop: "30px",
            maxWidth: "940px",
            marginLeft: "auto",
            marginRight: "auto", 
          },

    },
    ldnH1: {
        maxWidth: "630px",
        marginTop: 0,
        marginRight:0,
        marginLeft: 0,
        marginBottom: "15px",
        fontFamily: 'Ramabhadra, sans-serif',
        color: "#0a1f44",
        fontSize:"57px",
        lineHeight: "58px",
        [theme.breakpoints.down("md")]:{
            fontSize: "30px",
            lineHeight: "44px"
        },
        fontWeight: "bold",
        letterSpacing: "-.3px"
    },
    lndParagraph: {
        fontFamily: 'sans-serif',
        marginTop: 0,
        maxWidth: "600px",
        marginBottom: "18px",
        color: "#0a1f44",
        fontSize: "17px",
        lineHeight: "25px",
        display: "block",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
    }, 
    stars:{
        
     
       width: '100%',
       display: "flex",
       WebkitBoxPack: "justify",
       justifyContent: "space-between"

    },
    star: {
        width: "15px",
        marginRight: "6px",
    },
    starstext:{
        ...theme.typography.body,
         fontStyle: "italic",
         textAlign: "left",
         [theme.breakpoints.down("sm")]:{
            textAlign: 'center'
        },
         color: theme.palette.common.arcOrange,

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
    gridMargin: {
        
        marginBottom: "38px",
        [theme.breakpoints.down("sm")]:{
            textAlign: 'center'
        }
    },

    lndButtonWrap: {
        display: "flex",
        marginTop: "5px",
        paddingRight: "0px",
        paddingBottom: "20px", 
        paddingLeft: "0px",
        WebkitBoxPack: "center",
        justifyContent: "center",
        WebkitBoxAlign: "center",
        alignItems: "center",
        alignSelf: "auto",
        borderRadius: "10px",
        backgroundColor: "transparent"
    }, 
    lndButton: {
        ...theme.typography.estimate,
    borderRadius: "50px",
    marginRight: 0,
    marginLeft: 0,
    [theme.breakpoints.down("xs")]:{
        marginLeft: "10px",
    },
    [theme.breakpoints.down("md")]:{
        marginLeft: "30px",
    },

    minHeight: "45px",
    minWidth: "140px",
    marginTop: 0,
    paddingTop: "16px",
    paddingRight: "30px",
    paddingBottom: "16px",
    paddingLeft: "30px",
    flexDirection: "row",
    justifyContent:"center",
    alignItems: 'center',
    alignSelf: "center",

    lineHeight: "17px",
    [theme.breakpoints.down("md")]: {
        lineHeight:  "10px"
      },
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "upppercase",
    cursor: "pointer",
    boxShadow: 'none',

    transition: "all 350ms ease",
    }, 
    noCard: {
       
        marginTop: "5px",
        color: "#99a2b3",
        textAlign:"center",
        fontSize: "18px",
        lineHeight: "20px",
        
    },
    lndButtonExplore: {
        // display: "block",
        minHeight: "45px",
        minWidth: "10px",
        marginRight: "10px",
        marginLeft: 0,
        [theme.breakpoints.down("md")]: {
            marginLeft: "90px"
          },
        paddingTop: "16px",
        paddingRight: "30px",
        paddingBottom: "16px",
        paddingLeft: "30px",
        WebkitBoxPack: "center",
        justifyContent: "center",
        WebkitBoxAlign: "center",
        alignItems: "center",
        alignSelf: "flext-start",
        border: "1.5px dashed #e0e4df",
        borderRadius: "50px",
        backgroundColor: "transparent",
        boxShadow: "none",
        transition: "all 350ms ease",
        color: "rgba(10,31,68,.53)",
        fontSize: "12px",
        lineHeight: "17px",
        [theme.breakpoints.down("md")]: {
            lineHeight:  "10px"
          },
        fontWeight: 600,
        textAlign: "center",
        letterSpacing: "1px",
        textDecoration: "none",
        textTransform: 'uppercase',

    }, 
    btnexplr : {
        display: "flex",
        marginTop: "5px",
        paddingRight: "40px",
        paddingBottom: "20px", 
        paddingLeft: "0px",
        WebkitBoxPack: "center",
        justifyContent: "center",
        WebkitBoxAlign: "center",
        alignItems: "center",
        alignSelf: "auto",
        borderRadius: "10px",
        backgroundColor: "transparent"

    },
    imgheader: {
        marginTop: '10px',
        maxWidth: "100%",
        border: 0,
        verticalAlign: "middle",
        display: "inline-block",
    }, 
    cimage: {
        width: "200px",
        border: 0,
        verticalAlign: 'middle',
        maxWidth: "100%",
        display: "inline-block"
    }, 
    logowrap: {
        position: 'relative',
        display: "flex",
        height: "100%",
        maxWidth: "800px",
        marginTop: "40px",
        [theme.breakpoints.down("md")]:{
            
        },
        marginRight: "auto",
        marginLeft: "auto",
        WebkitBoxPack: "justify",
        justifyContent: "space-between",
        flexWrap: "wrap",
        WebkitBoxAlign: "center",
        alignItems: "center",
    },
    clogo: {
        display: "inline-block",
        width: "25%",
        paddingTop: "25px",
        paddingRight: "35px",
        paddingBottom: "25px",
        paddingLeft: "35px",

    }, 
    scndsection:{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        // maxWidth: "940px",
    },
    headingsectwo: {
        fontFamily: 'Ramabhadra, sans-serif',
        marginTop: "24px",
        marginBottom: "16px",
        fontSize: "48px",
        [theme.breakpoints.down("md")]: {
            fontSize: "38px"
           },
        [theme.breakpoints.down("sm")]: {
           fontSize: "24px"
          },
        lineHeight: 1.2,
        fontWeight: 700,
    },
    orangeText: {
        color: theme.palette.primary,
    }, 
    
    embedvideo: {
        width: "100%", 
        
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        backgroundImage: `url("https://d3e54v103j8qbb.cloudfront.net/static/youtube-placeholder.2b05e7d68d.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
        backgroundPositionX: "50%",
        backgroundPositionY: "50%",

    },
    sectionthree: {
        paddingTop: "90px",
        paddingBottom: "90px",
        backgroundColor: "#fff",
    },
    secthreeimage: {
        maxWidth: "100%",
        verticalAlign: "middle",
        display: "inline-block"
    },
    secthreegridtwo: {
        paddingTop: 0,
        paddingLeft: "35px",
    }, 
    mainh2: {
        fontFamily: 'Ramabhadra, sans-serif',
        fontSize: "36px",
        lineHeight: 1.2,
        fontWeight: 700, 
        color: theme.palette.common.arcBlue,
        marginTop: "10px",
        marginBottom: "16px",
        display: "block",
        
    }, 
    textspan3: {
        color: theme.palette.common.arcOrange,
       
    }, 
    mainreplaces: {
        ...theme.typography.body,
        minHeight: "10px",
        color: "#0a1f44",
        lineHeight: "10px",
        
    }, 
    alternatecomp: {
        maxWidth: "100%"
    },
    mainreplacelogo:{
        maxHeight: "25px",
        maxWidth: "100px",
        marginRight: "15px",
        paddingTop: "0",
        ...theme.img,
    }, 
    featurecolumn: {
        width: "85%",
        height: "100%",
        
       
        
    }, 
    ch4: {
        ...theme.typography.body,
        marginTop: "5px",
        marginBottom: '10px',
        fontSize: "18px",
        lineHeight: "25px",
        fontWeight: 700
    },
    cparagraph:{
        ...theme.typography.body,
         display: "block",
        maxWidth: "380px",
        marginRight: "auto",
        marginBottom: "15px",
        [theme.breakpoints.down("md")]:{
            marginRight: 0,
            marginLeft: 0,
        },
        marginLeft: "auto",
        color: "#0a1f44",
        lineHeight: "28px",
        textAlign: "left",
        fontSize: "19px",
        marginTop: 0,
    }, 
    lndimg: {
        ...theme.img,
        display: "block",
        width: "auto",
        maxHeight: "400px",
        maxWidth: "100%"
    }, 

    sec4blockcontent: {
        width: "50%",
        minHeight: "200px",
        paddingLeft: "15px",
    }, 

    sec4mainh2: {
       fontSize: "36px",
       color: '#0a1f44',
       marginTop: "24px",
       marginBottom: "16px",
       lineHeight: "1.2",
       fontWeight: 700
    },
    readmorelink:{
        marginRight: 0,
        marginLeft: 0,
        textDecoration: "none",
        display: "inline-block"

    },
    linktext: {
      
        color: "#4e5d78",
        fontSize: "16px",
        fontWeight: "500",
        textAlign: "center",
    },
    linkarrow: {
        width: "15px",
        maxWidth: "100%",
        verticalAlign: "middle",
       
    },
    sec5check: {
        position: 'static',
        right: "111px",
        display: "flex",
        overflow: "visible",
        marginBottom: "12px",
        WebkitBoxOrient: "horizontal",
        WebKitBoxDirection: "normal",
        flexDirection:"row",
        webkitBoxPack: "start",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        WebkitBoxAlign: "center",
        alignItems: "center",
        alignContent: "flex-start",
        gridAutoColumns: "1fr",
        gridTemplateColumns: "auto auto",
        textAlign: "justify",
        objectFit: "fill",
        objectPosition: "50% 50%",

        
    },
    checkIcon: {
        ...theme.img,
        width: "20px",
        marginRight: "12px",
    },
    checkText: {
        overflow: "visible",
        maxWidth: "560px",
        marginBottom: 0,
        // marginLeft: "1px",
        webkitBoxFlex: 1,
        flex: 1,
        color: "#4e5d78",
        lineHeight: "25px",
        fontWeight: 500,
        textAlign: "left",
        objectFit: "fill",
        fontSize: "18px",
        marginTop: 0
    },
    appbtnBlock: {
        maxWidth: '100%',
        display: "inline-block",
        color: "#000",
        textDecoration: "underline",
       

    },
    playstore: {
        ...theme.img,
        borderRadius: "8px",
    },


    asideMain: {
        position: 'relative',
        display: "flex",
        height: "400px",
        marginRight: "auto",
        marginLeft:"auto",
        paddingRight: "5%",
        paddingLeft: "5%",
        WebkitBoxPack: "center",
        justifyContent: "center",
        WebkitBoxAlign: "center",
        alignItems: "center",
        borderTop:  "1px none #e7e7e7",
        borderBottom: "1px none #e7e7e7",
        backgroundColor: "rgba(0,0,0,.6)",
        backgroundImage: `linear-gradient(180deg,rgba(0,0,0,.6),rgba(0,0,0,.6)), url("https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f68d56dbee2b91f0cf850cc_5eb970f9a06b611c76bb4e43_Frame%2046457%20(1)%20(1).jpg")`,
        backgroundPosition: "0 0, 0 50%",
        opacity: 1,

    }, 

    warningBadge: {
        overflow: "visible",
        paddingRight: "10px",
        paddingLeft: "10px",
        borderRadius: "20px",
        backgroundColor: theme.palette.common.arcOrange,
        fontFamily: [
            'DM Sans',
            'sans-serif',
          ].join(','),
        color: "#fff",
        fontSize: "18px",
        fontWeight: "400",
        textDecoration: "none"
    },
    asideContainer: {
        display: "flex",
        height: "100%",
        maxWidth: "1200px",
        WebkitBoxOrient: "vertical",
        WebKitBoxDirection: "normal",
        flexDirection: "column",
        justifyContent: "center",
        WebkitBoxAlign: "center",
        alignItems: "center",
        webkitBoxFlex: 1,
        flex: 1
    }, 
    asideBlock: {
        display: "block",
        alignSelf: "center",
        webkitBoxOrdinalGroup: 1,
        order: 0,
        textAlign: "center",
    }, 
    asideh2: {
        ...theme.typography.h2,
        display: "flex",
        WebkitBoxPack: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        marginTop: 0,
        fontSize: "38px",
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: "16px",
    },
    asideparagraph: {
        color: "#fff",
        textAlign: "center",
        marginBottom: "16px",
        fontSize: "18px",
        lineHeight: 1.6,
        marginTop: 0
    },
    asideTextBlock: {
        marginTop: "10px",
        color: "#fff",
        textAlign: "center"
        
    },
    
    

    
    



}))
const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery('(min-width:375px)');
    
    return (
      <React.Fragment>
        <div className={classes.root}>
            <Container fixed>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                >
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Grid item container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start" 
                           
                            >
                            <Grid item xs={12}>
                                <h1 className={classes.ldnH1}>One online product platform to rule them all</h1>
                            </Grid>
                            <Grid item xs={12}>
                                    <p className={classes.lndParagraph}>Everything a successful digital business needs: online products, live sessions, marketing pipelines, private label mobile apps & more</p>
                            </Grid>
                        </Grid>
                        <Grid item container  className={classes.gridMargin}>
                            <Grid xs={12} sm={4} md={4} lg={4} xl={4}> 
                                <div className={clsx(classes.stars, classes.img)}>
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                </div>
                                <div className={classes.starstext}>
                                    "Super user friendly"
                                </div>
                            
                            </Grid>
                            <Grid xs={12} sm={4} md={4} lg={4} xl={4}> 
                            
                            <div className={clsx(classes.stars, classes.img)}>
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                </div>
                                <div className={classes.starstext}>
                                    "Modern Mobile App"
                                </div>
                            
                            </Grid>
                            <Grid xs={12} sm={4} md={4} lg={4} xl={4}> 
                            
                            <div className={clsx(classes.stars, classes.img)}>
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3e42189a82c_stars.svg" alt="" className={classes.star} />
                                </div>
                                <div className={classes.starstext}>
                                    "Ease to use"
                                </div>
                            
                            </Grid>
                        </Grid>
                        <Grid item container alignItems="center">
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                
                                  
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.lndButton}
                                    
                                    >
                                    START YOUR 7-day FREE&nbsp;TRIAL
                                    </Button>
                                    <div className={classes.noCard}>No credit card required</div>
                                
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <div className={classes.btnexplr}>
                              
                                  <a href="#" className={classes.lndButtonExplore}>BOOK A demo</a>
                                  </div>
                            </Grid>
                   
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Grid item container   direction="row"
                                            justify="center"
                                            alignItems="stretch">
                            <Grid item xs={12}>
                            <img src={introimg} className={classes.imgheader} />
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    
                    
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                        <Grid item container xs={12} className={classes.logowrap}>
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3} className={classes.clogo}>
                                <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f37d7754102a719bb31f6fe_500startups.jpg" width="200" sizes="(max-width: 479px) 45vw, (max-width: 767px) 130px, (max-width: 991px) 14vw, 130px"  className={classes.cimage}/>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}  className={classes.clogo}>
                           <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f37d78620d3a221df4dc713_Y_Combinator_logo_text_wordmark-p-500.png" width="200" sizes="(max-width: 479px) 45vw, (max-width: 767px) 130px, (max-width: 991px) 14vw, 130px"  className={classes.cimage}/>

                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}  className={classes.clogo}>
                        <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f37db727c03d786b96c3ea2_gitex_logo_png-p-500.png"  width="200" sizes="(max-width: 479px) 45vw, (max-width: 767px) 130px, (max-width: 991px) 14vw, 130px" className={classes.cimage}/>

                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}  className={classes.clogo}>
                        <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f37dbabc3b70c92b5c0ffcf_Web-Summit_Logo-Colour-p-1600.jpeg" width="200" sizes="(max-width: 479px) 45vw, (max-width: 767px) 130px, (max-width: 991px) 14vw, 130px" className={classes.cimage}/>

                        </Grid>
                        </Grid>

                    
                </Grid>
                    {/* Section 2 */}
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.scndsection}
                    >
                        <Grid item xs={12}>
                                <h2 className={classes.headingsectwo}>5 reasons why creators <span><strong style={{color: "#f48522"}}> are switching </strong></span>to ECorfy</h2>
                        </Grid>
                        <Grid item xs={12} style={{width:'100%',height:"300px"}} >
                        <iframe 
                        style={{height:"100%",width:"100%"}}
                         src="https://www.youtube.com/embed/nbRp-GcvWbQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen allow="autoplay; encrypted-media">
                        </iframe>
                        {/* <ReactPlayer
                            url='https://www.youtube.com/embed/nbRp-GcvWbQ'
                            // width="100%"
                            // height="500px"
                            style={{width:'0px'}}
                        /> */}
                        
                        </Grid>

                    {/* Section 2 */}


                </Grid>

                     {/* Section 3 */}
                <div className={classes.margin}></div>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={6}
                    className={classes.sectionthree}
                    >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f68b7cb1df9de1fa1500f25_5f3fd5dff97ee921f9ed990c_img_courses(2)%20(1).png" loading="lazy" alt="" className={classes.secthreeimage} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.secthreegridtwo}>
                            <Grid item xs={12}>
                        <h2 className={classes.mainh2}>Create <span className={classes.textspan3}>Stunning <br></br>  </span>Online Products</h2>
                        </Grid> 
                            <Grid item xs={12}>
                                <div className={classes.mainreplaces}>
                                    Replaces: <br></br> &zwj;
                                </div>
                            </Grid>
                            <Grid item xs={12} container   alignItems="center"  style={{marginBottom: "15px", display: "flex", }}>
                                <Grid item xs={4}>
                                    <a href="#" className={classes.alternatecomp}>
                                        <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f3bea7efda3cf13c2294155_Teachable-logo-green.png" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo}/>
                                    </a>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "left" }}>
                                <a href="#" className={classes.alternatecomp}>
                                    <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f3be9c87450d7433c943f8b_kajabi-logo-wide.png" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo}/>
                                </a>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "left"}}>
                                <a href="/comparison/better-thinkific-alternative" className={classes.alternatecomp}>
                                    <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f3c0318d4c09faf4bfbac6a_Logo_Grey_Small.png" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo} />
                                    </a>
                                </Grid>
                            
                            </Grid>
                            <Grid item container alignItems="flex-start" style={{marginBottom: "15px", height: "auto"}}>
                                <Grid item xs={12} className={classes.featurecolumn}>
                                    <h4 className={classes.ch4}>Products, daily challenges or even trainings<br/></h4>
                                    
                                </Grid>
                                <Grid item xs={12} className={classes.featurecolumn} >
                                <p className={classes.cparagraph}>Create various kinds of online products that match any type of online business</p>
                                </Grid>
                            </Grid>
                            <Grid item container alignItems="flex-start" style={{marginBottom: "15px", height: "auto"}}>
                                <Grid item xs={12} className={classes.featurecolumn}>
                                    <h4 className={classes.ch4}>Quizzes, tests and homework<br/></h4>
                                    
                                </Grid>
                                <Grid item xs={12} className={classes.featurecolumn} >
                                <p className={classes.cparagraph}>Check the progress of your students by running automated tests or check homework manually</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        

                    </Grid>
                  

                    {/* Section 3 */}
                   
                     {/* Section -4 */}
                    
                     <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        >
                            <Grid item item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <Grid
                                            item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center"
                                        style={{paddingTop: "40px"}}
                                        >
                                                            
                                        
                                            <h2 class={classes.sec4mainh2}>Beautiful and <span className={classes.textspan3}>Converting<br/>‍</span>Landing Pages<br/></h2>
                                            
                                            <Grid item xs={12}>
                                                <div className={classes.mainreplaces}>
                                                    Replaces: <br></br> &zwj;
                                                </div>
                                            </Grid>

                            <Grid item xs={12} container   alignItems="center"  style={{marginBottom: "15px", display: "flex", }}>
                                <Grid item xs={4} >
                                    <a href="#" className={classes.alternatecomp}>
                                        <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f3c06c06fb244ee8e45bbdf_webflow.svg" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo}/>
                                    </a>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "left" }}>
                                <a href="#" className={classes.alternatecomp}>
                                    <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f3c06d6ff3ba5bf60da119a_1200px-Wix.com_website_logo.svg.png" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo}/>
                                </a>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "left"}}>
                                <a href="/comparison/better-thinkific-alternative" className={classes.alternatecomp}>
                                    <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f3c0755bd17cecaa03262f0_instapage-logo-3.svg" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo} />
                                    </a>
                                </Grid>
                            
                            </Grid>
                            <Grid item xs={12}>
                                    <p className={classes.lndParagraph}>Even the best product needs an engaging storefront. Build your responsive, converting landing pages with just a few clicks.</p>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#" className={classes.readmorelink}>
                                    <div className={classes.linktext}>
                                        Read More &nbsp; <img src="https://image.flaticon.com/icons/png/512/25/25426.png" alt="" className={classes.linkarrow} />
                                    </div>
                                   
                                </a>
                            </Grid>
                            

                                                            
                            </Grid>
                        </Grid>

                            <Grid item item xs={12} sm={12} md={6} lg={6} xl={6} style={{padding: "10px"}}>
                                <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f68d862bee2b96b8cf8569e_5eb57d5f8e32f5d9c4da88f6_img_landing%20(1).png" alt="Landing page builder" title="Image of landing page builder" loading="lazy" className={classes.lndimg} />
                                
                            </Grid>
                    
                    
                    </Grid>

                     {/* Section -4 */}



                     {/* section -5 */}
                     <div className={classes.margin}></div>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={6}
                    className={classes.sectionthree}
                    >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f68d86031400479406f9f27_5f438dda1eaa0d1add983dec_img_firstmobilelms(2)%20(1).png" loading="lazy" alt="" className={classes.secthreeimage} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.secthreegridtwo}>
                            <Grid item xs={12}>
                        <h2 className={classes.mainh2}>Topnotch mobile App with  <br></br>  <span className={classes.textspan3}>Your Brand </span>  <span><br/></span></h2>
                        </Grid> 
                        <Grid item xs={12}>
                                    <p className={classes.lndParagraph}>A website is not enough anymore! Offer your workshops and courses on the go with an engaging mobile app for Android and iOS. Choose between Gurucan and your</p>
                        </Grid>
                           
                            <Grid item container alignItems="flex-start" style={{marginBottom: "35px", height: "auto"}}>
                                <Grid item xs={12}>
                                    <div className={classes.sec5check} >
                                        <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa30c0d89a76c_check-circle.svg" width="24" alt="checkicon" className={classes.checkIcon} />
                                        <p className={classes.checkText}>Offline learning mode</p>
                                    </div>
                                    <div className={classes.sec5check} >
                                        <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa30c0d89a76c_check-circle.svg" width="24" alt="checkicon" className={classes.checkIcon} />
                                        <p className={classes.checkText}>Your brand's icon on the main screen</p>
                                    </div>
                                    <div className={classes.sec5check} >
                                        <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa30c0d89a76c_check-circle.svg" width="24" alt="checkicon" className={classes.checkIcon} />
                                        <p className={classes.checkText}>40% CTR with Push Notifications</p>
                                    </div>
                                    <div className={classes.sec5check} >
                                        <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa30c0d89a76c_check-circle.svg" width="24" alt="checkicon" className={classes.checkIcon} />
                                        <p className={classes.checkText}>One-click in-app purchases</p>
                                    </div>
                                    
                                </Grid>
                                <Grid item xs={12}>
                                <a href="#" className={classes.readmorelink}>
                                    <div className={classes.linktext}>
                                        Read More &nbsp; <img src="https://image.flaticon.com/icons/png/512/25/25426.png" alt="" className={classes.linkarrow} />
                                    </div>
                                   
                                </a>
                            </Grid>
                                
                            </Grid>
                            <Grid item xs={12}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="flex-start"
                                        spacing={2}
                                        >
                                            <Grid item >
                                            <a href="#" target="_blank" className={classes.appbtnBlock}>
                                                <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5eb00b05b41a945616c43698_aeroland-button-google-play-dark.jpg" loading="lazy" alt="" className={classes.playstore} />

                                            </a>
                                            </Grid>
                                            <Grid item >
                                            <a href="#" target="_blank" className={classes.appbtnBlock}>
                                                <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5eb00b05b41a94becec4369a_aeroland-button-app-store-dark.jpg" loading="lazy" alt="" className={classes.playstore} />

                                            </a>
                                            </Grid>
                                    </Grid>
                            </Grid>
                          
                         
                        </Grid>
                        

                    </Grid>

                     {/* section -5 */}



                     {/* section -6 */}

{/*                      
                     <div className={classes.margin}></div> */}
                     <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        style={{marginBottom: "90px"}}
                        >
                            <Grid item item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <Grid
                                            item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center"
                                        style={{paddingTop: "40px"}}
                                        >

                                            <h2 class={classes.sec4mainh2}><span className={classes.textspan3}>Powerful</span> Pipelines, Automations<br/>and Broadcasts <span className={classes.warningBadge}>beta</span><br/></h2>
                                            
                                            <Grid item xs={12}>
                                                <div className={classes.mainreplaces}>
                                                    Replaces: <br></br> &zwj;
                                                </div>
                                            </Grid>

                            <Grid item container   alignItems="center"  style={{marginBottom: "15px", display: "flex", }}>
                                <Grid item xs={4}>
                                    <a href="#" className={classes.alternatecomp}>
                                        <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f3c4f47a894f665831122f4_clickfunnels-dark-logo.png" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo}/>
                                    </a>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "left" }}>
                                <a href="#" className={classes.alternatecomp}>
                                    <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f3c4f7e10578f538d1a0c10_mailchimp-logo-1.svg" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo}/>
                                </a>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "left"}}>
                                <a href="/comparison/better-thinkific-alternative" className={classes.alternatecomp}>
                                    <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f3c4ff58dd6050d6c3378e0_convertkit-wordmark-1.svg" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo} />
                                    </a>
                                </Grid>
                            
                            </Grid>
                            <Grid item xs={12}>
                                    <p className={classes.lndParagraph}>Put your online business on autopilot! Send email campaigns, push notifications based on dozens of filters and triggers or automate routine course management tasks</p>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#" className={classes.readmorelink}>
                                    <div className={classes.linktext}>
                                        Read More &nbsp; <img src="https://image.flaticon.com/icons/png/512/25/25426.png" alt="" className={classes.linkarrow} />
                                    </div>
                                   
                                </a>
                            </Grid>
                            

                                                            
                            </Grid>
                        </Grid>

                            <Grid item item xs={12} sm={12} md={6} lg={6} xl={6} style={{padding: "10px"}}>
                                <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f68d8605342047685ff6754_5f3fd6019630b66479a0fc1e_img_marketingautomation(2)%20(1).png" alt="Landing page builder" title="Image of landing page builder" loading="lazy" className={classes.lndimg} />
                                
                            </Grid>
                    
                    
                    </Grid>

                    


                     {/* section -6 */}
                     <div className={classes.margin}></div>
                     




                                          {/* section -7 */}

                     
                                          <div className={classes.margin}></div>
                     <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                       
                        >


                            <Grid item item xs={12} sm={12} md={6} lg={6} xl={6} style={{padding: "10px"}}>
                                <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f68d861f7294c173389b672_5ef9e706db6c6c776386c092_img_webinars%20(1).png" alt="Landing page builder" title="Image of landing page builder" loading="lazy" className={classes.lndimg} />
                                
                            </Grid>
                            <Grid item item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <Grid
                                            item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center"
                                        style={{paddingTop: "40px"}}
                                        >
                                                            
                                        

                                            <h2 class={classes.sec4mainh2}><span className={classes.textspan3}>Build-in </span>webinars with chats<br/></h2>
                                            
                                            <Grid item xs={12}>
                                                <div className={classes.mainreplaces}>
                                                Works with:<br></br> &zwj;
                                                </div>
                                            </Grid>

                            <Grid item container   alignItems="center"  style={{marginBottom: "15px", display: "flex", }}>
                                <Grid item xs={4}>
                                    <a href="#" className={classes.alternatecomp}>
                                        <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5ff6dcdabd24a30d6f058fa7_1A7A5379-AC05-4C12-819B-B2DA86F90651.png" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo}/>
                                    </a>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "left" }}>
                                <a href="#" className={classes.alternatecomp}>
                                    <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5ff6dccebac2d5ae78503822_814BE775-96A3-4A3A-B1CE-6CD79228BF75-p-500.png" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo}/>
                                </a>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "left"}}>
                                <a href="/comparison/better-thinkific-alternative" className={classes.alternatecomp}>
                                    <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f3c4ff58dd6050d6c3378e0_convertkit-wordmark-1.svg" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo} />
                                    </a>
                                </Grid>
                            
                            </Grid>
                            <Grid item xs={12}>
                                    <p className={classes.lndParagraph}>Run one-to-many webinars with presentation, screen sharing, engaging chats, and promo buttons. Analyze view stats and use them for marketing and sales improvements.</p>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#" className={classes.readmorelink}>
                                    <div className={classes.linktext}>
                                        Read More &nbsp; <img src="https://image.flaticon.com/icons/png/512/25/25426.png" alt="" className={classes.linkarrow} />
                                    </div>
                                   
                                </a>
                            </Grid>
                            

                                                            
                            </Grid>
                        </Grid>

                    
                    
                    </Grid>

                    


                     {/* section -7 */}
                   
                     

                     {/* section -8  */}
                                          
                                          <div className={classes.margin}></div>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={6}
                    className={classes.sectionthree}
                    >

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.secthreegridtwo}>
                            <Grid item xs={12}>

                        <h2 className={classes.mainh2}><span className={classes.textspan3}><strong>Fort Knox</strong></span> level protection <br/>of your content and data <span className={classes.warningBadge}>beta</span><br/></h2>
                        </Grid> 
                        <Grid item xs={12}>
                                    <p className={classes.lndParagraph}>A website is not enough anymore! Offer your workshops and courses on the go with an engaging mobile app for Android and iOS. Choose between Gurucan and your</p>
                        </Grid>
                           
                            <Grid item container alignItems="flex-start" style={{marginBottom: "35px", height: "auto"}}>
                                <Grid item xs={12}>
                                    <div className={classes.sec5check} >
                                        <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa30c0d89a76c_check-circle.svg" width="24" alt="checkicon" className={classes.checkIcon} />
                                        <p className={classes.checkText}>Offline learning mode</p>
                                    </div>
                                    <div className={classes.sec5check} >
                                        <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa30c0d89a76c_check-circle.svg" width="24" alt="checkicon" className={classes.checkIcon} />
                                        <p className={classes.checkText}>Your brand's icon on the main screen</p>
                                    </div>
                                    <div className={classes.sec5check} >
                                        <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa30c0d89a76c_check-circle.svg" width="24" alt="checkicon" className={classes.checkIcon} />
                                        <p className={classes.checkText}>40% CTR with Push Notifications</p>
                                    </div>
                                    <div className={classes.sec5check} >
                                        <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa30c0d89a76c_check-circle.svg" width="24" alt="checkicon" className={classes.checkIcon} />
                                        <p className={classes.checkText}>One-click in-app purchases</p>
                                    </div>
                                    
                                </Grid>
                                <Grid item xs={12}>
                                <a href="#" className={classes.readmorelink}>
                                    <div className={classes.linktext}>
                                        Read More &nbsp; <img src="https://image.flaticon.com/icons/png/512/25/25426.png" alt="" className={classes.linkarrow} />
                                    </div>
                                   
                                </a>
                            </Grid>
                                
                            </Grid>
                          
                          
                         
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f68d8621cbb04268dfda1a4_5f63290a14e9d5448a4ec67a_img_securevideo%20(1).png" loading="lazy" alt="" className={classes.secthreeimage} />
                        </Grid>
                        

                    </Grid>

                   



                     {/* section -8 */}



                     {/* Section - 9 */}

                     <div className={classes.margin}></div>
                     <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={3}
                        style={{marginBottom: "58px"}}
                        >

                            <Grid item item xs={12} sm={12} md={6} lg={6} xl={6} style={{padding: "10px"}}>
                                <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f68d860de36ebd6b2101d00_5f438db8331902a4595874d0_img_crm(2)%20(1).png" alt="Landing page builder" title="Image of landing page builder" loading="lazy" className={classes.lndimg} />
                                
                            </Grid>
                            <Grid item item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <Grid
                                            item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center"
                                        // style={{paddingTop: "40px"}}
                                        >
                                                            
                                        
                                            
                                            <h2 class={classes.sec4mainh2}><span className={classes.textspan3}>Insightful</span> and detailed<br/>Analytics &amp; CRM</h2>
                                            
                                            <Grid item xs={12}>
                                                <div className={classes.mainreplaces}>
                                                    Replaces: <br></br> &zwj;
                                                </div>
                                            </Grid>

                            <Grid item container   alignItems="center"  style={{marginBottom: "15px", display: "flex", }}>
                                <Grid item >
                                    <a href="#" className={classes.alternatecomp}>
                                        <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f3cd3ab49bf9b6bb4f20285_fJQPxaxKQHemF3r4OGfP-p-500.png" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo}/>
                                    </a>
                                </Grid>
                                <Grid item  style={{textAlign: "left" }}>
                                <a href="#" className={classes.alternatecomp}>
                                    <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f3cd380bb63d978ed43f42c_output-onlinepngtools-p-500.png" width="100" loading="lazy" alt="complogo" className={classes.mainreplacelogo}/>
                                </a>
                                </Grid>
                             
                            
                            </Grid>
                            <Grid item xs={12}>
                                    <p className={classes.lndParagraph}>Even the best product needs an engaging storefront. Build your responsive, converting landing pages with just a few clicks.</p>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#" className={classes.readmorelink}>
                                    <div className={classes.linktext}>
                                        Read More &nbsp; <img src="https://image.flaticon.com/icons/png/512/25/25426.png" alt="" className={classes.linkarrow} />
                                    </div>
                                   
                                </a>
                            </Grid>
                            

                                                            
                            </Grid>
                        </Grid>


                    
                    
                    </Grid>

                    

                     {/* Section - 9 */}
                     </Container>
        </div>


            <aside className={classes.asideMain}>
                    <div className={classes.asideContainer}>
                        <div className={classes.asideBlock}>
                        <h2 className={classes.asideh2}>Ready to start?</h2>
                        <p className={classes.asideparagraph}>Build your digital business today. Because you can!<br/></p>
                        </div>

                        <div className={classes.asidebtncontainer}>
                                                              
                                 <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.lndButton}
                                    >
                                    START YOUR 7-day FREE&nbsp;TRIAL
                                    </Button>
                            <div className={classes.asideTextBlock}>
                                    No credit card required.
                            </div>
                        </div>
                    </div>
        
            </aside>

            </React.Fragment>

    
    )
}

export default Home



