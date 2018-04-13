import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import React, { Component } from 'react';
import CreatedLinkDetails from './CreatedLinkDetails.js';
import db from './index.js';

class LinkCreator extends Component {
  static uLinkChars = '23456789abcdefghijkmnopqrstuvwxyz';
  constructor(props) {
    super(props);
    this.state = {
      working: false,
      validURL: false,
      showError: false,
      currentURL: ''
    };
  }
  render() {
    return (
      <Grid container justify='center' alignItems='center' style={{height: '100%'} }>
        <Grid item xs={10} sm={8} md={6} style={{display: 'flex'}}>
          <TextField placeholder='URL' autoFocus error={this.state.showError} onChange={this.handleChange} disabled={this.state.working} style={{marginRight: '10px', flexGrow: 1, minWidth: 0}} inputProps={{'aria-label': 'URL'}}/>
          <Button variant='raised' color='primary' onClick={this.handleButton} disabled={this.state.working || !this.state.validURL}>Shorten</Button>
        </Grid>
      </Grid>
    );
  }

  handleButton = () => {
    var url = this.state.currentURL;
    if(LinkCreator.validateURL(url)) {
      this.setState({working: true});
      this.createULink(url, 6);

    }else {
      //TODO Snackbar
    }
    this.setState({disable: true});
  }

  handleChange = (event) => {
    var isValid = LinkCreator.validateURL(event.target.value);
    this.setState({currentURL: event.target.value, validURL: isValid, showError: event.target.value.length !== 0 && !isValid});
  }

  createULink(url, length) {
    var uLink = LinkCreator.generateRandomULink(length);
    
    var docRef = db.collection("links").doc(uLink);
    docRef.get().then(function(doc) {
        if (doc.exists) {
          this.createULink(url, length++);//TODO test
        } else {
          if(url.indexOf('://') === -1) {
            url = 'http://' + url;
          }

          db.collection("links").doc(uLink).set({
              link: url
          })
          .then(function(docRef) {
            this.props.parent.changeContent(<CreatedLinkDetails ulink={'u-l.ink#' + uLink} parent={this.props.parent}/>);
          }.bind(this))
          .catch(function(error) {
            console.error(error);
            this.setState({working: false});
            //TODO snackbar
          }.bind(this));
        }
    }.bind(this)).catch(function(error) {
      console.error(error);
      this.setState({working: false});
      //TODO snackbar
    }.bind(this));
  }

  static validateURL(url) {
    // Copyright (c) 2010-2013 Diego Perini, MIT licensed
    // https://gist.github.com/dperini/729294
    // see also https://mathiasbynens.be/demo/url-regex
    // modified to allow protocol-relative URLs
    // and modified by David Boles to optionally match no protocol
    return /^((?:(?:(?:https?|ftp):)?\/\/)?)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( url );
  }

  static generateRandomULink(length) {
    var result = '';
    for (var i = length; i > 0; --i) result += LinkCreator.uLinkChars[Math.floor(Math.random() * LinkCreator.uLinkChars.length)];
    return result;
  }
}

export default LinkCreator;