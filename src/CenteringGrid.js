import Grid from 'material-ui/Grid';
import React, { Component } from 'react';


class CenteringGrid extends Component {
  render() {
    return (
      <Grid container justify='center' alignItems='center' style={{height: '100%'} }>
        <Grid item xs={10} sm={8} md={6} style={{display: 'flex'}}>
          {this.props.children}
        </Grid>
      </Grid>
    );
  }
}

export default CenteringGrid;