
<Button icon={<Add />} label="more" onClick={onOpen} />
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
                    <p>{props.description}</p>
                </Box>
            </Box>
        </Layer>
    )
}

key = { axe.industryIdentifiers[0].identifier }
title = { axe.title }
author = { axe.authors === undefined ? "" : `${axe.authors[0]}` }
description = { axe.description }
img = { axe.imageLinks === undefined ? "" : `${axe.imageLinks.thumbnail}` }
link = { axe.previewLink }