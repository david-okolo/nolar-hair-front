import { FC, ReactElement } from 'react';

export const IconSwitcher: FC<{
  toggler: boolean
  icons: Array<ReactElement>
}> = (props) => {

  const { icons, toggler } = props;

  return (
    toggler ? icons[1] : icons[0]
  )
}