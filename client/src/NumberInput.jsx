import React, { PureComponent } from 'react';

class NumberInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: this.format(props.value) };
  }

  format(number) {
    return number != null ? number.toString() : '';
  }

  unformat(string) {
    const val = parseInt(string, 10);
    return Number.isNaN(val) ? null : val;
  }


  onChange(e) {
    if (e.target.value.match(/^\d*$/)) {
      this.setState({ value: e.target.value });
    }
  }

  onBlur(e) {
    const { onChange } = this.props;
    const { value } = this.state;
    onChange(e, this.unformat(value));
  }

  render() {
    return (
      <input
        type="text"
        {...this.props}
        value={this.state.value}
        onBlur={e => this.onBlur(e)}
        onChange={e => this.onChange(e)}
      />
    );
  }
}

export default NumberInput;
