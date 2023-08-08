import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import {useEffect} from "react";

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

function UserItem(props) {
    const {id, name, city, email, zip, openModal} = props

    return (
        <>
            {
                name ? <Card sx={{width: 275, height: 185, margin: 1,}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                City: {city}
                            </Typography>
                            <Typography sx={{fontWeight: "bold", fontSize: 16}} component="div">
                                Name: {name}
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                {email}
                            </Typography>
                            <Typography variant="body2">
                                Zip code: {zip}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => openModal(id)}>User posts</Button>
                        </CardActions>
                    </Card>
                    : <Skeleton variant="rectangular" width={210} height={118}/>
            }
        </>
    );
}

export default UserItem