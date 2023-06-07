import { useState } from 'react'

import { Icon } from '../Icon'
import { Nav } from '../Nav'

interface HomeHeaderProps {
  // Props
}

const HomeHeader = ({}: HomeHeaderProps) => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  const handleClick = () => setIsNavShowing((prevValue) => !prevValue)

  return (
    <header className="flex justify-between">
      <a href="/">
        <img src="/images/logo.svg" alt="Rotten Ratings" />
      </a>
      <button
        onClick={handleClick}
        className="mb-auto mt-0 flex items-center gap-x-5 hover:text-lemonLime"
      >
        MENU
        <Icon name="hamburger" />
      </button>
      <div className="fixed top-0 z-50">
        {isNavShowing && <Nav handleClick={handleClick} />}
      </div>
    </header>
  )
}

export { HomeHeader, HomeHeaderProps }
