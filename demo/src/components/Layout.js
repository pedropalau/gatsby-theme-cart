import React from 'react'

import '../main.css'

import Header from './Header'

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="container mx-auto px-6">{children}</div>
      </main>
    </React.Fragment>
  )
}
