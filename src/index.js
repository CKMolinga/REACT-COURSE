import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL600_SR600,400_.jpg"
    alt="Oh, the Places You'll Go!"
  />
)
const Title = () => {
  return <h2>Oh, the Places You'll Go!</h2>
}
const Author = () => <h4>Author</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
