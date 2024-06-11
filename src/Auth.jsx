import { useAuth0 } from '@auth0/auth0-react';

const Auth = () => {

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const myLogin = () => {
        loginWithRedirect();
    }

    const myLogout = () => {
        logout();
    }

    return (
        <div className="container my-2">
            {isAuthenticated ?
                <button className="btn btn-danger" onClick={myLogout}>ログアウト</button>
            :
                <button className="btn btn-primary" onClick={myLogin}>ログイン</button>
            }
        </div>
    );
}

export default Auth;