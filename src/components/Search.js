import React, { Component, PropTypes } from 'react';

export default class Search extends Component {
  handleSubmit(event) {
    event.preventDefault();
    // const { onSearch } = this.props;
    // onSearch();
    console.log("submit form");
    this.props.onSearch(this.refs.search.value.trim());
  }

  render() {
    return (
      <form style={{maxWidth:"750px"}} onSubmit={(event) => this.handleSubmit(event)}>
        <div className="input-group">
          <input type="text" placeholder="Search" ref="search" className="form-control" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Search</button>
          </span>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
}