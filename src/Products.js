import React, { useContext, useEffect } from 'react';
import Navbar from './Navbar';
import { MyContext } from './Contexts/Main';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import DeleteIcon from '@mui/icons-material/Delete';
import Select from '@mui/material/Select';
import './Products.css';
import { useNavigate } from 'react-router-dom';


const Products = () => {
  
  const context = useContext(MyContext);
  
  

  const searchSweets = () => {
    var input = document.getElementById('searchQuery').value;
    var criteria = document.getElementById('categories').innerText;

    if(input.length === 0 && criteria.length === 1)
    {
      context.searchResults[1]([]);
      return;
    }
    if(input.length !== 0 && criteria.length === 1)
    {
      var temp = context.sweets[0].filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
      context.searchResults[1](temp);
    }
    if(input.length === 0 && criteria.length !== 1)
    {
      temp = context.sweets[0].filter(item => item.category === criteria)
      context.searchResults[1](temp);
    }
    if(input.length !== 0 && criteria.length !== 1)
    {
      temp = context.sweets[0].filter(item => item.category === criteria);
      var temp1 = temp.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
      context.searchResults[1](temp1);
    }
  }

  // Function for Add to Cart Functionality
  const addTocart = (e) => {
    var sum = 0;
    var newCart = [...context.cart[0]];
    var pos = -1;
    newCart.map((item, index) =>
      item.id === e.target.id ? (pos = index) : null
    );
    if (pos !== -1) {
      newCart[pos].quantity += 1;
    } 
    else {
      var temp = context.sweets[0].filter(item => item.id === e.target.id);
      newCart = [...context.cart[0], temp[0]];
      context.cart[1](newCart);
    }
    newCart.map((item) => (sum += item.price * item.quantity));
    context.total[1](sum.toFixed(2));
    
  }

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if(context.changeWithCriteria[0] === "")
    {
      return;
    }
    else{
      var current = context.changeWithCriteria[0];
      var temp = context.sweets[0].filter(item => item.category === context.changeWithCriteria[0]);
      context.searchResults[1](temp);
      context.currentCategory[1](current);
      context.changeWithCriteria[1]("");
    }
  }, [])


  return (
    <div className="Products">
        <Navbar />
        <h1 className='animate__animated animate__backInDown'>Bliss in Every Bite</h1>
        <div className="filtersArea">
          <div className="searchArea animate__animated animate__fadeIn animate__slower">
            <SearchIcon sx={{fontSize: '3.5vw', color: '#adadad'}}/>
            <input id="searchQuery" type="text" placeholder='Search delicacies....' onKeyUp={searchSweets}/>
          </div>
          <FormControl id="resetForm" className="animate__animated animate__fadeIn animate__slower" sx={{width: '20%'}}>
          <InputLabel id="categoryLabel">Categories</InputLabel>
          <Select
            labelId="categoryLabel"
            label="Categories"
            id="categories"
            value={context.currentCategory[0]}
            onChange={()=>{setTimeout(searchSweets, 500)}}
            >
              <MenuItem value="Burfi" onClick={()=>{context.currentCategory[1]("Burfi")}}>Burfi</MenuItem>
              <MenuItem value="Rakhi Mithai" onClick={()=>{context.currentCategory[1]("Rakhi Mithai")}}>Rakhi Mithai</MenuItem>
              <MenuItem value="Chenna" onClick={()=>{context.currentCategory[1]("Chenna")}}>Chenna</MenuItem>
              <MenuItem value="Kaju Mithai" onClick={()=>{context.currentCategory[1]("Kaju Mithai")}}>Kaju Mithai</MenuItem>
              <MenuItem value="Ladoos" onClick={()=>{context.currentCategory[1]("Ladoos")}}>Ladoos</MenuItem>
              <MenuItem value="" sx={{color: 'red'}} onClick={()=>{context.currentCategory[1]("")}}>Remove Filters <DeleteIcon /></MenuItem>
          </Select>
          </FormControl>
        </div>
        <div className="productsCanvas">  
        {context.searchResults[0].length !== 0 ? <>{context.searchResults[0].map((item, index) => <div className="Card animate__animated animate__fadeInUp" key={index}>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          <p>₹{item.price}/{item.weight}</p>
          <button className="addToCart" id={item.id} onClick={addTocart}>Add to Cart</button>
        </div>)}  </> 
        : <>
        {context.sweets[0].map((item, index) => <div className="Card animate__animated animate__fadeIn animate__slower" key={index}>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          <p>₹{item.price}/{item.weight}</p>
          <button className="addToCart" id={item.id} onClick={addTocart}>Add to Cart</button>
        </div>)}  
        </>}
         
        </div>
    </div>
  )
}

export default Products