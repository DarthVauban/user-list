import React from 'react';
import {Skeleton} from "@mui/material";
import './SkeletonPost.css'

const SkeletonPost = (props) => {

    const {count} = props
    const postsArray = Array(count).fill(1)

    return postsArray.map((_, index) => {
        return (
            <div key={index} className="PostSkeleton">
                <Skeleton variant="text" sx={{ width: "99%", height: 30}} />
                <Skeleton variant="text" sx={{ width: "99%", height: 30}} />
            </div>
        )
    });
};

export default SkeletonPost;

