import axios from 'axios';
import React from 'react'
import { withRouter} from 'react-router'

class ItemDetails extends React.Component{
    

    state={
        itemDetails:{}
    }
    componentDidMount=()=>{
        const itemId=this.props.match.params.idMeal
        this.getItemDetails(itemId)
    }

    getItemDetails=(itemId)=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+itemId)
        .then((response)=>{
            this.setState({itemDetails:response.data.meals[0]})
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    


    render(){
        console.log(this.state.itemDetails)
        
        return (
            <div className="recipe-container">
                <div className="each-row">
                    <div className="image-box col-3">
                        <img src={this.state.itemDetails.strMealThumb} alt="Loading" width="300px" height="300px"/>                        
                    </div>
                    <div className="text-box col-3">
                        <div >
                            <h1 className="heading">Meal Id</h1>
                            <h3>{this.state.itemDetails.idMeal}</h3> 
                        </div>
                        
                        <div>
                            <h1 className="heading">Meal Name</h1>
                            <h3>{this.state.itemDetails.strMeal}</h3> 
                        </div>
                    </div>
                    <div className="meal-recipe col-6">
                        <div>
                            <h1>Meal recipee</h1>
                        </div>
                        <div>
                            <h3>{this.state.itemDetails.strInstructions}</h3> 
                        </div>
                    </div>
                </div>
                
            </div>
            
        );
    }
}
export default withRouter(ItemDetails);