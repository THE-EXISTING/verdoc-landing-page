import React from 'react'
import renderer from 'react-test-renderer'

import Line from '../section/Line'

describe('Line', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Line />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
