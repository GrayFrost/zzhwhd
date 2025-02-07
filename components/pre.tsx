import { ReactNode } from 'react'

const Pre = ({ children }: { children: ReactNode }) => {
  return (
    <pre className="text-red-500">{children}</pre>
  )
}

export default Pre;