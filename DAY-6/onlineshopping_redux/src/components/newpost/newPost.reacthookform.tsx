import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux';
import { addPost } from "../../redux/slices/posts.slice";

import { useNavigate } from "react-router-dom";
import { PostModel } from "../../models/post.model";
// type NewProductProps = {
//   AddANewProduct: (newProduct: ProductModel) => void;
// };

const NewPostWithHookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostModel>({ mode: "all" }); // returns an object
 
 
  return (
    <>
      <header>
        <h1>New Post</h1>
      </header>
      <div className="d-flex justify-content-center align-items-center m-2">
        <form
          onSubmit={handleSubmit(
            ({ id, userId, title, body}) => {
              let newProduct = new PostModel(
                id,
                userId,
                title,
                body
              );
              dispatch(addPost({id, userId, title, body}));
            },
          )}
        >
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductId">Id : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtProductId"
                {...register("id", { required: true })}
              />

              {errors.id && <p style={{ color: "red" }}>Id is Required!</p>}
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtUserId">userId : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtUserId"
                {...register("userId", { required: true })}
              />

              {errors.userId && <p style={{ color: "red" }}>userId is Required!</p>}
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductTitle">Title : </label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="txtProductTitle"
                {...register("title", {
                  required: true,
                  maxLength: {
                    value: 20,
                    message: "You exceeded 20 chars limit!",
                  },
                })}
              />
              {errors.title && (
                <p style={{ color: "red" }}>
                  {errors.title.type === "maxLength"
                    ? errors.title.message
                    : "Title is Required!"}
                </p>
              )}
            </div>
          </div>

          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductDescription">Description : </label>
            </div>
            <div className="col-md-4">
              <textarea
                id="txtProductDescription"
                cols={25}
                rows={5}
                {...register("body")}
              ></textarea>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4"></div>
            <div className="col-md-6">
              <button className="btn btn-success my-1">Add Post</button>
              <button className="btn btn-primary my-1" onClick={() => navigate('/dashboard/posts')}>Back to Posts</button>
          
            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default NewPostWithHookForm;
