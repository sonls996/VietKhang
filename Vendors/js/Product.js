import React from 'react';
// import editStatusSearch from './../Reducer/statusSearch';
// import { connect } from 'react-redux';
// import product1 from '../Vendors/Images/prodcuct1.jpg';
// import product2 from '../Vendors/Images/prodcuct2.jpg';
// import product3 from '../Vendors/Images/prodcuct3.jpg';
// import product4 from '../Vendors/Images/prodcuct4.jpg';


import ProductItem from './ProductItem';
import Filter from './Filter';
// var test = require("../Vendors/Images/product11.jpg");yy
var dataPost = [
    {
        id: 1,
        price: "200000",
        comment: " 5 Comments",
        title: " How to Responsive Web Design",
        "url": require("../Vendors/Images/product1.jpg"),
        studio:"Hoàng Gia Studio"
    },
    {
        id: 2,
        price: "300000",
        comment: " 125 Comments",
        title: " How to convert PSD to HTML,CSS",
        "url": require("../Vendors/Images/product2.jpg"),
        studio:"Hoàng Gia Studio"
    },
    {
        id: 3,
        price: "400000",
        comment: " 15 Comments",
        title: " Learn Javascript in 15 minutes",
        "url": require("../Vendors/Images/product3.jpg"),
        studio:"Hoàng Gia Studio"
    },
    {
        id: 4,
        price: "April 02,2020",
        comment: " 15 Comments",
        title: " Learn Javascript in 15 minutes",
        "url": require("../Vendors/Images/product4.jpg"),
        studio:"Hoàng Gia Studio"
    },
    {
        id: 5,
        price: "April 02,2020",
        comment: " 15 Comments",
        title: " Learn Javascript in 15 minutes",
        "url": require("../Vendors/Images/product5.jpg"),
        studio:"Hoàng Gia Studio"
    },
    {
        id: 6,
        price: "April 02,2020",
        comment: " 15 Comments",
        title: " Learn Javascript in 15 minutes",
        "url": require("../Vendors/Images/product6.jpg"),
        studio:"Hoàng Gia Studio"
    },
    {
        id: 7,
        price: "April 02,2020",
        comment: " 15 Comments",
        title: " Learn Javascript in 15 minutes",
        "url": require("../Vendors/Images/product7.jpg"),
        studio:"Hoàng Gia Studio"
    },
    {
        id: 8,
        price: "April 02,2020",
        comment: " 15 Comments",
        title: " Learn Javascript in 15 minutes",
        "url": require("../Vendors/Images/product8.jpg"),
        studio:"Hoàng Gia Studio"
    },
    {
        id: 9,
        price: "April 02,2020",
        comment: " 15 Comments",
        title: " Learn Javascript in 15 minutes",
        "url": require("../Vendors/Images/product9.jpg"),
        studio:"Hoàng Gia Studio"
    },
    {
        id: 10,
        price: "April 02,2020",
        comment: " 15 Comments",
        title: " Learn Javascript in 15 minutes",
        "url": require("../Vendors/Images/product10.jpg"),
        studio:"Hoàng Gia Studio"
    },
    {
        id: 11,
        price: "April 02,2020",
        comment: " 15 Comments",
        title: " Learn Javascript in 15 minutes",
        "url": require("../Vendors/Images/product11.jpg"),
        studio:"Hoàng Gia Studio"
    },
    {
        id: 12,
        price: "April 02,2020",
        comment: " 15 Comments",
        title: " Learn Javascript in 15 minutes",
        "url": require("../Vendors/Images/product12.jpg"),
        studio:"Hoàng Gia Studio"
    },

]



const Product = () => {
    return (
        <div className="container">
        <Filter></Filter>
        <div className="row">
            {
                dataPost.map((value, index) => {
                    return (
                        <ProductItem
                            key={value.id}
                            id={value.id}
                            url={value.url}
                            item={value}
                        ></ProductItem>
                    )
                })
            }
        </div>

    </div>
    );
}

export default Product;



