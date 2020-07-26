import React, { Fragment } from 'react';
import { Grommet, Box, Grid } from 'grommet';
import { Graphic } from "../components/Graphic";
import { Searchbar } from "../components/Searchbar";

const thema = {
    global: {
        colors: {
            brand: '#2d3e8b'
        },
        font: {
            family: 'Roboto Mono',
            size: '14px'
        },
    },
};


export const Search = () => {

    return (
        <Grommet full theme={thema}>
            <Grid
                rows={['xsmall', 'medium', 'small']}
                columns={['1/2', '1/2']}
                areas={
                    [
                        ['header', 'header'],
                        ['sidebar', 'main'],
                        ['footer', 'footer'],
                    ]}>

                <Box margin="small" gridArea="header" align="center" justify="center">
                    <p>[ find books | save books | buy books ]</p>

                </Box >

                <Box gridArea="sidebar" align="center" justify="center">
                    <Graphic></Graphic>
                </Box>

                <Box gridArea="main">
                    <Searchbar></Searchbar>
                </Box>

                <Box gridArea="footer" align="center" justify="center">
                    <q>a book must be the axe for the frozen sea inside us.</q>
                    <p> - franz kafka - </p>
                </Box >
            </Grid >
        </Grommet >

    );
}


