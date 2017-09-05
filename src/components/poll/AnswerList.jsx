import React, { PropTypes } from 'react';
import AnswerContainer from '../../containers/poll/AnswerContainer';
import Answer from './Answer';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Panel from 'react-bootstrap/lib/Panel';

const AnswerList = ({ answers, questionId, handleClick, question, category }) =>
  <ListGroup style={{paddingTop: "3px"}}>
    {answers
      .filter(answer => answer.question_id == questionId)
      .map(answer =>
        <AnswerContainer
        key={answer.id}
        content={answer.content}
        onClick={handleClick}
        answer={answer}
        questionText={question}
        category={category}
      />)
      }
  </ListGroup>

AnswerList.propTypes = {
  questionId: PropTypes.number.isRequired,
  answers: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired
}

export default AnswerList;
