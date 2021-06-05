import React from 'react';

import ContentHero from '../components/ContentHero'

const getComponent = (type) => {
  switch(type) {
    case 'ContentHero':
      return ContentHero
  }
}

export const renderComponent = (id, type, props) => {
  const Component = getComponent(type)

  if(Component) {
    return (
      <Component {...props} key={id} />
    )
  }
}