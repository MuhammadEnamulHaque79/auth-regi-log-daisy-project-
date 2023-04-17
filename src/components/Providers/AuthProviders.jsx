import React, { createContext, useState} from 'react';
import app from '../../Firebase/firebase.config';
import { getAuth } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const[user,setUser] = useState(null);

    // const user = {displayName:'Muhammad Enamul Haque'};
    const authInfo ={
        user,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;




























// import React, { createContext, useState } from 'react';
// import app from '../../Firebase/firebase.config';
// import { getAuth } from "firebase/auth";


// const auth = getAuth(app);
// export const AuthContext = createContext(null);

// const AuthProviders = ({children}) => {
//     const[user,setUser] = useState(null);
// // const user = {displayName:"Muhammad Enamul Haque"}
// const authInfo = {
//     user,
// }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProviders;