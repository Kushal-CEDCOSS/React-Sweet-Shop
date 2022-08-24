import React, { createContext, useState } from "react";


const MyContext = createContext();

const Main = (props) => {
    const [sweets, setSweets] = useState([
        {id:'1', name: 'Mawa Burfi', category: 'Burfi', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2015/05/Mawa-Burfi-recipe-5.jpg', weight: 'kg', price: 799, quantity: 1}, 

        {id:'2', name: 'Khoya Burfi', category: 'Burfi', image: 'https://aromaticessence.co/wp-content/uploads/2021/10/mawa_barfi_featured-1.jpg', weight: 'kg', price: 599, quantity: 1},

        {id:'3', name: 'Chocolate Burfi', category: 'Burfi', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2013/10/chocolate-khoya-burfi-recipe-500x500.jpg', weight: 'kg', price: 1299, quantity: 1}, 

        {id:'4', name: 'Doda Burfi', category: 'Burfi', image: 'https://img-global.cpcdn.com/recipes/8101e1a946913be0/1200x630cq70/photo.jpg', weight: 'kg', price: 449, quantity: 1},
    
        {id:'5', name: 'Milk Cake', category: 'Rakhi Mithai', image: 'https://i.ytimg.com/vi/o7sJq2IB8UU/maxresdefault.jpg', weight: 'kg', price: 299, quantity: 1},

        {id:'6', name: 'Kalakand', category: 'Rakhi Mithai', image: 'https://img.freepik.com/premium-photo/kalakand-sweet-food_57665-1464.jpg?w=2000', weight: 'kg', price: 349, quantity: 1},

        {id:'7', name: 'Rajbhog', category: 'Rakhi Mithai', image: 'https://www.rajbhog.com/wp-content/uploads/2021/03/Dilbahar.jpg', weight: 'kg', price: 259, quantity: 1},

        {id:'8', name: 'Cham Cham', category: 'Chenna', image: 'https://cdn.cdnparenting.com/articles/2018/11/14170647/chum-chum-recipe_36536251.jpg', weight: 'kg', price: 499, quantity: 1},

        {id:'9', name: 'Chenna Payas', category: 'Chenna', image: 'https://img-global.cpcdn.com/recipes/1b27454008732605/1200x630cq70/photo.jpg', weight: 'kg', price: 299, quantity: 1},

        {id:'10', name: 'Kaju Katli', category: 'Kaju Mithai', image: 'https://www.tashasartisanfoods.com/blog/wp-content/uploads/2020/08/Kaju-Katli-8-a.jpg', weight: 'kg', price: 1499, quantity: 1},

        {id:'11', name: 'Kaju Pista Rolls', category: 'Kaju Mithai', image: 'https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2019/10/Kaju-Pista-Rolls-H1.jpg?fit=600%2C900&ssl=1', weight: 'kg', price: 1499, quantity: 1},

        {id:'12', name: 'Kaju Pista Barfi', category: 'Kaju Mithai', image: 'https://images.news18.com/ibnkhabar/uploads/2021/08/Kesar-Kaju-Pista-Barfi.jpg', weight: 'kg', price: 1299, quantity: 1},

        {id:'13', name: 'Kaju Kalash', category: 'Kaju Mithai', image: 'https://i.ytimg.com/vi/XYde9CqfBMk/maxresdefault.jpg', weight: 'kg', price: 1699, quantity: 1},

        {id:'14', name: 'Kaju Puri', category: 'Kaju Mithai', image: 'https://cdn.shopify.com/s/files/1/0055/4418/1827/products/KAJU_20PURI_2328ba5b-c79a-4376-b425-0e048935d7d6_1024x1024.jpg?v=1575966923', weight: '4pcs', price: 899, quantity: 1},

        {id:'15', name: 'Besan Ladoo', category: 'Ladoos', image: 'https://imgcdn.floweraura.com/besan-ladoo-ganesh-combo-9907177gf-A.JPG', weight: '500g', price: 150, quantity: 1},

        {id:'16', name: 'Motichoor Ladoo', category: 'Ladoos', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2016/03/Motichoor-Ladoo-Recipe-1.jpg', weight: 'kg', price: 350, quantity: 1},

        {id:'17', name: 'Gond Ke Ladoo', category: 'Ladoos', image: 'https://www.whiskaffair.com/wp-content/uploads/2019/06/Gond-ke-Laddu-1-1-1024x1536.jpg', weight: 'kg', price: 250, quantity: 1},

        {id:'18', name: 'Cocunut Ladoo', category: 'Ladoos', image: 'https://spicecravings.com/wp-content/uploads/2020/09/Coconut-ladoo-New-Featured-500x375.jpg', weight: 'kg', price: 149, quantity: 1},
    ])

    const [offersModal, setOffersModal]= useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("");
    const [changeWithCriteria, setChangeWithCriteria] = useState("");
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [drawerState, setDrawerState] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [finalMessage, setFinalMessage] = useState(false);

    return (
    <MyContext.Provider value={{sweets: [sweets, setSweets], searchResults: [searchResults, setSearchResults], currentCategory: [currentCategory, setCurrentCategory], changeWithCriteria: [changeWithCriteria, setChangeWithCriteria], cart: [cart, setCart], total: [total, setTotal], drawerState: [drawerState, setDrawerState], modalState: [modalState, setModalState], finalMessage: [finalMessage, setFinalMessage], offersModal: [offersModal, setOffersModal]}}>
        {props.children}
    </MyContext.Provider>
    )
}

export  { Main, MyContext };
