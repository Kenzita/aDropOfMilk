import React, { useState } from 'react';
import { UserContext } from '../../context/UserContext';

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
