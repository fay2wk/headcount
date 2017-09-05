import React, { Component, PropTypes } from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  block: {
    maxWidth: 500,
  }
};

const Answer = ({ content, answer, onClick, selectAnswer, question }) =>
  <div style={styles.block}>
    <Checkbox
      style={{marginTop: "10px", marginBottom: "16px"}}
      labelStyle={{font: "400 16px/22px 'Montserrat'"}}
      label={content}
      onClick={() => {
        selectAnswer(answer)
      }}
    />
  </div>

Answer.propTypes = {
  content: PropTypes.string.isRequired,
  answer: PropTypes.object.isRequired
}

export default Answer;
