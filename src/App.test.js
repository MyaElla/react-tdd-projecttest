import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

const AppC = shallow(<App />)

it('renders without crashing', () => {
  expect(AppC).toMatchSnapshot()
});
