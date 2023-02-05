import React from 'react'
import { Link } from '@reach/router'

import me from '../assets/millenium-falcon.png'
import dimo from '../assets/millenium-falcon.png'

export const AboutSidebar = () => {
  return (
    <aside className="post-sidebar">
      <div className="post-sidebar-card">
        <h2>Me</h2>
        <img src={me} alt="cicingik" />
      </div>
      <div className="post-sidebar-card">
        <h2>Dimo (Kitty)</h2>
        <img src={dimo} alt="cicingik" />
      </div>
      <div className="post-sidebar-card">
        <Link to="/josh">Memories of Josh</Link>
      </div>
    </aside>
  )
}
