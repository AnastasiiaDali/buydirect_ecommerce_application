/**
 * OurStoryPage
 * @description our story page, linked from footer
 * @returns {node} OurStoryPage component
 */

import React from 'react';
import OurStorySlider from 'components/OurStorySlider/OurStorySlider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    padding: '80px 16px 0',
    maxWidth: '800px',
    margin: '0 auto 10px'
  },
  text: {
    margin: '20px 0 25px'
  }
}));

export default function OurStoryPage() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box margin="40px 0 30px">
        <Typography className={classes.text} paragraph variant="h2" align="center">
          Our Story
        </Typography>
        <Typography className={classes.text} paragraph variant="h2" align="left">
          What is our mission
        </Typography>
        <Typography className={classes.text} paragraph variant="body1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
        </Typography>
        <OurStorySlider />
        <Typography className={classes.text} paragraph variant="h2">
          How we started
        </Typography>
        <Typography className={classes.text} paragraph variant="body1" align="justify">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia
        </Typography>
      </Box>
    </Box>
  );
}
