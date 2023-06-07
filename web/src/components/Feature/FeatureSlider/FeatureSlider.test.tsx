import { fireEvent, act } from '@testing-library/react'

import { render, screen } from '@redwoodjs/testing/web'

import { FeatureSlider } from './FeatureSlider'
import { data } from './FeatureSlider.mocks'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FeatureSlider', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders successfully', () => {
    expect(() => {
      render(<FeatureSlider features={data} />)
    }).not.toThrow()
  })

  it('click selects a specific slide', () => {
    render(<FeatureSlider features={data} />)
    const thirdButton = screen.getByTestId('slideNav-2')
    fireEvent.click(thirdButton)
    expect(screen.getByTestId('slide')).toHaveTextContent(data[2].title)
  })

  it('rotates to each slide by itself', () => {
    render(<FeatureSlider features={data} />)

    // Starting slide
    expect(screen.getByTestId('slide')).toHaveTextContent(data[0].title)

    // Second slide
    act(() => jest.advanceTimersByTime(10000))
    expect(screen.getByTestId('slide')).toHaveTextContent(data[1].title)
  })

  it('goes back to the beginning once it has reached the last slide', () => {
    render(<FeatureSlider features={data} />)

    // Click last button
    const totalSlides = data.length - 1
    const lastButton = screen.getByTestId(`slideNav-${totalSlides}`)
    fireEvent.click(lastButton)

    // Expect last button to be clicked
    expect(screen.getByTestId('slide')).toHaveTextContent(
      data[totalSlides].title
    )

    // Advance time
    act(() => jest.advanceTimersByTime(10000))

    // Expect the first slide to be  shown
    expect(screen.getByTestId('slide')).toHaveTextContent(data[0].title)
  })

  it('updates the navigation when it rotates', () => {
    render(<FeatureSlider features={data} />)

    // Expect first button to be active, second to be inactive
    expect(screen.getByTestId('slideNav-0')).toHaveClass('bg-tamarillo')
    expect(screen.getByTestId('slideNav-1')).toHaveClass('bg-montana')

    // Advance timer
    act(() => jest.advanceTimersByTime(10000))

    // Expect first button to be inactive, second to be active
    expect(screen.getByTestId('slideNav-0')).toHaveClass('bg-montana')
    expect(screen.getByTestId('slideNav-1')).toHaveClass('bg-tamarillo')
  })
})
