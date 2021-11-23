import React from "react";

import Store from "./Store";

import {
  DemoWrapper,
  DemoHeaderWrapper,
  DemoContentWrapper,
} from "./StyledComponents";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = new Store();
  }

  render() {
    return (
      <DemoWrapper>
        <DemoHeaderWrapper>
          This is demo header wrapper, title is {`${this.store.demoTitle}`}
        </DemoHeaderWrapper>
        <DemoContentWrapper>This is demo content wrapper</DemoContentWrapper>
      </DemoWrapper>
    );
  }
}

export default Demo;
