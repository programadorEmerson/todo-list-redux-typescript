import { Component, ReactNode } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface AppBarAppProps {
  children: ReactNode;
}

class AppBarApp extends Component<AppBarAppProps> {
  render() {
    const { children } = this.props;

    return (
      <Box sx={{ flexGrow: 1, minHeight: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Lista de tarefas
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        {children}
      </Box>
    );
  }
}

export default AppBarApp;
