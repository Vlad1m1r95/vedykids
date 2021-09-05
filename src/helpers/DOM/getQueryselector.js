const $query = (selector, mode) => {
  let dom = ''
  if (mode === 'all') {
    dom = document.querySelectorAll(selector)
  }
  else {
    dom = document.querySelector(selector)
  }
  return dom
}

export default $query