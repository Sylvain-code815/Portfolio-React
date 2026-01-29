import Portrait from '../assets/Img/Photo prix.png';

const Home = () => {
    return (
        <>
            <div className="container mx-auto">
                <h1>Bonjour, je suis <span className="text-accent">Sylvain</span></h1>
                <img src={Portrait} alt="Portrait Sylvain"
                className="max-w-full h-auto w-[300px]" />
            </div>
        </>
    )
}

export default Home