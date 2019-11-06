import React from 'react'

import Header from './Header'

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  )
}
