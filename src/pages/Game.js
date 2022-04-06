import React from 'react';
import { connect } from 'react-redux';

class Game extends React.Component {
  render() {
    return (
      <div>
        GAME
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token.token,
});

export default connect(mapStateToProps)(Game);
