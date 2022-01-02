/**
 * FaqPage
 * @description faq page, linked from footer
 * @returns {node} FaqPage component
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { faqData } from 'data/faqData';
import { makeStyles } from '@material-ui/core/styles';
import { LightBlue, LightGreyBg } from 'theme';

const useStyles = makeStyles(() => ({
  container: {
    padding: '80px 16px 0',
    overflow: 'hidden',
    maxWidth: '800px',
    margin: '0 auto 10px'
  },
  accordionWrapper: {
    padding: '40px 0 0'
  },
  accordion: {
    boxShadow: '0 4px 2px 0 rgba(204, 224, 255, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)'
  },
  accordionSummary: {
    backgroundColor: LightBlue
  },
  accordionText: {
    backgroundColor: LightGreyBg
  }
}));

export default function FaqPage() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.accordionWrapper}>
        <Box marginBottom="40px">
          <Typography paragraph variant="h2" align="center">
            Frequently Asked Questions
          </Typography>
        </Box>
        {faqData.map((data) => {
          return (
            <Accordion key={data.id} defaultExpanded={data.id === 1} className={classes.accordion}>
              <AccordionSummary
                className={classes.accordionSummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography variant="h4">{data.title}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionText}>
                <Typography variant="body1" className={classes.accordionText}>
                  {data.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
}
