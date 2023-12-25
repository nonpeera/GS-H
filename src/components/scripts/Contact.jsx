const contactStyle = {
    backgroundImage: 'url("/flower.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '180px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: '50px',
    fontWeight: 'bold',
    borderRadius: '0px 0px 100px 100px',
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
const title = {
    fontSize:'30px',
};

const Contact = () => {
    return (
        <div style={blackBackgroundStyle}>
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
                                <h2 style={title}>Address</h2>
                                <h5>48 Pongyangok Subdistrict,</h5>
                                <h5>Hang Chat District,</h5>
                                <h5>Lampang Province 52190</h5>
                            </td>
                            <td style={cellStyle}>
                                <h2 style={title}>Phone</h2>
                                <h5>(+66) 98 765 4321</h5>
                            </td>
                            <td style={cellStyle}>
                                <h2 style={title}>Email</h2>
                                <h5>growmseed@gmail.com</h5>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Contact;
