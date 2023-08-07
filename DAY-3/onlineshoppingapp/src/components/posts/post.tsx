import React, { useEffect, useState } from 'react';

type postModal = {
    userId: number,
    id:number,
    title:string,
    body:string
}
const Posts:React.FC = () => {
const [posts, sePosts] = useState<postModal[]>([]);

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).
    then(data =>{
        console.log(data);
    sePosts(data);
    });
}, []);

return (
    <>
      <header>
        <h1>List Of Posts</h1>
      </header>
      <main className="row">
        <ul className='list-group'>
        {posts?.map(post => (
           <li key={post.id} className='list-group-item'>{post.title}</li>
        ))}
        </ul>
      </main>
    </>
  );

}
export default Posts;