import React, { useState } from 'react';
import { Box, Image, Anchor, Button, Grommet, Text } from 'grommet';

const thema = {
    global: {
        colors: {
            brand: '#2d3e8b'
        },
        font: {
            family: 'Roboto Mono',
            size: '18px'
        },
    },
};

export const SavedBook = (props) => {

    return (
        <Grommet theme={thema}>


            <Box height="300px" width="200px" pad="medium" border>

                <Image
                    fit="contain"
                    fill
                    src="https://images-na.ssl-images-amazon.com/images/I/41JhdiZMIJL._SX338_BO1,204,203,200_.jpg"
                />
                <br></br>
                <Text>Middlemarch</Text>
                <Text>George Eliot</Text>
                <Anchor href="" label="Link" />
                <br></br>
                <Button label="delete" onClick={() => { }} />
            </Box>

        </Grommet>
    )

}

