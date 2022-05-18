import React from 'react'
import { Route} from 'react-router-dom'
import './css/foodie.css'
import DeliveryPayment from './sections/DeliveryPayment.jsx';
import ItemDetails from './sections/ExploreMenu/ItemDetails';
import ExploreMenu from './sections/ExploreMenu/Items.jsx';
import HealthyFoodMessage from './sections/HealthyFoodMessage.jsx'
import Home from './sections/Home.jsx';
import Search from './sections/SearchItem/Search';

import SearchResult from './sections/SearchItem/SearchResult';
import WhyChooseUs from './sections/WhyChooseUs.jsx';

class Bodysection extends React.Component{
    render(){
        return(
        <section>
            <Route path="/" component={Home} exact/>
            <Route path="/whyChooseUs" component={WhyChooseUs}/>
            <Route path="/exploreMenu" component={ExploreMenu}/>
            <Route path="/search" component={Search}/>
            <Route path="/deliveryPayment" component={DeliveryPayment}/>
            <Route path="/healthyFood" component={HealthyFoodMessage}/>
            <Route path="/itemDetails/:idMeal" component={ItemDetails}/>
            <Route path="/searchResult/:searchValue" component={SearchResult}/>


        </section>
            
            
        );
    }
}

export default Bodysection