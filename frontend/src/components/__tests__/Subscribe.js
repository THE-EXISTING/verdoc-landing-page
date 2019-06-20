import React from 'react'
import renderer from 'react-test-renderer'

import Subscribe from '../section/Subscribe'

describe('Subscribe', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Subscribe />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
