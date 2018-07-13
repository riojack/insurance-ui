import * as React from 'react';
import { connect } from 'react-redux';

class DashboardComponent extends React.Component {
  render() {
    return <div><button>Log out</button></div>
  }
}

const mapStateToProps = () => { return {}; };
const mapDispatchToProps = () => {
  return {};
};

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);

export {Dashboard, DashboardComponent}
