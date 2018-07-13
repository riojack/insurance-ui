import * as React from 'react';
import { connect } from 'react-redux';

class DashboardComponent extends React.Component {
  triggerLogout() {
    this.props.handleLogout();
  }

  render() {
    return <div><button onClick={this.triggerLogout.bind(this)}>Log out</button></div>
  }
}

const mapStateToProps = () => { return {}; };
const mapDispatchToProps = () => {
  return {
    handleLogout: () => { }
  };
};

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);

export { Dashboard, DashboardComponent }
