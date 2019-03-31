import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ContestCard from './ContestCard';
import Loader from '../common/Loader'
import { connect } from 'react-redux';
import * as contestsActions from '../../actions/contestActions'
import { bindActionCreators } from 'redux';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
  },
  gridListTile: {
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class ContestList extends React.Component{  
  componentDidMount(){
    this.props.actions.fetchContests();
  }

  render() {
    
    const { error, loading, items } = this.props.contests;
    const { classes } = this.props;

    if(error){
      return <InputLabel error>{error.message}</InputLabel>
    }

    if(loading){
      return <Loader/>
    }

    return (
      <div className={classes.root}>
      <GridList className={classes.gridList} cols={3} cellHeight='auto'>
        {items.map(contest => (
          <GridListTile key={ contest.id } className={classes.gridListTile}>
            <ContestCard contest={ contest } />
          </GridListTile>
        ))}
      </GridList>
    </div>
    )
  };
}

ContestList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>{
  return {
    contests: state.contests
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(contestsActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ContestList));
