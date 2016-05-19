import React, { PropTypes, Component } from 'react';

export class Loading extends Component {
  props: Props;

  render () {
    const style = {
      fill: this.props.color,
      height: this.props.height,
      width: this.props.width,
      textAlign: 'center',
      margin: '0 auto'
    };
    return (
        <div style={style}>
          <img src="/img/loading-bars.svg" type="img/svg+xml" />
        </div>
    )
  }
};
Loading.propTypes = {
  color: PropTypes.string,
  delay: PropTypes.number,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};
Loading.defaultProps = {
  color: '#fff',
  delay: 1000,
  height: 64,
  width: 64
};

export default Loading;

