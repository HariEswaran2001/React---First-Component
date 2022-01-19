import React from 'react';
import ReactDom from "react-dom";

// Nested components, React tools

function Booklist() {
  return(
    <section>
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Picture></Picture>
      <Title></Title>
      <Author></Author>
    </article>
  );
}

const Picture = () =>(
  <img src = 'https://ichef.bbci.co.uk/news/999/cpsprodpb/6D5A/production/_119449972_10.jpg' alt = ''/>
)
const Title = () => <h1>A Pleasant Evening</h1>

const Author = () => <h4>Amelia Hepworth</h4>

ReactDom.render(<Booklist />,document.getElementById('root'));