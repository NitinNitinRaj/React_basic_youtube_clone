import React, { Component } from "react"

class SearchBar extends Component {
  state = { term: "" }

  onInputChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  onFormSubmit = (evt) => {
    evt.preventDefault()
    this.props.onSearch(this.state.term)
    this.setState({ term: "" })
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="term">Video Search</label>
            <input
              id="term"
              name="term"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search video..."
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
