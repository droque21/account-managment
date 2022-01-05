import React from 'react';
import { shallow } from "enzyme";
import { Home } from '../pages/home';

describe('Test App Entry point', function () {
  it('after 2 clicks the button should have a number 2', function () {
    const wrapper = shallow(<Home/>);
    const button = wrapper.find("button");
    expect(wrapper.find("input").text()).toEqual("");
  });
});