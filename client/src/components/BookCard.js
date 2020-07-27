import React, { useState } from 'react';
import { Box, Image, Anchor, Button, Grommet, Text, Layer } from 'grommet';
import { Close } from 'grommet-icons';
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

export const BookCard = (props) => {

    const [open, setOpen] = useState(false);


    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(undefined);

    return (
        <Grommet theme={thema}>
            <Box height="380px" width="350px" pad="medium" border>

                <Image
                    fit="contain"
                    fill
                    src={props.img}
                />
                <br></br>
                <Text>{props.title}</Text>
                <em>{props.author}</em>
                <Anchor href={props.link} label="Link" target="_blank" />
                <br></br>
                <Box direction="row" align="center" justify="center" gap="xsmall">
                    <Button size="small" color="light-2" label="info" onClick={onOpen} />
                    {
                        open && (
                            <Layer
                                position="right"
                                full="vertical"
                                modal
                                onClickOutside={onClose}
                                onEsc={onClose}
                            >
                                <Box
                                    as="form"
                                    fill="vertical"
                                    overflow="auto"
                                    width="medium"
                                    pad="medium"
                                    onSubmit={onClose}
                                >
                                    <Box flex={false} direction="row" justify="between">
                                        <Button icon={<Close />} onClick={onClose} />
                                    </Box>

                                    <Box flex="grow" overflow="auto" pad={{ vertical: 'medium' }}>
                                        <h3>_synopsis</h3>
                                        <p>{props.description}</p>
                                    </Box>
                                </Box>
                            </Layer>
                        )
                    }
                    {props.children}
                </Box>
            </Box>

        </Grommet>
    )

}

