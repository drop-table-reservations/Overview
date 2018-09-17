import React from 'react';
import { shallow } from 'enzyme';
import sampleData from './sampleData.json';
import Overview from '../overview';

describe('Overview Component Testing', () => {
  const overview = shallow(<Overview info={sampleData} />);

  test('should render component', () => {
    expect(overview.exists()).toBeTruthy();
  });
});
