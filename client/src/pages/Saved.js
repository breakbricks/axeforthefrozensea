import React, { Fragment, useState } from 'react';
import { Grommet, Box, Grid, defaultProps } from 'grommet';
import { BookCard } from '../components/BookCard'

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
export const Saved = (props) => {

    const [saved, setSaved] = useState();

    //


    return (
        <Grommet full theme={thema}>
            <Grid
                rows={['xsmall', 'large']}
                areas={
                    [
                        ['header', 'header'],
                        ['main', 'main']
                    ]}>

                <Box margin="small" gridArea="header" align="center" justify="center">
                    <p>[ saved books ]</p>
                </Box >

                <Box gridArea="main">
                    <Box pad="large">
                        <Grid gap="xxsmall" rows="medium" columns={{ count: 'fit', size: 'small' }}>
                            <BookCard>
                                {props.children}
                            </BookCard>
                        </Grid>
                    </Box>
                </Box>

            </Grid >
        </Grommet >

    );
}


