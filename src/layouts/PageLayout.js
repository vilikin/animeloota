import React from 'react'

export const PageLayout = ({ children }) => (
  <div className="container">
      <div className="text-center animeloota-header">
        Animeloota
      </div>
      {children}
  </div>
);

export default PageLayout
