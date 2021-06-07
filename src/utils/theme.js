export const theme = {
  colors: {
    red: '#D91E47',
    green: '#6CB644',
    blue: '#556DC6',
    yellow: '#F5CD2C',
    white: '#FFFFFF',
    black: '#101010',
  },
  background: {
    red: '#D91E47',
    blue: '#556CC5',
    green: '#6CB644',
    yellow: '#F5CD2C',
    grey: '#F1F1F1',
  },
  shapes: {
    red: '#D11A43',
    green: '#6CB644',
    blue: '#556DC6',
    yellow: '#F5CD2C',
  },
  mediaQueries: {
    largePhone: '@media (min-width: 400px)',
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1025px)',
    largeDesktop: '@media (min-width: 1441px)',
  }
}

export const updateBackgroundColor = (backgroundColor) => {
  document.body.classList.remove("redBlue")
  document.body.classList.remove("blueGreen")
  document.body.classList.remove("greenYellow")
  document.body.classList.remove("yellowRed")

  if (backgroundColor) {
    document.body.classList.add(backgroundColor)
  }
}