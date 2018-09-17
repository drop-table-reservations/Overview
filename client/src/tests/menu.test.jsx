import React from 'react';
import { shallow } from 'enzyme';
import sampleData from './sampleData.json';
import Menu from '../menu';

describe('Menu Component Testing', () => {
  const menu = shallow(<Menu menus={sampleData.menus} />);

  test('should render component', () => {
    expect(menu.exists()).toBeTruthy();
  });
});
