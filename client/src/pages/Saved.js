import React, { Fragment, useState, useEffect } from 'react';
import { Grommet, Box, Grid, Layer, Text, Button } from 'grommet';
import { BookCard } from '../components/BookCard';
import { Deletebtn } from '../components/Buttons';
import API from '../utils/API';

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

    const [saved, setSaved] = useState([]);

    useEffect(() => {
        API.getSaved()
            .then((res) => {
                setSaved(res.data);
            });
    }, [])

    console.log(saved);

    const removeAxe = (id) => {
        API.deleteAxe(id)
            .then((res) => {
                console.log(res.data)
                console.log("deleted")
            })
            .catch(err => console.log(err));
        window.location.reload();
    }

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

                            {saved.map((axe) => (
                                <BookCard
                                    key={axe.isbn}
                                    title={axe.title}
                                    author={axe.authors}
                                    description={axe.description}
                                    img={axe.image ? axe.image : ""}
                                    link={axe.link}
                                >
                                    <Deletebtn onClick={() =>
                                        removeAxe(axe._id)
                                    } />
                                </BookCard>
                            ))}
                        </Grid>
                    </Box>
                </Box>



            </Grid >
        </Grommet >

    );
}


