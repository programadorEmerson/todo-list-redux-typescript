import { Component } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Slide, { SlideProps } from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';

import { AlertRoot, ContentContainer } from './styles';

type TransitionProps = Omit<SlideProps, 'direction'>;

interface LoadingProps {
  trigger: boolean;
  message?: string;
}

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

class Loading extends Component<LoadingProps> {
  render() {
    const { trigger, message = 'Carregando...' } = this.props;

    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={trigger}
        TransitionComponent={TransitionDown}
      >
        <AlertRoot icon={false}>
          <ContentContainer>
            <CircularProgress />
            <Typography variant="button" ml={2}>
              {message}
            </Typography>
          </ContentContainer>
        </AlertRoot>
      </Snackbar>
    );
  }
}

export default Loading;
