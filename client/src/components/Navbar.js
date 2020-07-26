import React from "react";
import {
    Anchor,
    Box,
    Grommet,
    Header,
    Nav,
    Menu,
    ResponsiveContext,
} from 'grommet';

const thema = {
    global: {
        colors: {
            brand: '#7fbbca'
        },
        font: {
            family: 'Roboto Mono',
            size: '24px'
        },
    },
};

export const Navbar = () => {

    return (
        <Grommet theme={thema}>
            <Header pad="medium">
                <Box margin="medium" direction="row" align="center" gap="small">
                    axe for the frozen sea. </Box>
                <ResponsiveContext.Consumer>
                    {responsive =>
                        responsive === 'small' ? (
                            <Menu
                                items={[
                                    { label: 'search', onClick: () => { } },
                                    { label: 'saved', onClick: () => { } },
                                ]}
                            />
                        ) : (
                                <Nav direction="row">
                                    <Anchor href="/" label="_search" />
                                    <br></br>
                                    <Anchor href="/saved" label="saved" />
                                </Nav>
                            )
                    }
                </ResponsiveContext.Consumer>
            </Header>
        </Grommet>
    )
}

