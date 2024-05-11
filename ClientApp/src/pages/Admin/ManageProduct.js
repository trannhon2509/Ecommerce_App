import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { APILink } from '../../config/storeAPI';

function ManageProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get(APILink.GetProduct);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='container-fluid p-0 table-responsive-sm'>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">BlogType</th>
            <th scope="col">Rating</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((blog, index) => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.blogTypeId}</td>
              <td>{blog.rating}</td>
              <td>
                <button className='sec-btn-sm mx-1 mb-2'>Edit</button>  
                <button className='sec-btn-sm mx-1 mb-2'>Update</button>  
                <button className='sec-btn-sm mx-1 mb-2'>Delete</button>  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageProduct;
