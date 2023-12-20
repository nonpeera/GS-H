import '../styles/OrderDetail.css'

function OrderDetail(){
    return(
        <div className='background'>
            <div className='container'>
                <div className="user-info">
                    <img
                        className="profile-image"
                        src="john.jpg" alt="Profile"/>
                    <div className="username">John Wick<br/><p>Order Detail</p></div>
                </div>
                <img
                    className="cart-image"
                    src='cart.png' alt='Cart'/>
            </div>
        </div>
    );
}

export default OrderDetail;