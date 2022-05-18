
import React from 'react'
import Banner from "./Banner";
import DeliveryPayment from "./DeliveryPayment";
import ExploreMenu from "./ExploreMenu/Items";
import HealthyFoodMessage from "./HealthyFoodMessage";
import WhyChooseUs from "./WhyChooseUs";

class Home extends React.Component{
    render(){
        return (
            <div>
                <Banner/>
                <WhyChooseUs/>
                <ExploreMenu/>
                <HealthyFoodMessage/>
                <DeliveryPayment/>
            </div>
        );
    }
}
export default Home