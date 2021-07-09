const Wrapper = ({ children }) => {
  return children;
};

export default Wrapper;

// This is a custom react wrapper. We can use it the same way we use a react fragment. 
// We just have to create the custom wrapper like this and import it into our component.
// Then we wrap this element around our other elements. 
// It works exactly like React.Fragment></React.Fragment> or the shorthand <></>
