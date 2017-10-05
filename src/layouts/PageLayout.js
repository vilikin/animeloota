import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className="container">
      <div className="text-center animeloota-header">
        Animeloota
      </div>
      {children}
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout
