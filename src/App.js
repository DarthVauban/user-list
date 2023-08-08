import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "./store/Users/usersActionCreators";
import UserList from "./components/userList/UserList";
import PostsModal from "./components/PostItem/PostsModal";
import {loadPosts} from "./store/Posts/postsActionCreator";
import "./App.css"
import UserItemSkeleton from "./components/UserItem/UserItemSkeleton";


function App() {

    const [open, setOpen] = React.useState(false);

    const {posts} = useSelector(state => state.posts)
    const {users, isLoading} = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUsers())
    }, [])


    const handleClickOpen = (id) => {
        dispatch(loadPosts(id))
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() =>{
        console.log(isLoading)
    }, [isLoading])
    return (
        <div className="app">
            {!isLoading ? <UserList
                users={users}
                openPosts={handleClickOpen}
            />
            : <div className="skeletonContainer">
                <UserItemSkeleton
                    count={10}
                />
            </div>}
            <PostsModal
                open={open}
                closePosts={handleClose}
                posts={posts}
            />

        </div>
    );
}

export default App;
