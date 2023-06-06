import { Link } from '@redwoodjs/router'

import { Poster, type PosterProps } from '../Poster/Poster'

interface SliderProps {
  label: string
  slides: PosterProps[]
  slideSize: 'small' | 'medium'
  viewAllLink?: string
}

const Slider = ({ label, slides, slideSize, viewAllLink }: SliderProps) => {
  return (
    <>
      <div>
        <h2>{label}</h2>
        {viewAllLink && <Link to={viewAllLink}>View All</Link>}
      </div>
      <div>
        {slides &&
          slides.map((slide, index: number) => (
            <div key={index}>
              <Poster
                alt={slide.alt}
                src={slide.src}
                subheading={slide.subheading}
                size={slideSize}
              />
            </div>
          ))}
      </div>
    </>
  )
}

export { Slider, SliderProps }
