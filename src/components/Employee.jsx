import React from 'react';
import ManageKegs from '../img/KegManager.jpg';
import VendBeers from '../img/KegManager.jpg';
import EmployeeOption from './EmployeeOption';
import { Column, Row } from 'simple-flexbox';

var employeeOptions = [
  {
    name : 'Manage Kegs',
    description : 'View, Create, Edit, Delete Kegs from your Inventory.',
    img : {ManageKegs}
  },
  {
    name : 'Vend Beers',
    description : 'See your inventory and sling that giggle juice.',
    img : {VendBeers}
  }
];
function Employee() {

  return (
      <div className="bubble-background">
          <Column flexGrow={1}>
              <Row horizontal='center'>
                    <h1>Welcome Employee</h1>
              </Row>
              <Row vertical='center'>
                {employeeOptions.map((option, index) =>
                <EmployeeOption
                    name={option.name}
                    description={option.description}
                    img={option.img}
                    key={index}/>
                )};        
              </Row>    
          </Column>
      </div>
  );
}

export default Employee;