import {Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
            <Link class="navbar-brand" to="/">
                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" class="food-munch-logo" alt="Loading...." />
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav nav-items">
                    <Link class="nav-link active" id="navItem0" to="/"> Home</Link>
                    <Link class="nav-link" id="navItem1" to="/whyChooseUs"> Why Choose Us?</Link>
                    <Link class="nav-link" id="navItem2" to="/exploreMenu" >Explore Menu</Link>
                    <Link class="nav-link" id="navItem3" to="/search"> Search Item</Link>
                    <Link class="nav-link" id="navItem4" to="/deliveryPayment" >Delivery & Payment</Link>
                    <Link class="nav-link" id="navItem5" to="/healthyFood" >How Healthy</Link>
                </div>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;