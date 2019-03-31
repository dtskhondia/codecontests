import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Format from '../../helpers/Format';

const styles = {
  card: {
    margin: 20,
    height: 260
  },
  CardActionArea: {
    height: '100%'
  },
  cardContent: {
    height: '20%',
    paddingTop: 0,
    backgroundColor: '#2196F3'
  },
  cardFooter: {
    height: '10%',
    paddingTop: '5%',
    backgroundColor: '#2196F3'
  },
  media: {
    height: '45%'
  }
};

function ContestCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card} raised = { true }>
      <CardActionArea className={classes.CardActionArea} href={ props.contest.url } target='blank'>
        <CardMedia
          component='img'
          alt={ props.contest.site }
          className={classes.media}
          src = {`${require('../../assets/images/'+props.contest.site + '.png')}`}
          title={ props.contest.site }
        />
        <CardContent className={classes.cardContent}>
          <Typography align='center' variant='title'>
            { props.contest.name }
          </Typography>
        </CardContent>
        <CardContent className={classes.cardFooter}>
          <Typography variant='subheading' align='center'>
            { Format.toDate(props.contest.startTime)}
          </Typography>
          <Typography variant='subheading' align='center'> 
            { Format.toDate(props.contest.endTime)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ContestCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContestCard);
