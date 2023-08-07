import React, {useState} from 'react'
import { ProductModel } from "../../../models/product.model";
import './newProduct.css';
import { useForm } from "react-hook-form";
type NewProductProps = {
    addNewProduct: (input:ProductModel) => void;
}
type NewProductInput = {
  id: number;
  title: string;
  price: number;
  rating: number;
  likes: number;
  imageUrl: string;
  description: string;
}
const NewProductWithHook = (props:NewProductProps) => {
    const {register, handleSubmit,  formState: { errors }} = useForm<ProductModel>();
   

  return (
    <div className="row">
      <div className="col-md-6">
    <form  onSubmit={handleSubmit((data) => props.addNewProduct(data))}>
    <div className="form-group"> 
    <label htmlFor='pid'>Product Id:</label>
      <input className="form-control"
        type="number" 
        id="pid" {...register("id", {required: true} )}

      />
      {/* errors will return when field validation fails  */}
      {errors.id && <span style={{color:'red'}}>This field is required</span>}
      </div>
      <div className="form-group">   
      <label htmlFor='title'>Product Title:</label>
        <input className="form-control"
          type="text" 
          id="title" {...register("title")}
        />
       </div>
       <div className="form-group">  
        <label htmlFor='price'>Product price:</label>
        <input className="form-control"
          type="number" 
          id="price" {...register("price")}
        />
        </div>
        <div className="form-group"> 
        <label htmlFor='rating'>Product rating:</label>
        <input className="form-control"
          type="number" 
          id="rating" {...register("rating")}
        />
        </div>
        <div className="form-group"> 
        <label htmlFor='likes'>Product likes:</label>
        <input className="form-control"
          type="text" 
          id="likes" {...register("likes")}
        />
        </div>
        <div className="form-group"> 
        <label htmlFor='image'>Product imageUrl:</label>
        <input className="form-control"
          type="text" 
          id="image" {...register("imageUrl")}
        />
        </div>
        <div className="form-group"> 
        <label htmlFor='desc'>Product Description:</label>
        <input className="form-control"
          type="text" 
          id="desc" {...register("description")}
        />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>

    </form>
      </div>
      </div>

  )
}

export default NewProductWithHook;
