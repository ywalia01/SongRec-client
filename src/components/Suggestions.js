import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      <a href={"https://open.spotify.com/track/" + r.id}>{r.name}</a>
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions;
