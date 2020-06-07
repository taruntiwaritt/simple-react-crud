import React from 'react';
import './App.css';


class Product extends React.Component {
 
    constructor(props){
        super(props);
        this.state={
            isEdit:false
        }
        this.onDelete=this.onDelete.bind(this);
        this.onEdit=this.onEdit.bind(this);
        this.onEditSubmit=this.onEditSubmit.bind(this);
    }
    onEdit(){
        this.setState({isEdit:true})
    }
    onEditSubmit(e){
        e.preventDefault();
        this.props.onEditSubmit(this.nameInput.value,this.priceInput.value,this.props.name);
        this.setState({
            isEdit:false
        });
    }
    onDelete(){
        const {onDelete,name} = this.props;

        onDelete(name);
    }
  render(){
    const {name,price}=this.props;
    return(
        <div>
            {this.state.isEdit?
            (<form onSubmit={this.onSubmit}>
                <input placeholder="Name" id="name" 
                ref={nameInput=>this.nameInput=nameInput}
                defaultValue={name}/>

                <input placeholder="Price" id="price" 
                ref={priceInput=>this.priceInput=priceInput}
                defaultValue={price}/>
                <button onClick={this.onEditSubmit}>Save</button>
            </form>)
            :
            (<div>
                <span>{name}
                {` | `}
                {price}
                {` | `}
                <button onClick={this.onDelete}>Delete</button>
                {` | `}
                <button onClick={this.onEdit}>Edit</button></span>
            </div>)
            }
        </div>
        

    );
    }
 } 

export default Product;
