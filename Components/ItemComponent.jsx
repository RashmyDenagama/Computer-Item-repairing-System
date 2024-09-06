import React, { useEffect, useState } from 'react';
import './itemCompoent.css';
import { CreateItem, getItem, updateItem } from '../Services/ItemServices';
import { useNavigate, useParams } from 'react-router-dom';

const ItemComponent = () => {
  const [name, Setname] = useState('');
  const [model, Setmodel] = useState('');
  const [price, Setprice] = useState('');
  const [status, Setstatus] = useState('');

  const { id } = useParams();
  const [error, setError] = useState({
    name: "",
    model: "",
    price: "",
    status: "",
  });
  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getItem(id)
        .then((response) => {
          Setname(response.data.name);
          Setmodel(response.data.model);
          Setprice(response.data.price);
          Setstatus(response.data.status);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveOrUpdateItems(e) {
    e.preventDefault();

    if (ValidateForm()) {
      const Items = { name, model, price, status };

      if (id) {
        updateItem(id, Items)
          .then((response) => {
            console.log(response.data);
            navigator('/Items');
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        CreateItem(Items)
          .then((response) => {
            console.log(response.data);
            navigator('/Items');
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function ValidateForm() {
    let valid = true;
    const errorCopy = { ...error };
    if (name.trim()) {
      errorCopy.name = '';
    } else {
      errorCopy.name = 'Item Name is Required';
      valid = false;
    }
    if (model.trim()) {
      errorCopy.model = '';
    } else {
      errorCopy.model = 'Item Model is Required';
      valid = false;
    }
    if (price.trim()) {
      errorCopy.price = '';
    } else {
      errorCopy.price = 'Price is Required';
      valid = false;
    }
    if (status.trim()) {
      errorCopy.status = '';
    } else {
      errorCopy.status = 'Status is Required';
      valid = false;
    }
    setError(errorCopy);
    return valid;
  }

  const pageTitle = () => {
    if (id) {
      return <h2 className='text-center'>Update Items</h2>;
    } else {
      return <h2 className='text-center'>Add Items</h2>;
    }
  };

  return (
    <div className='container'>
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <div className='card'>
            {pageTitle()}
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <label className='form-label'>Item Name:</label>
                  <input
                    type='text'
                    placeholder='Enter the Item Name'
                    name='name'
                    value={name}
                    className={`form-control ${error.name ? 'is-invalid' : ''} `}
                    onChange={(e) => Setname(e.target.value)}
                  />
                  {error.name && <div className='invalid-feedback'> {error.name}</div>}
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'>Item Model:</label>
                  <input
                    type='text'
                    placeholder='Enter the Item Model'
                    name='model'
                    value={model}
                    className={`form-control ${error.model ? 'is-invalid' : ''} `}
                    onChange={(e) => Setmodel(e.target.value)}
                  />
                  {error.model && <div className='invalid-feedback'> {error.model}</div>}
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'>Item price:</label>
                  <input
                    type='text'
                    placeholder='Enter the Price'
                    name='price'
                    value={price}
                    className={`form-control ${error.price ? 'is-invalid' : ''} `}
                    onChange={(e) => Setprice(e.target.value)}
                  />
                  {error.price && <div className='invalid-feedback'> {error.price}</div>}
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'>Item Status:</label>
                  <input
                    type='text'
                    placeholder='Enter the Status'
                    name='status'
                    value={status}
                    className={`form-control ${error.status ? 'is-invalid' : ''} `}
                    onChange={(e) => Setstatus(e.target.value)}
                  />
                  {error.status && <div className='invalid-feedback'> {error.status}</div>}
                </div>
                <button className='btn btn-success' onClick={saveOrUpdateItems}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
