import React, { Component } from "react";
import Context from "./Context";

import kr from "locale/kr.json";
import en from "locale/en.json";

export default class TranslatedString extends Component {
  state = {
    langs: {
      kr,
      en
    }
  };

  render() {
    const { langs } = this.state;
    const { string } = this.props;

    return (
      <Context.Consumer>
        {value => langs[value.locale][string]}
      </Context.Consumer>
    );
  }
}
