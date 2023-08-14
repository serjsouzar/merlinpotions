import { Inter, Oswald, EB_Garamond } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const ebgar = EB_Garamond({
  subsets: ['latin'],
  style: 'italic',
})

export const oswald = Oswald({
  weight: ['400','600'],
  subsets: ['latin'],
})