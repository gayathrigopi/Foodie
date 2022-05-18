function ThankingCustomer(){
    return (
        <div class="thanking-customers-section pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
                        <h1 class="thanking-customers-section-heading">
                            Thank you for being a valuable customer to us.
                        </h1>
                        <p class="thanking-customers-section-description">
                            We have a surprise gift for you
                        </p>
                        <div class="d-md-none">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" class="thanking-customers-section-img" alt="Loading...."/>
                        </div>
                        <div>
                            <button class="custom-button">Redeem Gift</button>
                        </div>
                    </div>
                    <div class="col-12 col-md-5 d-none d-md-block">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" class="thanking-customers-section-img" alt="Loading...."/>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default ThankingCustomer;