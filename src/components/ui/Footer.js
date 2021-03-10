import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';




const useStyles = makeStyles((theme) => ({
    footer: {
        minHeight: '400px',
        paddingTop: "100px",
        paddingRight: "5%",
        paddingBottom: "100px",
        paddingLeft: "5%",
        backgroundColor: "#fafbfc"
    },
    container: {
       marginRight: 'auto',
       marginLeft: 'auto',
    //    maxWidth: "1140px"
    },
    gridcontainer: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "35px",
      
    },
    footertitle: {
        display: "inline-block",
        marginBottom: "8px",
        paddingTop: "12px",
        paddingBottom: "12px",
        fontFamily: [
            'Ramabhadra',
            'sans-serif',
          ].join(','),
        color: theme.palette.common.arcBlue,
        fontSize: "15px",
        fontWeight: "600",
        lineHeight: "20px"
    },
    lndLink: {
        marginBottom: '5px',
        marginLeft: "1px",
        paddingTop: "6px",
        paddingBottom: "6px",
        transition: "all 250ms ease",
        color: "#8a94a6",
        fontSize: "15px",
        fontWeight: 500,
        textDecoration: "none",
        lineHeight: "20px",
        fontFamily: [
            'DM Sans',
            'sans-serif',
          ].join(','),
    },
    griditemargin: {
        marginBottom: "10px"
    },
    linkphone: {
        color: "#000",
        fontWeight: 700,
    },
    socialWraps: {
        display: "flex",
        maringTop: "10px",
        marginBottom: "10px",
    },
    socialwrap: {
        position: "relative",
        display: "flex",
        width: "35px",
        height: "35px",
        marginRight: 0,
        marginLeft: "15px",
        padding: "9px",
        justifyContent: "center",
        WebkitBoxAlign: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor: "#fff",
    },
    socialIcon: {
        ...theme.img, 
    },
    sociallinkblock: {
        position: "aboslute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        maxWidth: "100%",
        display: "inline-block",
        textDecoration: 'underline',
        color: "#000"

    },
    midimg: {
        ...theme.img
    }

}))

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container fixed  classes={{root: classes.container}}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="flex-start"
                            classes={classes.gridcontainer}
                            >
                                <Grid item container direction="row"
                                        justify="space-around"
                                        alignItems="flex-start">
                                <Grid item xs={2}>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    >
                                        <Grid item >
                                            <div className={classes.footertitle}>
                                            <strong>Features</strong>
                                            </div>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Courses builder</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Converting landing page</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Mobile App&nbsp;</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}> 
                                        <a href="#" className={classes.lndLink}>Marketing automation</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Analytics &amp; CRM</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}> 
                                        <a href="#" className={classes.lndLink}>Webinars</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Memberships</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Integrations</a>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                                <Grid item xs={2}>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    >
                                        <Grid item >
                                            <div className={classes.footertitle}>
                                            <strong>Solutions</strong>
                                            </div>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>From offline to online “Go Digital”</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>All-in-one for knowledge-commerce</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Mobile LMS Solution</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}> 
                                        <a href="#" className={classes.lndLink}>Fitness Studios</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Yoga Studios</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}> 
                                        <a href="#" className={classes.lndLink}>🔥 White label educational Apps</a>
                                        </Grid>
                                      
                                        
                                    </Grid>

                                </Grid>
                                <Grid item xs={2}>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    >
                                        <Grid item >
                                            <div className={classes.footertitle}>
                                            <strong>Comparisons</strong>
                                            </div>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Feature comparison</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>All comparisons</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>ECorfy vs Teachable</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}> 
                                        <a href="#" className={classes.lndLink}>ECorfy vs Podia</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>ECorfy vs Kajabi</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}> 
                                        <a href="#" className={classes.lndLink}>ECorfy vs LearnWorlds</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>ECorfy vs Mighty Networks</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>ECorfy vs Mastermind</a>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                                <Grid item xs={2}>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    >
                                        <Grid item >
                                            <div className={classes.footertitle}>
                                            <strong>Resources</strong>
                                            </div>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Blog</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Demo Tours</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Feature roadmap</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}> 
                                        <a href="#" className={classes.lndLink}>Help Center</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Pricing</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}> 
                                        <a href="#" className={classes.lndLink}>Affiliate program</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>API documentation</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Calculate App development price</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Certificate builder</a>
                                        </Grid>
                                        
                                    </Grid>

                                </Grid>
                                <Grid item xs={2}>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    >
                                        <Grid item >
                                            <div className={classes.footertitle}>
                                            <strong>Company</strong>
                                            </div>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>About Ecorfy</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Contact</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>GDPR&nbsp;</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}> 
                                        <a href="#" className={classes.lndLink}>Terms of Use</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Policies</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}> 
                                        <a href="#" className={classes.lndLink}>Status Page</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Feature request</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="#" className={classes.lndLink}>Integrations</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                        <a href="tel:+917075022389" className={clsx(classes.lndLink, classes.linkphone)}>Call us: <br></br> +91-7075022389</a>
                                        </Grid>
                                        <Grid item className={classes.griditemargin}>
                                                <div className={classes.socialWraps}>
                                                    <div className={classes.socialwrap}>
                                                     <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3eace89aa0e_forest_facebook.svg" alt="fbicon" className={classes.socialIcon} /> 
                                                     <a href="https://www.facebook.com/ecorfy/" target="_blank" className={classes.sociallinkblock}></a>
                                                    </div>
                                                    <div className={classes.socialwrap}>
                                                     <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa3be8989aa0d_forest_twitter.svg" alt="twittericon" className={classes.socialIcon} /> 
                                                     <a href="https://www.facebook.com/ecorfy/" target="_blank" className={classes.sociallinkblock}></a>
                                                    </div>
                                                    <div className={classes.socialwrap}>
                                                     <img src="https://uploads-ssl.webflow.com/5eafe01d00e6c62ec4f77d51/5eafe01d455aa348d189a92b_instagram.svg" alt="instaicon" className={classes.socialIcon} /> 
                                                     <a href="https://www.facebook.com/ecorfy/" target="_blank" className={classes.sociallinkblock}></a>
                                                    </div>
                                                </div>
                                        </Grid>
                                        
                                    </Grid>

                                </Grid>
                                

                            </Grid>

                            {/* grid 2 */}
                            <Grid item container direction="row"
                                        justify="space-around"
                                        alignItems="flex-start">
                                            <Grid item xs={2}>
                                                    <div style={{height: "150px", width: "150px"}} >
                                                    <img src="https://www.softwareworld.co/wp-content/uploads/2019/03/LMS-Software.png" className={classes.midimg} />
                                                    </div>
                                            </Grid>
                                            <Grid item xs={2}>
                                                   
                                            </Grid>
                                            <Grid item xs={2}>
                                                   
                                            </Grid>
                                            <Grid item xs={2}>
                                                  
                                            </Grid>
                                            <Grid item xs={2}>
                                                   
                                            </Grid>


                            </Grid>

                            {/* gird 2 */}
                                
                            </Grid>
            </Container>
        </footer>
    )
}

export default Footer
