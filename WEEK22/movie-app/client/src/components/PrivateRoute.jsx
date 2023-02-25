const PrivateRoute = ({token, redirectPath = '/login' }) => {
    if (token && token.length != 0) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return <Outlet />;
};

export default PrivateRoute;