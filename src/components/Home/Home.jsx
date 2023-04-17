import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';


const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    
    return (
        <div>
            <h1>This is home {user.displayName}</h1>
        </div>
    );
};

export default Home;