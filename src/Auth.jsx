const Auth = () => {

    const login = () => {

    }

    const logout = () => {

    }

    return (
        <div className="container my-2">
            <button className="btn btn-danger" onClick={logout}>ログアウト</button>
            <button className="btn btn-primary" onClick={login}>ログイン</button>
        </div>
    );
}

export default Auth;