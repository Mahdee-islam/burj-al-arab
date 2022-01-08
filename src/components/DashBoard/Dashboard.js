import React from 'react';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div>
            <h4>Current user detail</h4>
            <h5>Name: { user.displayName } </h5>
            <img style={ {
                width: '200px',
                height: '150px'

            }} src = {user.photoURL } alt="" />
            <p>Email: { user.email } </p>
        </div>
    );
};

export default Dashboard;