const Auth = () => {

    const myLogin = () => {

    }

    const myLogout = () => {

    }

    return (
        <div className="container my-2">
            <button className="btn btn-danger" onClick={myLogout}>ログアウト</button>
            <button className="btn btn-primary" onClick={myLogin}>ログイン</button>
        </div>
    );
}

export default Auth;