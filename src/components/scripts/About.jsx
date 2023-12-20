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
                        <h4>เราเป็นผู้ค้าส่งและค้าปลีกพันธุ์ไม้เมืองร้อน</h4>
                        <h4>รวมถึงบอน พืชด่าง และพันธุ์ไม้เมืองร้อนพันธุ์ใหม่</h4>
                        <h4>เรามีประสบการณ์หลายปีในการขนส่งพืชเมืองร้อนทั่วโลก</h4>
                        <h4>ไปยังหลายประเทศ: สหรัฐอเมริกาสหราชอาณาจักร รัสเซีย และจีน</h4> 
                        <h4>เรามักจะหาวิธีที่สมบูรณ์แบบในการจัดส่งต้นไม้อย่างรวดเร็วและอยู่ในสภาพดีเพื่อให้คุณปลูก</h4>
                    </form>
                    <img src='plants.png' alt='plants'></img>
                </div>
            </div>
        </div>
    )
}

export default About;
