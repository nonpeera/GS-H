const contactStyle = {
    backgroundImage: 'url("/flower.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: '24px',
}

function Contact() {
    return (
        <div style={contactStyle}>
            Contact us
        </div>
    )
}

export default Contact;
