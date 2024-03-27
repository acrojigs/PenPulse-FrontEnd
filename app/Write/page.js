'use client'
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Navbar from '@/Components/Navbar';
import { Container, TextField, Button, Grid } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const Page = () => {

    const [images, setImages] = useState([]);
    const [input, setInput] = useState({
        title: "",
        description: "",
    });
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleImageChange = (e) => {
        // Logic to handle image upload
        const files = Array.from(e.target.files);
        setImages(files);
    };

    const PublishBlog = () => {
        // send data to database through api 
        // come back to home page or profile page to see your publised blog
        console.log(input.title);
        console.log(input.description);
    }
    return (
        <>
            <Navbar />
            <Container>
                <form className='p-5 m-5'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Title"
                                name='title'
                                variant="outlined"
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                name='description'
                                label="Description"
                                variant="outlined"
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {/* <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                multiple
                            /> */}
                            <Button
                                onChange={handleImageChange}
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                onClick={PublishBlog}
                                variant="contained"
                                style={{
                                    backgroundColor: '#2196f3',
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                        color: '#2196f3'
                                    }
                                }}
                            >
                                Publish Blog
                            </Button>

                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    );
};

export default Page;










