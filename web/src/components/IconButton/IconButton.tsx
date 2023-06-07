import { useState } from 'react'

import { Icon, type IconProps } from '../Icon/Icon'

interface IconButtonProps extends IconProps {
  toggled?: boolean
  handleClick: () => void
}

function IconButton({
  handleClick,
  name,
  size,
  toggled = false,
}: IconButtonProps) {
  const [isToggled, setIsToggled] = useState<boolean>(toggled)

  const toggleClick = () => {
    setIsToggled((prevValue) => !prevValue)
    handleClick()
  }
  return (
    <button
      onClick={toggleClick}
      className={`center h-8 w-8 rounded-full border-2 ${
        isToggled
          ? `border-turquiose bg-turquoise text-black`
          : `border-dolphin text-dolphin`
      }`}
    >
      <Icon name={name} size={size} />
    </button>
  )
}

export { IconButton, IconButtonProps }
