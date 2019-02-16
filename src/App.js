import React, { Component } from 'react';
import rawData from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rawData: rawData,
      candidates: rawData.join().replace(/,/g, '\n'),
      luckyMan: '',
      number: 0,
    };
  }

  onChange = (e) => {
    this.setState({
      candidates: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container layout">
          <h2 className="mb-20">KKday Lucky Draw</h2>
          <div className="content">
            <div className="form-group mr-40">
              <label htmlFor="candidates">Candidates:</label>
              <textarea
                id="candidates"
                className="form-control"
                rows="16"
                cols="24"
                value={this.state.candidates}
                onChange={this.onChange}>
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="lucky-man">Lucky Men:</label>
              <textarea
                id="lucky-man"
                className="form-control"
                rows="16"
                cols="24"
                value={this.state.luckyMan}
                onChange={this.onChange}>
              </textarea>
            </div>
          </div>
          <footer className="mt-20">
            <button
              type="button"
              className="btn btn-warning">抽獎</button>
            <input
              type="text"
              className="choose-input"
              placeholder="input numbers for choosing" />
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
