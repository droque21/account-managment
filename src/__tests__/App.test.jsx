import React from 'react';
import { shallow } from "enzyme";
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App'

describe('Test App Entry point', function () {

  it('should renders app properly', () => {
    const {getByText} = render(<App />)
  
    const count = getByText(/count is/)
    const react = getByText(/learn react/i)
    const vite = getByText(/hello vite/i)
  
    expect(count).toBeInTheDocument()
    expect(react).toBeInTheDocument()
    expect(vite).toBeInTheDocument()
  })

  it('after 2 clicks the button should have a number 2', function () {
    const wrapper = shallow(<App/>);
    const button = wrapper.find("button");
    expect(wrapper.find("p.mario").text()).toEqual("Hello Vite + React!");
    expect(button.text()).toEqual("count is: 0");
    button.simulate('click');
    button.simulate('click');
    expect(wrapper.find("button").text()).toEqual("count is: 2");

  });

  it('should renders app properly', () => {
    
  }) 
});