export default function Cart({ isOpen, onClose, cartItems, onRemove, onPlaceOrder }) {
    const total = cartItems.reduce((sum, item) => {
        // Parse the INR formatted price safely
        const priceStr = item.price.toString().replace(/[^0-9.-]+/g, "");
        return sum + (parseFloat(priceStr) || 0);
    }, 0);

    return (
        <>
            <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
            <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="cart-close" onClick={onClose}>&times;</button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p className="cart-empty">Your cart is empty. Explore our catalog to add items.</p>
                    ) : (
                        cartItems.map((item, idx) => (
                            <div key={idx} className="cart-item">
                                <div className="cart-item-info">
                                    <div className="cart-item-name">{item.name || item.title}</div>
                                    <div className="cart-item-price">{item.price}</div>
                                </div>
                                <button className="cart-item-remove" onClick={() => onRemove(idx)}>&times;</button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total:</span>
                            <span>₹{total.toLocaleString('en-IN')}</span>
                        </div>
                        <button className="btn-luxe cart-checkout-btn" onClick={onPlaceOrder}>
                            Place Order <span className="arrow">&rarr;</span>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
