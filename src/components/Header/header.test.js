//import { sum } from './component';


// import React from 'react';
// import Header from './component';
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   const tree = renderer
//     .create(<Header />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });



test("Sum Function Test",()=>{
  const sum = require('./component')
  expect(sum(3,4)).toBe(7)
});