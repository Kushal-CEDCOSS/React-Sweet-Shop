import React, { useContext, useEffect } from 'react';
import { MyContext } from './Contexts/Main';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';import Modal from '@mui/material/Modal';
import Drawer from '@mui/material/Drawer';
import WorkIcon from '@mui/icons-material/Work';
import './Navbar.css';

const Navbar = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.getElementById("navbar").style.top = "0px";
          document.getElementById("backToTop").style.display = "flex";
      } 
      else {
        document.getElementById("backToTop").style.display = "none";
        document.getElementById("navbar").style.top = "-130px";
      }
    }

    const scrollToTop = () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(()=>{
      if(context.changeWithCriteria[0] === "")
      {
        return;
      }
      else{
        navigate('/products');
        var current = context.changeWithCriteria[0];
        var temp = context.sweets[0].filter(item => item.category === context.changeWithCriteria[0]);
        context.searchResults[1](temp);
        context.currentCategory[1](current);
        context.changeWithCriteria[1]("");
      }
    }, [context.changeWithCriteria[0]]);

    const minus = (e) => {
      if(e.target.nextSibling.innerText === "1")
      {
        return;
      }
      var sum = 0;
      var id = e.target.id;
      var temp = [...context.cart[0]];
      temp.map((item) => (item.id === id ? (item.quantity -= 1) : null));
      temp.map((item) => (sum += item.price * item.quantity));
      context.cart[1](temp);
      context.total[1](sum.toFixed(2));
    }

    const plus = (e) => {
      var sum = 0;
      var id = e.target.id;
      var temp = [...context.cart[0]];
      temp.map((item) => (item.id === id ? (item.quantity += 1) : null));
      temp.map((item) => (sum += item.price * item.quantity));
      context.cart[1](temp);
      context.total[1](sum.toFixed(2));
    };

    // Function to delete item from cart
  const deleteItem = (e) => {
    var sum = 0;
    var pos = -1;
    var id = e.target.id;
    var temp = [...context.cart[0]];
    temp.map((item, index) => (item.id === id ? (pos = index) : null));
    temp[pos].quantity = 1;
    temp.splice(pos, 1);
    temp.map((item) => (sum += item.price * item.quantity));
    context.cart[1](temp);
    context.total[1](sum.toFixed(2));
  };

  const validate = (e) => {
    e.preventDefault();
    context.finalMessage[1](true);
  }


  return (
    <div id="navbar" className="Navbar">
      {context.cart[0].length === 0 ? null : 
      <div className="cartSymbol animate__animated animate__fadeIn" onClick={()=>{context.drawerState[1](true)}}>
        <WorkIcon sx={{fontSize: '4.5vw'}}/>
        <h2>{context.cart[0].length}</h2>
      </div>}
      <div className="backToTop" id="backToTop" onClick={scrollToTop}>
          <KeyboardArrowUpIcon sx={{fontSize: '4vw'}}/>
        </div>
        <div className="logoArea" onClick={()=>{navigate("/")}}>
            <h1><span>N</span>eelKanth <span>S</span>weets</h1>
        </div>
        <div className="navContents">
        <h2 onClick={()=>{context.changeWithCriteria[1]("Rakhi Mithai")}}>Rakhi Mithai</h2>
        <h2 onClick={()=>{context.changeWithCriteria[1]("Ladoos")}}>Ladoos</h2>
        <h2 onClick={()=>{context.changeWithCriteria[1]("Kaju Mithai")}}>Kaju Mithai</h2>
        </div>

        <Drawer 
        anchor="bottom"
        open={context.drawerState[0]}
        onClose = {()=>{context.drawerState[1](false)}}
        >
          <button className="closeButton" onClick={()=>{context.drawerState[1](false)}}>X</button>
          <div className="cartArea">
            <h1 className="animate__animated animate__bounceInDown animate__slow">Your Shopping Cart</h1>
            <h2 className="animate__animated animate__fadeIn animate__slower">Total Cart Value : <span>₹{context.total[0]}</span></h2>
            {context.cart[0].length === 0 ? <h1 style={{margin: 'auto', fontSize: '3vw'}}>Your Cart is Empty, <br/>Go buy some mouth watering delicacies now!!</h1> : <><table className='animate__animated animate__bounceInUp animate__slow'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {context.cart[0].map((item, index) => <tr key={index}><td><img src={item.image} alt="" /></td><td>{item.name}</td><td><button id={item.id} onClick={minus}>-</button><span>{item.quantity}</span><button id={item.id} onClick={plus}>+</button></td><td><i id={item.id} onClick={deleteItem} class="fa-solid fa-trash-can"></i></td></tr>)}
              </tbody>
            </table>
            <button onClick={()=>{context.modalState[1](true)}} className="checkout animate__animated animate__bounceInUp animate__slower">Checkout</button>
            </>
            }
          </div>
        </Drawer>

        <Modal 
        open={context.modalState[0]}
        onClose={()=>{context.modalState[1](false); context.finalMessage[1](false);context.cart[1]([]); context.total[1](0)}}>
          <form className="modalArea" onSubmit={validate}>
            {context.finalMessage[0] ? <h1 style={{fontSize: '2vw', textAlign:'center', }}>Your order of ₹{context.total[0]} will be delivered soon!!</h1> : <><h1>Delivery Details</h1>
            <input required type="text" placeholder="Your Name" />
            <input required type="text" placeholder="Receiver's Name" />
            <textarea required placeholder="Receiver's Address" />
            <button type="submit">Place Order</button>
            </>}
            
          </form>
        </Modal>
    </div>
  )
}

export default Navbar