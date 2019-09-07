import React from "react";

const defaultValue = { locale: "kr" };
const Context = React.createContext(defaultValue);

const withContext = WrappedComponent => props => (
  <Context.Consumer>
      {value => <WrappedComponent {...props} lang={value}/>}
  </Context.Consumer>
);

export default Context;
export { withContext };