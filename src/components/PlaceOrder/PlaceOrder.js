import React from 'react';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { user } = useAuth();
    return (
        <div>
          Hello, <b>{user.displayName}</b>, this is place order page.
        </div>
    );
};

export default PlaceOrder;