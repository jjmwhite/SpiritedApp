import React from 'react';
import BottleCardVert from '../bottles/bottle_card_vert';

class DistilleryShow extends React.Component {

  componentDidMount() {
    this.props.fetchDistillery(this.props.distilleryId);
  }

  render() {
    if (this.props.distillery === null || (_.isEmpty(this.props.regions))) {
      return (
        <div className='loading'>Loading...</div>
      )
    }

    const { distillery } = this.props
    const allBottles = this.props.bottles.map(bottle => {
      return <BottleCardVert
        key={`${bottle.name}-card-vert`}
        bottle={bottle}
        distillery={distillery}
        regions={this.props.regions}/>
    })

    return (
      <>
        <div className='bottle-index-container'>
          {allBottles}
        </div>
      </>
    )

  }
}

export default DistilleryShow;