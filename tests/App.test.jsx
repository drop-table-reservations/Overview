import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/app';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component Testing', () => {
  const app = shallow(<App />);

  test('should render component', () => {
    expect(app.exists()).toBeTruthy();
  });

  test('should render header, overview, and menu', () => {
    expect(app.find('overview')).toBeDefined();
    expect(app.find('header')).toBeDefined();
    expect(app.find('menu')).toBeDefined();
  });
});
