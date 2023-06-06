import { render, screen } from '@redwoodjs/testing/web'

import { Slider } from './Slider'
import { slides } from './Slider.mocks'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Slider', () => {
  const label = 'Most Popular'
  const slideSize = 'small'
  const viewAllLink = '/movies'

  it('renders successfully', () => {
    expect(() => {
      render(
        <Slider
          label={label}
          slides={slides}
          slideSize={slideSize}
          viewAllLink={viewAllLink}
        />
      )
    }).not.toThrow()
  })

  it('displays the section title', () => {
    render(
      <Slider
        label={label}
        slides={slides}
        slideSize={slideSize}
        viewAllLink={viewAllLink}
      />
    )
    expect(screen.getByText(label)).toBeInTheDocument()
  })

  it('does not display the view all link', () => {
    render(<Slider label={label} slides={slides} slideSize={slideSize} />)
    expect(screen.queryByText('View All')).not.toBeInTheDocument()
  })

  it('displays the view all link', () => {
    render(
      <Slider
        label={label}
        slides={slides}
        slideSize={slideSize}
        viewAllLink={viewAllLink}
      />
    )
    expect(screen.getByText('View All')).toBeInTheDocument()
  })

  it('links out to the correct place', () => {
    render(
      <Slider
        label={label}
        slides={slides}
        slideSize={slideSize}
        viewAllLink={viewAllLink}
      />
    )
    expect(screen.getByText('View All')).toHaveAttribute('href', viewAllLink)
  })

  it('displays all the slides', () => {
    render(
      <Slider
        label={label}
        slides={slides}
        slideSize={slideSize}
        viewAllLink={viewAllLink}
      />
    )
    slides.forEach((slide) => {
      expect(screen.getByAltText(slide.alt)).toBeInTheDocument()
    })
  })
})
