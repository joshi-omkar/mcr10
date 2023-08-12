import React from 'react'
import './departments.css'

const Departments = () => {

    const Card = ({ title }) => {
        return (
          <div className="departments-card">
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