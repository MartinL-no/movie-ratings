import { Icon } from '../Icon'

interface HomeHeaderProps {
  // Props
}

const HomeHeader = ({}: HomeHeaderProps) => {
  return (
    <header className="flex justify-between">
      <a href="/">
        <img src="/images/logo.svg" alt="Rotten Ratings" />
      </a>
      <button className="mb-auto mt-0 flex items-center gap-x-5 hover:text-lemonLime">
        MENU
        <Icon name="hamburger" />
      </button>
    </header>
  )
}

export { HomeHeader, HomeHeaderProps }
