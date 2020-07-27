import React, { useState } from 'react';
import { Box, Image, Anchor, Button, Grommet, Text, Layer } from 'grommet';


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

export const Savebtn = (props) => {
    return (
        <Grommet theme={thema}>
            <Button size="small" color="brand" label="save" onClick={props.onClick} />
        </Grommet>
    )
}

