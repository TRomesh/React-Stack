import React from 'react';
import AppBar from 'material-ui/AppBar';

const AppBarStyle ={
  margin:'-8',
  position: 'absolute',
  alignSelf: 'stretch',
  left: 0,
  right: 0,
}

class AppBarExampleIcon extends React.Component {

   render(){
      return (
      <div>
        <AppBar style={AppBarStyle} showMenuIconButton={false}/>
      </div>
      );
   }
}


export default AppBarExampleIcon;
