import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';



const useStyles = makeStyles((theme)=>({
    bodyContainer: {
        display: "block",
        paddingTop: "10px",
        alignSelf: "center",
        order: 0,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1120px"
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
        
        display: "block",
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
        borderLeftWidth: "0px",
        borderImageSource: "initial",
        borderImageSlice: "initial",
        borderImageWidth: "initial",
        borderImageOutset: "initial",
        borderImageRepeat: "initial"

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
    gridMargin: {
        marginBottom: "38px",
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
                    <Grid item xs={6}>
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
                            <div className={classes.lndButtonWrap}>
                                <div>
                                    <a href="#" className={clsx(classes.lndButton, classes.wButton)}>START YOUR 7-day FREE&nbsp;TRIAL</a>
                                    <div className={classes.noCard}>No credit required</div>
                                </div>
                                <a href="#" className={clsx(classes.lndButtonExplore, classes.wButton)}>BOOK A demo</a>

                            </div>
                        </Grid>
                    </Grid>

                    <Grid item xs={6}>
                        Grid2
                    </Grid>
                    
                    
                </Grid>
        </div>
    )
}

export default Home



