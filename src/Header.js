import Code from '@material-ui/icons/Code';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import React, { Component } from 'react';

// eslint-disable-next-line
const LinkToGitHub = props => <a href="https://github.com/david476/u-l.ink" {...props} />;

class MainHeader extends Component {
  render() {
    return (
      <AppBar position='fixed' style={{backgroundColor: 'inherit', boxShadow: 'none'}}>
      <Toolbar>
        <Typography variant="title" style={{flex: 1}}>
          µ-Link
        </Typography>
        
        <Tooltip id="tooltip-icon" title="View on GitHub">
          <IconButton aria-label="View on GitHub" component={LinkToGitHub}>
            <Code/>
          </IconButton>
        </Tooltip>
        
  
      </Toolbar>
    </AppBar>
    );
  }
  
}

export default MainHeader;