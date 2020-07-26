import React, { useState } from 'react';
import {
    Box,
    Button,
    Grommet,
    Form,
    FormField,
    TextInput,
} from 'grommet';


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

export const Searchbar = () => {

    const [value, setValue] = useState({});

    return (
        <Grommet full theme={thema}>
            <Box pad="large" fill align="start" justify="center">
                <Box width="medium">
                    <Form
                        value={value}
                        onChange={nextValue => setValue(nextValue)}
                        onReset={() => setValue({})}
                        onSubmit={({ value }) => { }}
                    >
                        <FormField label="book title, author etc." name="search">
                            <TextInput name="search" />
                        </FormField>

                        <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                            <Button type="reset" label="clear" />
                            <Button type="submit" label="search" primary />
                        </Box>
                    </Form>
                </Box>
            </Box>
        </Grommet>

    );
}


