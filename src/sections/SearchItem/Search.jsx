import '../../css/foodie.css'
import React from 'react'
import '../ExploreMenu/ItemsList'
import {Link} from 'react-router-dom'

class Search extends React.Component{

    state={
        searchValue:''
    };
       
    changeText=(event)=>{
        this.setState({searchValue:event.target.value});
        console.log(this.setState.searchValue)
    }
    

    render(){
        return (
            <div>
                <div class="searchItem-container d-flex justify-content-center flex-column">
                    <div class="text-center">
                        
                        <div>
                            <form onSubmit={this.searchItems}>
                                <input type="text" class="search-bar" onChange={this.changeText} placeholder="Enter an ingredient" id="search-input"/>
                                <Link to={"/searchResult/"+this.state.searchValue}>
                                    <button type="submit" class=" btn btn-primary searchbutton" id="search-btn">Search</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div class="forResultSpace">
                    
                </div>

            </div>
           
        );  
    }
}
export default Search;