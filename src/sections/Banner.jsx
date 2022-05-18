import {Link} from 'react-router-dom'

function Banner(){
    return(
        <div class="banner-section-bg-container d-flex justify-content-center flex-column">
            <div class="text-center">
                <h1 class="banner-heading mb-3">Get Delicious Food Anytime</h1>
                <p class="banner-caption mb-4">Eat Smart & Healthy</p>
                <Link to="/exploreMenu"><button class="custom-button">View Menu</button></Link>
                <Link to="/deliveryPayment"><button class="custom-outline-button">Order Now</button></Link>
            </div>
        </div>
    );
}

export default Banner;