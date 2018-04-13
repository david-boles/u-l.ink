import CssBaseline from 'material-ui/CssBaseline';
import Fade from 'material-ui/transitions/Fade';
import React, { Component } from 'react';
import 'typeface-roboto';
import MainHeader from './Header.js';
import LinkCreator from './LinkCreator.js';

const fadeTime = 200;

class CreationApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <LinkCreator parent={this}/>,
      showContent: true
    }
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {
          <React.Fragment>
            <MainHeader/>

            <Fade in={this.state.showContent} timeout={fadeTime}>
              <div style={{height: '100%'}}>
                { this.state.content }
              </div>
            </Fade>

          </React.Fragment>
        }
      </React.Fragment>
    );
  }

  changeContent(newContent) {
    this.setState({showContent: false});
    setTimeout(function() {
      this.setState({content: newContent, showContent: true});
    }.bind(this), fadeTime);
  }

}

export default CreationApp;
