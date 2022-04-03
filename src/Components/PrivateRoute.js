import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { productContext } from '../App';

const PrivateRoute = ({children, ...rest}) => {
    // const {loggedInUser, setLoggedInUser}=useContext(productContext);

    return (
        <Route
        // {...rest}
        // render={({ location }) =>
        //   loggedInUser.email ? (
        //     children
        //   ) : (
        //     <Navigate
        //       to={{
        //         pathname: "/signin",
        //         state: { from: location }
        //       }}
        //     />
        //   )
        // }
      />
    );
};

export default PrivateRoute;