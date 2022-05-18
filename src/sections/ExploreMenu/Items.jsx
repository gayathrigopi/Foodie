import React from 'react'
import Item from './Item.jsx';
import axios from 'axios'
import {Link} from 'react-router-dom'


class ExploreMenu extends React.Component{
    state={
        ItemsList:[]
    }

    componentDidMount=()=>{
        this.getItems()
    }

    getItems=()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=")
        
        .then((responce)=>{
            console.log(responce.data)
            this.setState({ItemsList:responce.data.meals})

        })
        .catch((error)=>{
            console.log(error)
        })
    }
    AllItemsComponents=()=>{
        const ItemComponent=this.state.ItemsList.map((item,index)=>{
            return (
                <div class="col-12 col-md-6 col-lg-3">
                    <Link
                        key={index}
                        to={"/itemDetails/"+item.idMeal}>
                
                            <Item
                            key={index}
                            itemId={item.idMeal}
                            banner={item.strMealThumb} 
                            tittle={item.strMeal}/>
                    </Link>
                </div>
                
            )
        })
        return ItemComponent;
    }
    render(){
        
        return(
            <div>
                <div class="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="menu-section-heading">Explore Menu</h1>
                            </div>
                        </div>
                        <div >
                            <div class="row">
                                {this.AllItemsComponents()} 
                            </div>
                                    
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default ExploreMenu;