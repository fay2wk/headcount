import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import mainTheme from '../../constants/mainTheme';
import { Step, Stepper, StepButton, StepContent, StepLabel } from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import AnswerList from './AnswerList';


class QuestionList extends Component{
  state = {
   stepIndex: 0,
 };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 4) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
      const {stepIndex} = this.state;
      if (stepIndex > 0) {
        this.setState({stepIndex: stepIndex - 1});
      }
    };

  renderStepActions(index) {
    return (
      <div style={{margin: '12px 0'}}>
        {index < 4 && (
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        )}
        {index > 0 && (
        <FlatButton
          label="Back"
          disableTouchRipple={true}
          disableFocusRipple={true}
          onTouchTap={this.handlePrev}
        />
      )}
    </div>
   );
  }

  render(){
    const { questions, answers, onClick, submitAnswers, selectedAnswers, isLoggedin, questionIndex } = this.props;

    const {stepIndex} = this.state;

    return(
      <MuiThemeProvider muiTheme={mainTheme}>
        <div id="question-list"
        style={{ paddingLeft: '10px', paddingBottom: "5px", maxWidth: '520px', font: "400 26px/36px 'Montserrat'", color: "black" }}
        >
          <Stepper
            activeStep={stepIndex}
            linear={false}
            orientation="vertical"
            answers={answers}
          >
          {questions.map((question, index) =>
            <Step
              key={question.id}
              >
              <StepLabel
                style={{font: "500 18px/24px 'Montserrat'", color: "black"}}
                icon={index + 1}
                >
                {question.question_text}
              </StepLabel>
                <StepContent>
                  <AnswerList
                    question={question.question_text}
                    answers={answers}
                    questionId={question.id}
                  />
                  {this.renderStepActions(index)}
                </StepContent>
            </Step>
            )}
          </Stepper>

        <div id="questions"
            style={{ paddingLeft: "10px", paddingTop: "10px"}}>
        {isLoggedin
          ? <Link
            to="/user"
            className="btn btn-primary btn-block"
            onClick={() => {
              submitAnswers(selectedAnswers)
            }}
            >
            Submit
          </Link>
        : <Link
           to="/signup"
           className="btn btn-primary btn-block"
           onClick={() => {
             submitAnswers(selectedAnswers)
           }}
           >
           Submit
         </Link>
        }
      </div>
     </div>
    </MuiThemeProvider>
   )
  }
}

QuestionList.propTypes = {
  answers: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired
}

export default QuestionList;
