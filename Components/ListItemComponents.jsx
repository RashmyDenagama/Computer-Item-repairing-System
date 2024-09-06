import React, { useEffect, useState } from 'react';
import './ListItemComponents.css'; 
import { listItems, deleteItem } from '../Services/ItemServices';
import { useNavigate } from 'react-router-dom';

const ListItemComponents = () => {
  const [Items, setItems] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllItems();
  }, []);

  function getAllItems() {
    listItems()
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  function addNewItem() {
    navigator('/add-Item');
  }

  function updateItem(id) {
    navigator(`/edit-item/${id}`);
  }

  function removeItem(id) {
    console.log(id);

    deleteItem(id)
      .then((response) => {
        getAllItems();
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className='container-re'>
      <button className='btn btn-primary' onClick={addNewItem}>Add Items</button>
      <table class="table">
        <thead>
          <tr>
            <th>Item Id</th>
            <th>Item Name</th>
            <th>Model</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Items.map(Item => (
            <tr key={Item.id}>
              <td>{Item.id}</td>
              <td>{Item.name}</td>
              <td>{Item.model}</td>
              <td>{Item.price}</td>
              <td>{Item.status}</td>
              <td>
                <div className="btn-group">
                  <button className='btn btn-info' onClick={() => updateItem(Item.id)}>Update</button>
                  <button className='btn btn-danger' onClick={() => removeItem(Item.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListItemComponents;
