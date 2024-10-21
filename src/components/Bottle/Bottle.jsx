import './Bottle.css'
import PropTypes from 'prop-types';

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle;

    return (
        <div className="bottle-container">
            <img width={250} height={250}  src={img} alt="" />
                <h2>Name: {name}</h2>
                <p><b>Price:</b> ${price}</p>
                <button onClick={() => handleAddToCart(bottle)} className='button'>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;