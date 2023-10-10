import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Root = styled('div')(({ theme }) => ({
  fontSize: 100,
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {
  return (
    <Root style={{fontSize: 12, color: "black"}}>
      <Divider
        fontSize={1}
        sx={{
          "&::before, &::after": {
            borderColor: "secondary.light",
          },
        }}
      >
        OR
      </Divider>
    </Root>
  );
}