import React from 'react';
import Skeleton from "@mui/material/Skeleton";
import './UserItemSkeleton.css'

const UserItemSkeleton = (props) => {

    const {count} = props
    const loadUsers = Array(count).fill(1)
    return loadUsers.map((_, index) => {
        return (
            <div key={index} className="skeletonBox">
                <Skeleton variant="rounded" width={275} height={185} />
            </div>
        )
    });
};

export default UserItemSkeleton;