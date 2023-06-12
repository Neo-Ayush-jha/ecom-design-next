import Header from './Composers/Header'
import './globals.css'

import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Composers/Footer';



export const metadata = {
  title: 'Flipcart',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-200"><Header/>{children}<Footer/></body>
    </html>
  )
}