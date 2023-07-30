import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

export default function SectionIntro() {
  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Grid container spacing={1}>
        <Grid item key={1} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: '56.25%',
              }}
              image="https://source.unsplash.com/random?wallpapers"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Community
              </Typography>
              <Typography>
                Providing networks, outreach, awareness, and camaraderie for environmental enthusiasts
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item key={2} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: '56.25%',
              }}
              image="https://source.unsplash.com/random?wallpapers"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Modeling
              </Typography>
              <Typography>
                Visualizing, synthesizing, and improving upon environmental datasets
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item key={3} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: '56.25%',
              }}
              image="https://source.unsplash.com/random?wallpapers"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Mapping
              </Typography>
              <Typography>
                Extending the interactability and power of digital maps
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}