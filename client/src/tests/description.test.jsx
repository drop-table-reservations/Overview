import React from 'react';
import { shallow } from 'enzyme';
import sampleData from './sampleData.json';
import Description from '../description';

describe('App Component Testing', () => {
  const description = shallow(<Description description={sampleData.description} />);

  test('should render component', () => {
    expect(description.exists()).toBeTruthy();
  });
});
