import { Box, Container, Grid, Link, Paper, Stack, Typography } from '@mui/material';

export default function Intro() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" color="text.secondary" paragraph mt={5}>
        {"A 21\u02E2\u1D57 century continuation of the "}
        <Link color="inherit" href="https://en.wikipedia.org/wiki/Alexander_von_Humboldt">
          {"naturgem\u00E4lde"}
        </Link>
      </Typography>
    </Container>
  );
}