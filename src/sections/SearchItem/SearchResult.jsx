import React from 'react'
import Search from './Search'
import {withRouter} from 'react-router'
import axios from 'axios'
import Item from '../ExploreMenu/Item'
import {Link} from 'react-router-dom'

class SearchResult extends React.Component{

    state={
        serchedItems:[]
    }
    componentDidMount=()=>{
        const searchText=this.props.match.params.searchValue
        this.getItemDetails(searchText)
    }

    getItemDetails=(searchText)=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i="+searchText)
        .then((response)=>{
            this.setState({serchedItems:response.data.meals})
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    AllSearchedResult=()=>{
        if (this.state.serchedItems===null){
            return <h1 class="menu-section-heading text-center redColor">No such Items</h1>
        }
        else{
            const ItemComponent=this.state.serchedItems.map((item,index)=>{
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
            return ItemComponent
        }
        
        
    }

     
    render(){
        console.log(this.state.serchedItems)
        return(
            <div>
                <Search/>
                <div class="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="menu-section-heading text-center">Your Search Results:</h1>
                            </div>
                        </div>
                        <div >
                            <div class="row">
                                {this.AllSearchedResult()} 
                            </div>
                                    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SearchResult);