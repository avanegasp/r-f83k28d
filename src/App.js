// import React, { Fragment, useState } from 'react';
//
// export const App = () => {
//
//   const [count, setCount] = useState(0)
//
//   return (
//     <Fragment>
//       <span className="value">{count}</span>
//       <button
//         id="inc"
//         onClick={ () => setCount(count + 1) }
//       >
//         Incrementa
//       </button>
//     </Fragment>
//   );
// };

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  render() {
    return (
      <div>
      <span className="value">{this.state.clicks }</span>
        <button id="inc" onClick={this.IncrementItem}>Incrementa</button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default App;
