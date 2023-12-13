import { ReactNode } from 'react'
import ReactDom from 'react-dom'

interface Props {
  children: ReactNode
}

const Portal = ({ children }: Props) => {
  const el = document.getElementById('portal') as HTMLElement
  return ReactDom.createPortal(children, el)
}

export default Portal
