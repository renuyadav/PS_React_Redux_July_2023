import React, {useState} from 'react'
import { ProductModel } from "../../../models/product.model";
import './newProduct.css';
type NewProductProps = {
    addNewProduct: (input:ProductModel) => void;
}
const NewProduct = (props:NewProductProps) => {
    const [inputs, setInputs] = useState<ProductModel>(new ProductModel());

    const handleChange = (event:any) => {
        const inputElement = event.target;
      const name = inputElement.name ;
      const value = inputElement.value;
      setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit =(event:any) =>{
    console.log("handlesubmit called");
    event.preventDefault();
    console.log(inputs);
    props.addNewProduct(inputs);
    }

  return (
    <form action="#" onSubmit={handleSubmit}>
    <div className="form-group"> 
    <label htmlFor='pid'>Product Id:</label>
      <input className="form-control"
        type="number" 
        id="pid" name="id"
        value={inputs.id} 
        onInput={handleChange}
      />
      </div>
      <div className="form-group">   
      <label htmlFor='title'>Product Title:</label>
        <input className="form-control"
          type="text" 
          id="title" name="title"
          value={inputs.title}
          onInput={handleChange}
        />
       </div>
       <div className="form-group">  
        <label htmlFor='price'>Product price:</label>
        <input className="form-control"
          type="number" 
          id="price" name='price'
          value={inputs.price}
          onInput={handleChange}
        />
        </div>
        <div className="form-group"> 
        <label htmlFor='rating'>Product rating:</label>
        <input className="form-control"
          type="number" 
          id="rating" name='rating'
          value={inputs.rating}
          onInput={handleChange}
        />
        </div>
        <div className="form-group"> 
        <label htmlFor='likes'>Product likes:</label>
        <input className="form-control"
          type="text" 
          id="likes" name='likes'
          value={inputs.likes}
          onInput={handleChange}
        />
        </div>
        <div className="form-group"> 
        <label htmlFor='image'>Product imageUrl:</label>
        <input className="form-control"
          type="text" 
          id="image" name="imageUrl"
          value={inputs.imageUrl}
          onInput={handleChange}
        />
        </div>
        <div className="form-group"> 
        <label htmlFor='desc'>Product Description:</label>
        <input className="form-control"
          type="text" 
          id="desc" name='description'
          value={inputs.description}
          onInput={handleChange}
        />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>

    </form>
      

  )
}

export default NewProduct
