import CssBaseline from 'material-ui/CssBaseline';
import Fade from 'material-ui/transitions/Fade';
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import 'typeface-roboto';
import MainHeader from './Header.js';
import db from './index.js';

const defaultFadeTime = 200;

class RedirectApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent: false,
      content: RedirectApp.retrievingComponent(),
      fadeTime: 1000
    }
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {
          <React.Fragment>
            <MainHeader/>

            <Fade in={this.state.showContent} timeout={this.state.fadeTime}>
              <div style={{height: '100%'}}>
                { this.state.content }
              </div>
            </Fade>

          </React.Fragment>
        }
      </React.Fragment>
    );
  }
  componentWillMount() {
    this.tryToRedirect(0);
  }

  tryToRedirect(delay) {
    setTimeout(function() {
      if(db) {
        var docRef = db.collection("links").doc(this.props.uLink);
        docRef.get().then(function(doc) {
            if (doc.exists) {
              this.changeContent(RedirectApp.redirectingComponent(), defaultFadeTime);
              window.location.replace(doc.data().link);
            } else {
              this.changeContent(RedirectApp.notFoundComponent(), defaultFadeTime);
            }
        }.bind(this)).catch(function(error) {
          console.error(error);
          this.changeContent(RedirectApp.errorComponent(), defaultFadeTime);
        }.bind(this));
      }else {
        this.tryToRedirect(100);
      }
    }.bind(this), delay);
  }

  componentDidMount() {
    this.setState({showContent: true});
  }

  changeContent(newContent, fadeTime) {
    this.setState({showContent: false, fadeTime: {fadeTime}});
    setTimeout(function() {
      this.setState({content: newContent, showContent: true});
    }.bind(this), fadeTime);
  }

  static retrievingComponent() {
    return (
      RedirectApp.grid(
        <Typography variant='display1' style={{marginTop: '40px'}}>
          Retrieving redirect...
        </Typography>
      )
    );
  }

  static errorComponent() {
    return (
      RedirectApp.grid(
        <Typography variant='display1' style={{marginTop: '40px'}}>
          An error occured! Please try again.
        </Typography>
      )
    );
  }

  static notFoundComponent() {
    return (
      RedirectApp.grid(
        <Typography variant='display1' style={{marginTop: '40px'}}>
          µ-Link not found! Check your spelling.
        </Typography>
      )
    );
  }

  static redirectingComponent() {
    return (
      RedirectApp.grid(
        <Typography variant='display1' style={{marginTop: '40px'}}>
          Redirecting!
        </Typography>
      )
    );
  }

  static grid(content) {
    return(
      <div style={{ overflowX: 'hidden', height: '100%' }}>
        <Grid container direction='column' justify='space-around' alignItems='center' style={{height: '100%'} }>
          <Grid item/>

          <Grid item>
            { content }
          </Grid>

          <Grid item/>
        </Grid>
      </div>
    );
  }

}

export default RedirectApp;
