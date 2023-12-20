const contactStyle = {
    backgroundImage: 'url("your-image-url.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: '24px',
}

export function Contact_TH() {
    return (
        <div style={contactStyle}>
            <h1>ติดต่อเรา</h1>
        </div>
    )
}

export function Contact_ENG() {
    return (
        <div style={contactStyle}>
            Contact us
        </div>
    )
}
