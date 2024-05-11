import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { APILink } from '../../config/storeAPI';

function ManageOrder() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(APILink.GetOrder);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(APILink.GetUsers);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : '';
  };

  return (
    <div className='container-fluid p-0 table-responsive-sm'>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>User</th>
            <th scope='col'>OrderDate</th>
            <th scope='col'>Total</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{getUserName(item.userId)}</td>
              <td>{item.orderDate}</td>
              <td>{item.rating}</td>
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

export default ManageOrder;