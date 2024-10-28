import { Link } from "react-router-dom";
import "../App.css";

const Checkout = () => { 
    return (
        <div className="checkout-container">
            <div className="form-container">
                <h2 className="form-title">Checkout</h2>
                <div className="input-group">
                    <h3>Name</h3>
                    <input className="input-field" type="text" placeholder="Please enter your name" />
                </div>
                <div className="input-group">
                    <h3>Surname</h3>
                    <input className="input-field" type="text" placeholder="Please enter your surname" />
                </div>
                <div className="input-group">
                    <h3>Identity</h3>
                    <input className="input-field" type="text" placeholder="Please enter your ID" />
                </div>
                <Link to="/after"><button className="submit-btn">Submit</button></Link>
            </div>
        </div>
    )
}

export default Checkout;
