import React from 'react';
import {connect} from 'react-redux';
import {fetchChars} from '../actions';

class CharList extends React.Component {

  componentDidMount() {
    this.props.fetchChars()
  }

  render() {
    console.log("Desde render", this.props.characters)
    return(
      <div className="col-md-6">CharList</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { characters: state.characters }
}

export default connect(mapStateToProps, { fetchChars })(CharList);