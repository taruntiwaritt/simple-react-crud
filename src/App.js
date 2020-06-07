import React from 'react';
import './App.css';
import Product from './Product'
import AddProduct from './AddProduct';
const products=[
  {
    name:'iPad',
    price:650
  },
  {
    name:'iPhone',
    price:650
  }
]

localStorage.setItem('products',JSON.stringify(products))
class App extends React.Component {
 constructor(props){
   super(props);

   this.state = {
     products:JSON.parse(localStorage.getItem('products'))
    }
    this.onDelete=this.onDelete.bind(this);
    this.onAdd=this.onAdd.bind(this);
    this.onEditSubmit=this.onEditSubmit.bind(this);
 }

 componentDidMount(){
   const products = this.getProducts();
   this.setState({products});
 }

 getProducts(){
   return this.state.products;
 }

 onDelete(name){
   console.log(name);
   const products = this.getProducts();
   const filteredProducts = products.filter(product=>{
     return product.name!== name;
   });
   console.log(filteredProducts);
   this.setState({products:filteredProducts})
 }

 onEditSubmit(name,price,originalName){
  console.log(name,price);
  let products = this.getProducts();
  products = products.map(product=>{
    if(product.name===originalName){
      product.name=name;
      product.price=price;
    }
    return product;
  })
  this.setState({products});
 }

 onAdd(name,price){
   console.log(name,price);

  const products=this.getProducts();
  products.push(
    {
      name,
      price
    }
  )
  this.setState({products});
 }

  render(){
    return (
      <div className="App">
        <h1>Products Manager</h1>
        <AddProduct onAdd={this.onAdd}/>
        {
          this.state.products.map(product=>{
            return(
              <Product key={product.name} 
              {...product}
              onDelete = {this.onDelete}
              onEditSubmit={this.onEditSubmit}
              />

            );
          })
        }
      </div>
    );
 } 
}

export default App;
