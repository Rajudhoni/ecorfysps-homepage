import React from 'react';
import {makeStyles} from '@material-ui/core/styles';


const styles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary
    }
}))

const Footer = () => {
    return (
        <div>
            <h1>footer</h1>
        </div>
    )
}

export default Footer
