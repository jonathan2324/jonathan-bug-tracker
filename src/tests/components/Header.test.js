import React from 'react'
import {Header} from '../../components/HeaderPage'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

test('should render header correctly', () => {

    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    
})
//should call start logout on button click

//Login page test file- should call startLogin to button click
