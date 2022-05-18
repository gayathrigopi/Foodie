import React from 'react';


class Item extends React.Component{
    render(){
        return (
           
            <div>
                <div class="shadow menu-item-card p-3 mb-3 text-center">
                    <img src={this.props.banner} class="menu-item-image w-100" alt="Loading...."/>
                    <h1 class="menu-card-title">{this.props.tittle}</h1>
                    <button class="btn btn-warning">Get Recipe</button>
                </div>
                
            </div>
           
         
        );
    }
}

export default Item;
