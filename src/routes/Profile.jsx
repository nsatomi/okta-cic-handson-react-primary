import { useEffect, useState } from "react";

const Profile = () => {

    const [errorMsg, setErrorMsg] = useState('');
    const [backendProfile, setBackendProfile] = useState({});

    useEffect(() => {
        const controller = new AbortController();

        getProfileFromBackend(controller.signal);

        return () => {
            controller.abort('Profile コンポーネントが破棄されました');
        }
    }, []);

    const getProfileFromBackend = async signal => {

        fetch(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/v1/me`, {
            signal: signal
        })
        .then(response => {
            if (response.ok) {
                setErrorMsg('');
                response.json().then(profile => setBackendProfile({...profile}));
            } else {
                setErrorMsg(`HTTP ${response.status} - ${response.statusText}`);
            }
        })
        .catch(error => setErrorMsg('バックエンドサーバにアクセスできません'));

    }

    return (
        <div className="container w-75 mt-5">
            <table className="table table-striped table-bordered align-middle caption-top mb-4">
                <caption className="text-center">Okta CIC で認証されたユーザ情報</caption>
                <tbody>
                    {Object.keys({}).map(key => {
                        return (<tr><td>{key}</td><td>{backendProfile[key]}</td></tr>)
                    })}
                </tbody>
            </table>
            <table className="table table-striped table-bordered align-middle caption-top mb-4">
                <caption className="text-center">Okta CIC が発行した ID Token</caption>
                <tbody>
                    {Object.keys({}).map(key => {
                        return (<tr><td>{key}</td><td>{backendProfile[key]}</td></tr>)
                    })}
                </tbody>
            </table>
            <table className="table table-striped table-bordered align-middle caption-top mb-4">
                <caption className="text-center">バックエンドサーバから取得した情報 {errorMsg!=='' && <span style={{color: 'red'}}>({errorMsg})</span>}</caption>
                <tbody>
                    {Object.keys(backendProfile).map(key => {
                        return (<tr><td>{key}</td><td>{backendProfile[key]}</td></tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Profile;