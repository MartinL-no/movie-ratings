import { useEffect } from 'react'

import { Icon } from '../Icon'
import { Poster } from '../Poster/Poster'
import { Ruler } from '../Ruler/'
import { slides as data } from '../Slider/Slider.mocks'

interface NavProps {
  handleClick: () => void
}

const Nav = ({ handleClick }: NavProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClick()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return (
    <div
      data-testid="nav"
      className="h-screen w-screen overflow-scroll bg-almostBlack bg-[url('/images/flowers.png')] bg-left-bottom bg-no-repeat"
    >
      <div className="mx-auto grid max-w-pageWidth grid-cols-[minmax(0,_1fr)_minmax(0,_3fr)] gap-x-5 gap-y-8">
        <div className="col-span-2 pt-8">
          <button
            onClick={handleClick}
            className="font-medium-uppercase float-right flex items-center gap-x-3 hover:text-lemonLime"
          >
            Close
            <Icon name="close" size={48} />
          </button>
        </div>

        <Ruler />
        <Ruler />
        <div>
          <nav className="flex h-full flex-col justify-between">
            <ul>
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#">Play Lists</a>
              </li>
              <li className="nav-item">
                <a href="#">Watch Lists</a>
              </li>
            </ul>
            <ul>
              <li className="nav-item">
                <a href="#">Settings</a>
              </li>
              <li className="nav-item">
                <a href="#">Log Out</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold">Recently Viewed</h3>
          <div>
            <ul className="grid grid-cols-5 gap-5">
              {data &&
                data.map((item, index) => (
                  <li key={index}>
                    <Poster size="small" src={item.src} alt={item.alt} />
                  </li>
                ))}
            </ul>
          </div>

          <Ruler />
          <Ruler />
        </div>
      </div>
    </div>
  )
}

export { Nav, NavProps }
