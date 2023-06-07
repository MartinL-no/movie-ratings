import { Icon } from '../Icon'
import { Poster } from '../Poster/Poster'
import { Ruler } from '../Ruler/'
import { slides as data } from '../Slider/Slider.mocks'

interface NavProps {
  // Props
}

const Nav = ({}: NavProps) => {
  return (
    <div>
      <div>
        <button>
          Close
          <Icon name="close" size={48} />
        </button>
        <Ruler />
        <Ruler />
        <div>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Play Lists</a>
              </li>
              <li>
                <a href="#">Watch Lists</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">Log Out</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Recently Viewed</h3>
          <div>
            <ul>
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
