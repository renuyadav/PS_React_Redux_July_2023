import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { ProductModel } from "../../models/product.model";
import Rating from '../rating/rating.component';
import './productdetail.component.css';
import { error } from 'console';

const ProductDetail:React.FC = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(new ProductModel());
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetch(`http://localhost:3500/products/${id}`).then((res)=>{
      if(res.ok){
        return res.json();
      }
      throw new Error("Error in fetching");
    }).then(data =>{
      console.log("data of product" + data)
      setProductData(data);
    }).catch((err) =>{
      setError(err);
    })
  }, [id])
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
            {/* {this.productData.likes}{" "} */}
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
    {error && <h1>{error}</h1>}
   </div>
  )
}

export default ProductDetail
