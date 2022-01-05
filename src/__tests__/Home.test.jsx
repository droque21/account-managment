import React from 'react'
import { shallow, mount } from "enzyme"
import { Home } from '../pages/home'

describe('Test Home Page', function () {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Home/>)
  })

  it('should have an empty input', () => {
    expect(wrapper.find("input").prop('value')).toEqual("")
  })

  it('should update the input and has a new value', () => {
    const input = wrapper.find("input")
    expect(wrapper.find("input").prop('value')).toEqual("")
    input.simulate('change', {target: {value: 'David'}})
    expect(wrapper.find("input").prop('value')).toEqual("David")
  })

  it('should not add a user with empty value', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find("div.user-bar").length).toEqual(0)
    const form = wrapper.find("form")
    form.simulate('submit', {
      preventDefault: () => {}
    })
    expect(wrapper.find("div.user-bar").length).toEqual(0)
  })

  it('should add a new user with name David', () => {
    const wrapper = mount(<Home />);
    const input = wrapper.find("input")
    input.simulate('change', {target: {value: 'David'}})
    expect(wrapper.find("div.user-bar").length).toEqual(0)
    const form = wrapper.find("form")
    form.simulate('submit', {
      preventDefault: () => {}
    })
    expect(wrapper.find("div.user-bar").length).toEqual(1)
    expect(wrapper.find("div.user-bar#DAVID p").text()).toEqual('DAVID')
  })
})