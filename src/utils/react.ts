import ReactDOM from 'react-dom/server'

export function jsxToString(jsx: JSX.Element) {
  return ReactDOM.renderToStaticMarkup(jsx)
}

export function jsxToHTML(jsx: JSX.Element): HTMLElement {
  const string = jsxToString(jsx)
  const template = document.createElement('template')
  template.innerHTML = string
  return template.content.firstChild as HTMLElement
}
