import React from 'react';
import { shallow } from 'enzyme';
import sampleData from './sampleData.json';
import Header from '../header';

describe('Header Component Testing', () => {
  const header = shallow(<Header headerData={sampleData.header} />);

  test('should render component', () => {
    expect(header.exists()).toBeTruthy();
  });
});
