const aboutStyle = {
    backgroundImage: 'url("/flower.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: '100px',
    fontWeight: 'bold',
}
const blackBackgroundStyle = {
    backgroundColor: 'black',
    height: '700px',
};
function About() {
    return (
        <div>
            <div style={aboutStyle}>
                Contact us
            </div>
            <div style={blackBackgroundStyle}></div>
        </div>
    )
}

export default About;
