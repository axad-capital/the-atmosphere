import React from 'react'
import './cartComp.css'
import X from './x.png'

const CartComp = () => {

    function checkOut() {
        let items = JSON.parse(localStorage.getItem('theAtmoshereCart'))
        console.log(items)
        fetch("/create-checkout-session", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(items)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                // redirecting the page using url from the backend
                window.location.href = data.url
            })
    }

    function removeFromCart(e) {
        let removed = e.target.id
        let cartData = JSON.parse(localStorage.getItem('theAtmoshereCart'))
        let newCartData = cartData.filter(item => item.id !== removed)
        localStorage.setItem('theAtmoshereCart', JSON.stringify(newCartData))
        window.location.reload()
    }

    let cartData = JSON.parse(localStorage.getItem('theAtmoshereCart'))
    console.log(cartData)

    return (
        <div>
            {cartData === null || cartData.length === 0 ? <h1>Cart is empty</h1> : <div>
                {cartData.map(data => (
                    <div className='item-in-cart' key={data.id}>
                        <h1 id={data.id}>{data.name}</h1>
                        <img id={data.id} className='x' onClick={removeFromCart} title='Remove From Cart' src={X} alt="Remove From Cart" />
                    </div>
                ))}
                <button onClick={checkOut}>Checkout</button>
            </div>}
        </div>
    )
}

export default CartComp