import React from 'react';
import AppBar from 'material-ui/AppBar';

const AppBarStyle ={
  margin:'-10px',
  position: 'absolute',
  alignSelf: 'stretch',
  left: 0,
  right: 0,
}

class AppBarExampleIcon extends React.Component {

   render(){
      return (
      <div>
        <AppBar style={AppBarStyle}/>
      </div>
      );
   }
}


export default AppBarExampleIcon;
