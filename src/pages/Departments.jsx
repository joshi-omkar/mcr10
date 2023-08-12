import React from 'react'
import './departments.css'
import { useNavigate } from 'react-router-dom';
import { useInventory } from '../contexts/InventoryContext';

const Departments = () => {

  const navigate = useNavigate()
  const { data, inventory, dispatch } = useInventory();

    const Card = ({ title }) => {
        const handleOnClick = () => {
          dispatch({
            type: "FILTER_DEPARTMENT",
            department: title,
            inventoryData: data,
          });
          navigate('/products')
        }
        return (
          <div onClick={handleOnClick} className="departments-card">
            <h2>{title}</h2>
          </div>
        );
      };

  return (
    <div className='departments'>
        <Card title={'Kitchen'} />
        <Card title={'Clothing'} />
        <Card title={'Toys'} />
    </div>
  )
}

export default Departments