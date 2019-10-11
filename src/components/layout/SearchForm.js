import React, { Component } from 'react'

class SearchForm extends Component {
    render() {
        return (
                <form>
  <div className="form-group">
    <label for="booksearch">Search for a Book</label>
    <input onChange={this.props.handelChange} name="booktitle"
     type="text" className="form-control" id="booktitle" placeholder="Give me a book..."/><button type="submit" class="btn btn-primary">Search fro a book</button>
  </div>
  </form>
        )
    };
};

export default SearchForm