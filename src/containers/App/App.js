import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getTypesThunk} from '../../thunks/getTypesThunk';
import { Card } from '../../components/Card/Card'
import { Loading } from '../../components/Loading/Loading';

export class App extends Component {

  async componentDidMount() {
    this.props.getTypesThunk()

  }

  render() {
    const { data, isLoading } = this.props;
    if (isLoading) {
      return <Loading />
    } else {
      const cards = data.map((card) => {
        return <Card card={card} key={card.id} />
      })
  
      return (
        <div className='App'>
          <h1 className='header'> POKéDEX </h1>
          <div className="card-container">
          {cards}
          </div>
        </div>
      );
    }

  }
}

export const mapStateToProps = (state) => ({
  data: state.types,
  isLoading: state.isLoading,
})

export const mapDispatchToProps = (dispatch) => ({
  getTypesThunk: () => dispatch(getTypesThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)


