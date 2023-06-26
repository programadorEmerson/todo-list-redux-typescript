import { Component } from 'react';
import { connect } from 'react-redux';

import DataGrid from '../components/DataGrid';
import DialogData from '../components/DialogData';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import TitleSection from '../components/TitleSection';

import { AppProps } from '../redux/reducers/tasks.reducer';

class App extends Component {
  render() {
    const { fetching } = this.props as AppProps;
    return (
      <Layout>
        <Loading trigger={fetching} message='Por favor aguarde...' />
        <TitleSection />
        <DataGrid />
        <DialogData />
      </Layout>
    );
  }
}

const mapStateToProps = (state: AppProps) => {
  return { fetching: state.fetching };
};

export default connect(mapStateToProps)(App);
