import React from 'react';
import BottleCardVert from '../bottles/bottle_card_vert';
import CreateBottleButton from '../bottles/create_bottle_button';
import { Link } from 'react-router-dom';

class DistilleryShow extends React.Component {

  componentDidMount() {
    this.props.fetchDistillery(this.props.distilleryId);
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.distId != prevProps.match.params.distId) {
      this.props.fetchDistillery(this.props.match.params.distId);
      window.scrollTo(0,0);
    };
  };

  render() {
    if (this.props.distillery === null || (_.isEmpty(this.props.regions))) {
      return (
        <div className='loading'>Loading...</div>
      )
    };

    const { distillery } = this.props;
    const region = this.props.regions[distillery.region_id];
    const allBottles = this.props.bottles.map(bottle => {
      return <BottleCardVert
        key={`${bottle.name}-card-vert`}
        bottle={bottle}
        distillery={distillery}
        regions={this.props.regions}/>
    });

    return (
      <>
        <div className='show-background'>
          <main className='show-body'>
            <div className='distillery-show-section'>
              <img src={distillery.photoUrl} alt={distillery.name} />
              <div className='distillery-show-details'>
                <h1>{distillery.name}</h1>
                <Link to={`/regions/${region.id}`}>{region.name}</Link>
                <p>{distillery.description}</p>
              </div>
              <div className='bottle-index-container'>
                {allBottles}
              </div>
              <CreateBottleButton />
            </div>
          </main>
        </div>
      </>
    )
  };
};

export default DistilleryShow;