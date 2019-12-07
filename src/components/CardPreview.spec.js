import React from 'react'
import { render } from '@testing-library/react'
import { CardPreview } from './CardPreview'

it('Renders the expected term', () => {
  const expectedTerm = 'this is a test'
  const { getByText } = render(<CardPreview term={expectedTerm} />)
  expect(getByText(expectedTerm)).toBeInTheDocument()
})
