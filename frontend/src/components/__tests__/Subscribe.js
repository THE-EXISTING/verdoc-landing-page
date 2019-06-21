import React from 'react'
import renderer from 'react-test-renderer'
import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'
import Subscribe from '../section/Subscribe'

afterEach(cleanup)

describe('Render', () => {
  it('Subscribe => renders without crashing', () => {
    const { unmount } = render(<Subscribe />)
    unmount()
  })

  it('Subscribe => renders correctly', () => {
    const tree = renderer.create(<Subscribe />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  //   it('TextField => renders without crashing', () => {
  //     const { unmount } = render(<TextField />)
  //     unmount()
  //   })

  //   it('TextField => renders correctly', () => {
  //     const tree = renderer.create(<TextField />).toJSON()
  //     expect(tree).toMatchSnapshot()
  //   })

  //   it('textfield styles', () => {
  //     const { getByTestId } = render(<TextField />)
  //     const txtfield = getByTestId('textfield')
  //     fireEvent.change(txtfield, { target: { value: 'poon' } })
  //     expect(txtfield).toHaveStyleRule('background-color', '#fff')
  //   })
})

// describe('Semantic and Style', () => {})
