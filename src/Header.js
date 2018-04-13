import ReportProblem from '@material-ui/icons/ReportProblem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import React, { Component } from 'react';

// eslint-disable-next-line
const LinkToGitHubIssues = props => <a href="https://github.com/david476/u-l.ink/issues" {...props} />;

class MainHeader extends Component {
  render() {
    return (
      <AppBar position='fixed' style={{backgroundColor: 'inherit', boxShadow: 'none'}}>
      <Toolbar>
        <Typography variant="title" style={{flex: 1}}>
          <a href="https://github.com/david476/u-l.ink" style={{color: 'inherit', textDecoration: 'inherit'}}>µ-Link</a>
        </Typography>
        
        <Tooltip id="tooltip-icon" title="Report Problem">
          <IconButton aria-label="Report Problem" component={LinkToGitHubIssues}>
            <ReportProblem/>
          </IconButton>
        </Tooltip>
        
  
      </Toolbar>
    </AppBar>
    );
  }
  
}

export default MainHeader;