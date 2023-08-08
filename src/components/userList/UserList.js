import React, {useEffect} from 'react';
import UserItem from "../UserItem/UserItem";
import "./UserList.css"

function UserList(props) {
    const {users, openPosts} = props

    const openModal = (id) => {
        openPosts(id)
    }

    return (
        <div className="container">
            {users.map((user) =>
                <UserItem
                    id={user.id}
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    city={user.address.city}
                    zip={user.address.zipcode}
                    openModal={openModal}
                />
            )}
        </div>
    );
}

export default UserList;