import React from 'react';
import './App.css';


class AddProduct extends React.Component {
 
    constructor(props){
        super(props);
        this.state={
            name:'',
            price:''
        }
        this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.nameInput.value,this.priceInput.value)
    }
  render(){
    return(
        <form onSubmit={this.onSubmit}>
            <h3>Add Item</h3>
            <input placeholder="Name" id="name" 
            ref={nameInput=>this.nameInput=nameInput}/>

            <input placeholder="Price" id="price" 
            ref={priceInput=>this.priceInput=priceInput}/>
            <button type="submit">Add</button>
            <hr />
        </form>

    );
    }
 } 

export default AddProduct;
