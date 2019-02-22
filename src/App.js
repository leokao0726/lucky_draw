import React, { Component } from 'react';
import rawData from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rawData,
      choosedNumber: [],
      candidates: rawData.join().replace(/,/g, '\n'),
      luckyPeople: '',
      number: 0,
    };
  }

  onChangeChooseNumber = e => {
    this.setState({
      number: +e.target.value,
    });
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.onChooseCandidates();
    }
  }

  onChooseCandidates = () => {
    const {number, rawData} = this.state;
    const choosedNumber = [];

    if (!number || number <= 0) {
      alert('Plz input correct number');
      return;
    }

    if (number > rawData.length) {
      alert('input error: numbers are super than candidates');
      return;
    }

    let randomNumber = 0;
    for (let i = 0; i < number; i++) {
      randomNumber = this.getRandomNum();

      while (choosedNumber.indexOf(randomNumber) !== -1) {
        randomNumber = this.getRandomNum();
      }

      choosedNumber.push(randomNumber);
    }

    this.updateData(choosedNumber);
    this.resetChooseNumber();
  }

  getRandomNum() {
    const {rawData} = this.state;
    const maxNum = rawData.length;

    return Math.floor(Math.random() * Math.floor(maxNum));
  }

  updateData(choosedNumber) {
    const {rawData} = this.state;
    const choosedPeople = choosedNumber.map(item => rawData[item]);
    const leftChooser = rawData.filter(item => !choosedPeople.includes(item));

    this.setState({
      choosedNumber,
      luckyPeople: choosedPeople.join().replace(/,/g, '\n'),
      rawData: leftChooser,
      candidates: leftChooser.join().replace(/,/g, '\n'),
    });
  }

  resetChooseNumber() {
    this.setState({
      number: 0,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container layout">
          <h1 className="mb-20 title">2019 KKday Spring Party</h1>
          <div className="content">
            {/* <div className="form-group mr-40">
              <label htmlFor="candidates">
                Candidates : <span className="candidate-number"> {this.state.rawData.length} </span>人
              </label>
              <textarea
                id="candidates"
                className="form-control"
                rows="16"
                cols="24"
                value={this.state.candidates}
                readOnly>
              </textarea>
            </div> */}
            <div className="form-group">
              <div htmlFor="candidates" className="mb-20">
                Candidates : <span className="candidate-number"> {this.state.rawData.length} </span>
              </div>
              {/* <label htmlFor="lucky-man">Lucky Men</label> */}
              <div className="text-area-layout">
                <textarea
                  id="lucky-man"
                  className="form-control lucky-man"
                  rows="16"
                  cols="40"
                  value={this.state.luckyPeople}
                  readOnly>
                </textarea>
              </div>
            </div>
          </div>
          <footer>
            <input
              type="Number"
              className="choose-input"
              value={this.state.number}
              onChange={this.onChangeChooseNumber}
              onKeyPress={this.handleKeyPress} />
            <button
              type="button"
              className="btn btn-warning draw"
              onClick={this.onChooseCandidates}>
              抽 獎
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
