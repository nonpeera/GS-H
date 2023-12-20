const contactStyle = {
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
const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '0px', // ระยะห่างระหว่างตารางกับส่วนอื่น
};

const cellStyle = {
    // border: '2px solid black',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    flex: 1,
    verticalAlign: 'top',
    background: 'black',
};
const iconImageStyle = {
    width: '100px',
    height: '100px',
    margin: 'auto',
};

function Contact() {
    return (
        <div>
            <div style={contactStyle}>
                Contact us
            </div>
            <div style={blackBackgroundStyle}>
                <table style={tableStyle} backgroundColor='black'>
                    <tbody>
                        <tr>
                            <td style={{height: '100px'}}></td>
                        </tr>
                        <tr>
                            <td style={cellStyle}>
                                <img src="/location.png" alt="Icon" style={iconImageStyle} />
                            </td>
                            <td style={cellStyle}>
                                <img src="/phone.png" alt="Icon" style={iconImageStyle} />
                            </td>
                            <td style={cellStyle}>
                                <img src="/email.png" alt="Icon" style={iconImageStyle} />
                            </td>
                        </tr>
                        <tr>
                            <td style={cellStyle}>
                                <h1>Address</h1>
                                <p>48 Pongyangok Subdistrict,</p>
                                <p>Hang Chat District,</p>
                                <p>Lampang Province 52190</p>
                            </td>
                            <td style={cellStyle}>
                                <h1>Phone</h1>
                                <p>(+66) 98 765 4321</p>
                            </td>
                            <td style={cellStyle}>
                                <h1>Email</h1>
                                <p>growmseed@gmail.com</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Contact;
