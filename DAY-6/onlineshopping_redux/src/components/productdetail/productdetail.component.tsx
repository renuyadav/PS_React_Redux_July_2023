import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { ProductModel } from "../../models/product.model";
import Rating from '../rating/rating.component';
import './productdetail.component.css';
import { error } from 'console';
import {useSelector} from 'react-redux';
import { AppState } from '../../redux/store/store';
import { ProductRequest } from '../../redux/slices/products.slices';

const ProductDetail:React.FC = () => {
  const { id } = useParams() || 1;
  const { products, loading } = useSelector(
    (store: AppState) => store.products,
  );

  const productData = (products.filter(product => product.id === Number(id)))[0];
  console.log("here" + id +"::"+ productData );
   return (
    <div className="card m-4">

    {
      
      
      productData &&  
      <div className="row g-0">
      <div className="col-md-8 image-container">
      <img
          src={productData.imageUrl}
          className="card-img-top"
          alt={productData.title}/>
      </div>
      <div className="col-md-4">
        <div className="card-body">
          <h5 className="card-title">{productData.title}</h5>
          <p className="card-text">{productData.description}</p>
          <p className="card-text">
            {" "}
            <Rating
              noofstars={productData.rating}
              color="orange"
            />{" "}
          </p>
  
          <p className="card-text">₹.{productData.price}</p>
          <button
            className="btn btn-outline-primary"
          >

            {productData.likes} <i className="fa-regular fa-thumbs-up"></i>
          </button>
  
          <button
            className="btn btn-outline-success mx-1 d-block my-2"
          >
            Add To Product
          </button>
        </div>
        </div>
      </div>
      
    }
   </div>
  )
}

export default ProductDetail
