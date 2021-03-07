import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Button from "@material-ui/core/Button";
import introimg from '../images/headerimg.png';



const useStyles = makeStyles((theme)=>({
    margin: {margin: theme.spacing(2)},
    bodyContainer: {
        display: "block",
        paddingTop: "40px",
        alignSelf: "center",
        order: 0,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1120px",
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
        [theme.breakpoints.down("xs")]: {
            marginLeft: "10px"
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
        maxWidth: "940px",
    },
    headingsectwo: {
        fontFamily: 'Ramabhadra, sans-serif',
        marginTop: "24px",
        marginBottom: "16px",
        fontSize: "40px",
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
        
    }, 
    textspan3: {
        color: theme.palette.common.arcOrange
    }

    



}))
const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.bodyContainer}>
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
                            <Grid xs={4}> 
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
                            <Grid xs={4}> 
                            
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
                            <Grid xs={4}> 
                            
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
                        <Grid item container>
                        <Grid item xs={6}>
                                
                                  
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.lndButton}
                                    >
                                    START YOUR 7-day FREE&nbsp;TRIAL
                                    </Button>
                                    <div className={classes.noCard}>No credit card required</div>
                                
                            </Grid>
                            <Grid item xs={6}>
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
                        <Grid item xs={3} className={classes.clogo}>
                                <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f37d7754102a719bb31f6fe_500startups.jpg" width="200" sizes="(max-width: 479px) 45vw, (max-width: 767px) 130px, (max-width: 991px) 14vw, 130px"  className={classes.cimage}/>
                        </Grid>
                        <Grid item xs={3}  className={classes.clogo}>
                           <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f37d78620d3a221df4dc713_Y_Combinator_logo_text_wordmark-p-500.png" width="200" sizes="(max-width: 479px) 45vw, (max-width: 767px) 130px, (max-width: 991px) 14vw, 130px"  className={classes.cimage}/>

                        </Grid>
                        <Grid item xs={3}  className={classes.clogo}>
                        <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f37db727c03d786b96c3ea2_gitex_logo_png-p-500.png"  width="200" sizes="(max-width: 479px) 45vw, (max-width: 767px) 130px, (max-width: 991px) 14vw, 130px" className={classes.cimage}/>

                        </Grid>
                        <Grid item xs={3}  className={classes.clogo}>
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
                        <Grid item xs={12} fullWidth>
                        <div  className={classes.embedvideo}>
                        <iframe width="900" height="500" src="https://www.youtube.com/embed/nbRp-GcvWbQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen allow="autoplay; encrypted-media"></iframe>
                        </div>
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
                        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src="https://uploads-ssl.webflow.com/5ea9738f536b87619aaf9851/5f68b7cb1df9de1fa1500f25_5f3fd5dff97ee921f9ed990c_img_courses(2)%20(1).png" loading="lazy" alt="" className={classes.secthreeimage} />
                        </Grid>
                        <Grid item xs={6} className={classes.secthreegridtwo}>
                        <h2 className={classes.mainh2}>Create <span className={classes.textspan3}>Stunning <br></br>  </span>Online Products</h2>
                        </Grid>

                    </Grid>

                    {/* Section 3 */}

        </div>
    )
}

export default Home



