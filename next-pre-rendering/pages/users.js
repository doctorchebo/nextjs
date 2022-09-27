import React from 'react'
import User from '../components/user';

const UsersList = ({users}) => {
    console.log(users);
  return (
    <>
        <h1>Users List</h1>
        {users.map(user => {
            return (
                <div key={user.id}>
                    <User user={user}/>
                    <hr/>
                </div>
            )
        })}
    </>
  )
}

export default UsersList

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
      props: {
        users: data,
      },
    };
  };
  