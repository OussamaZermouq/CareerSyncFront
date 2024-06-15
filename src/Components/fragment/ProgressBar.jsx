import * as React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
export default function ProgressNumber(props) {
  return (
        <CircularProgress variant='soft' size="md" thickness={1} determinate value={100}>
          <h1>{props.number}</h1>
        </CircularProgress>
  );
}
