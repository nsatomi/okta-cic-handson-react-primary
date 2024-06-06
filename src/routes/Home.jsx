import TopImage from '../assets/images/handson.jpg';

const Home = () => {
    return (
        <div className="container mt-5">
            <p>これは <strong>Okta CIC</strong> ハンズオン用のサンプルアプリです</p>
            <img src={TopImage} className="img-thumbnail" />
        </div>
    );
}

export default Home;