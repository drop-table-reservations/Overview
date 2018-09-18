import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';

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
