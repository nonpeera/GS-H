import '../styles/About.css';
function About() {
    return (
        <div>
            <div className='aboutStyle'>
                About us
            </div>
            <div className='background'>
                <div className='text'>
                    <form>
                        <h1>A Minimal Team</h1>
                        <h4>We are a wholesaler and retailer of tropical plants.</h4>
                        <h4>Including bonsai, spotted plants and new tropical plants.</h4>
                        <h4>We have many years of experience shipping tropical plants around the world.</h4>
                        <h4>To many countries: USA, UK, Russia and China.</h4> 
                        <h4>We always find the perfect way to deliver plants quickly and in good condition for you to plant.</h4>
                    </form>
                    <img src='plants.png' alt='plants'></img>
                </div>
            </div>
        </div>
    )
}

export default About;
