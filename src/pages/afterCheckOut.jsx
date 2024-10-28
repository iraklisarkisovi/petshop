import { Link } from "react-router-dom";

const After = () => { 
    return(
        <div className="after-container">
            <div className="message-container">
                <h1 className="message-title">The shop is not functioning yet, so you can't purchase anything</h1>
                <Link to="/">
                    <h1 className="back-link">Go back and add items to the cart</h1>
                </Link>
            </div>
        </div>
    );
}

export default After;
