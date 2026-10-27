// export default Student;

// Definition of Props in React
// Props (short for properties) are used to pass data from a parent component to a child component. Props are read-only, meaning the child should not modify them directly.

function Student(props) {
  return <h1>Hello, {props.name}!</h1>;
}
