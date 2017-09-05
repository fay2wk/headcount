import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPoll } from '../../actions/poll/index'
import { Link } from 'react-router';
import QuestionList from '../../components/poll/QuestionList';
import QuestionListContainer from '../../containers/poll/QuestionListContainer';
import AppBar from 'material-ui/AppBar';

class PollContainer extends Component {
  componentWillMount() {
    this.props.fetchPoll();
  }

  renderQuestion() {
    return (
      <div id="question-list-container">
        <QuestionListContainer
          style={{marginTop: "-5px"}}
          questions={this.props.questions} answers={this.props.answers}/>
      </div>
    )
  }

  render() {
    return (
      <div id="poll-container">
        <AppBar
          title="Something"
          showMenuIconButton={false}
        />
        <ul className="list-group">
          {this.renderQuestion()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, questions, answers } = state.poll;

  return {
    poll: state.poll,
    name,
    questions,
    answers
  }
}

export default connect(mapStateToProps, { fetchPoll })(pollContainer);
