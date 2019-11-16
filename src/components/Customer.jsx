import React from 'react';

import Option from './Option';
import { Column, Row } from 'simple-flexbox';

var customerOptions = [
  {
    name: 'Drink Beer!',
    description: 'View all beer options and make a selection.',
    img: ''
  },
  {
    name: 'Browse Beer History',
    description: 'Check out all the beers we ever had on tap!',
    img: ''
  }
];
function Customer() {

  return (
    <div className="fillArea bubble-background">
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1>Welcome Customer</h1>
        </Row>
        <Row vertical='center'>
          {customerOptions.map((option, index) =>
            <Option
              name={option.name}
              description={option.description}
              img={option.img}
              key={index} />
          )};
        </Row>
      </Column>
    </div>
  );
}

export default Customer;