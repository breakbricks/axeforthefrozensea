import React, { Fragment, useState, useEffect } from 'react';
import { Grommet, Box, Grid, Button, Form, FormField, TextInput, defaultProps } from 'grommet';
import { Graphic } from "../components/Graphic";
import { BookCard } from "../components/BookCard";
//import { Searchbar } from "../components/Searchbar";
import API from "../utils/API";

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

    const [search, setSearch] = useState()
    const [results, setResults] = useState([])

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(search)
        API.searchAxe(search)
            .then((res) => {
                // returns array of objects
                // console.log(res.data.items)
                const allRes = res.data.items;
                const resArray = [];
                //access volumeInfo prop of each obj and store
                allRes.map((e) => {
                    resArray.push(e.volumeInfo);
                })
                setResults(resArray);
            })
            .catch(err => console.log(err));
    }

    console.log(results);

    return (
        <Grommet full theme={thema}>
            <Grid
                rows={['xsmall', 'medium', 'medium']}
                columns={['1/2', '1/2']}
                areas={
                    [
                        ['header', 'header'],
                        ['sidebar', 'main'],
                        ['footer', 'footer'],
                    ]}>

                <Box margin="small" gridArea="header" align="center" justify="center">
                    <em>"a book must be the axe for the frozen sea inside us."</em>
                    <p> - franz kafka - </p>

                </Box >

                <Box gridArea="sidebar" align="center" justify="center">
                    <Graphic></Graphic>
                </Box>

                <Box gridArea="main">
                    <Box pad="large" fill align="start" justify="center">
                        <Box width="medium">
                            <Form
                                onReset={() => setSearch({})}
                                onSubmit={handleSearch}
                            >
                                <FormField label="book title, author etc." name="search">
                                    <TextInput name="search"
                                        value={search}
                                        onChange={(event) => setSearch(event.target.value)} />
                                </FormField>

                                <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                                    <Button type="reset" label="clear" />
                                    <Button type="submit" label="search" primary />
                                </Box>
                            </Form>
                        </Box>
                    </Box>
                </Box>

                <Box gridArea="footer">
                    <Box pad="large">
                        <Grid gap="xxsmall" rows="medium" columns={{ count: 'fit', size: 'small' }}>
                            {results.map((axe) => (
                                <BookCard
                                    key={axe.industryIdentifiers[0].identifier}
                                    title={axe.title}
                                    author={axe.authors[0]}
                                    description={axe.description}
                                    img={axe.imageLinks.thumbnail}
                                    link={axe.previewLink}
                                    action='save'
                                />
                            ))}
                        </Grid>
                    </Box>
                </Box >
            </Grid >
        </Grommet >

    );
}


