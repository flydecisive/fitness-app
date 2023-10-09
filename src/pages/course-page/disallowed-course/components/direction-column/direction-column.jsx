function DirectionColumn({ elements }) {
  const list = elements.map((element, index) => <li key={index}>{element}</li>);
  return <ul>{list}</ul>;
}

export default DirectionColumn;
