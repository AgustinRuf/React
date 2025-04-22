const CartWidget = ({ quantity }) => {
    return (
        <div>
            <img src="cart-icon.png" alt="Carrito de compras" />
            <span>{quantity}</span>
        </div>
    );
};

export default CartWidget;