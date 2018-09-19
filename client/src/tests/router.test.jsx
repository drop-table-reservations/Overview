import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../router';

describe('App Component Testing', () => {
  const routes = shallow(<Routes />);

  test('should render component', () => {
    expect(routes.exists()).toBeTruthy();
  });
});
