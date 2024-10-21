import './Cart.css'
import PropTypes from 'prop-types';
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>My Cart: {cart.length}</h2>
            <div className='cart-container'>
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img className='img' width={200} height={200} src={bottle.img}></img>
                        <button className='button' onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;