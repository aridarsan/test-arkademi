import React from 'react';
import { Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 10,
    margin: '.5rem 0',
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 10,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const ulasan = [
  {
    value: 70,
    rating: 5,
  },
  {
    value: 15,
    rating: 4,
  },
  {
    value: 5,
    rating: 3,
  },
  {
    value: 5,
    rating: 2,
  },
  {
    value: 5,
    rating: 1,
  },
];

const review = [
  {
    rating: 5,
    teks: 'Sangat membantu bagaimana cara menguasai bahasa inggris dengan mudah, saya setuju bahwa bahasa inggris bukanlah bahasa yang sulit untuk dipahami, asalkan kita paham bagaimana caranya, berkat pembelajaran ini sedikit banyak sudah membantu saya.',
    nama: 'Amanda',
    waktu: 'Sehari yang lalu',
  },
  {
    rating: 5,
    teks: 'Manfaat kelas online sangat terasa sekali, terutama untuk mempermudah bagi pemula seperti saya. Terutama bagi yang ingin mencoba dalam dunia kerja',
    nama: 'Julia',
    waktu: '2 hari yang lalu',
  },
  {
    rating: 5,
    teks: 'The course is very good for beginners. I learnt a lot during the course but still there is a lot more to learn.',
    nama: 'Skolastika',
    waktu: 'Sehari yang lalu',
  },
  {
    rating: 5,
    teks: 'Manfaat kelas online sangat terasa sekali, terutama untuk mempermudah bagi pemula seperti saya. Terutama bagi yang ingin mencoba dalam dunia kerja',
    nama: 'Bintang',
    waktu: '2 hari yang lalu',
  },
];

export default function Ulasan() {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <h4 style={{ margin: '2rem 0 1rem' }}>
            Ulasan Kelas{' '}
            <span style={{ color: 'rgba(28, 29, 32, 0.398683)' }}>
              (8313 Penilaian)
            </span>
          </h4>
        </Grid>

        {/* Rating */}
        <Grid container spacing={2}>
          <Grid item lg={3} xs={12}>
            <h1 style={{ fontSize: '6rem', textAlign: 'center' }}>4.5</h1>
            <Grid container justifyContent='center'>
              <Rating name='read-only' value={5} size='large' readOnly />
            </Grid>
          </Grid>

          <Grid item lg={9} xs={12}>
            {ulasan.map((item, index) => (
              <Grid container spacing={1} key={index}>
                <Grid item lg={9} xs={9}>
                  <BorderLinearProgress
                    variant='determinate'
                    value={item.value}
                  />
                </Grid>

                <Grid item lg={2} xs={2}>
                  <Rating
                    name='read-only'
                    value={item.rating}
                    size='small'
                    readOnly
                  />
                </Grid>

                <Grid item lg={1} xs={1}>
                  <h5>{item.value}%</h5>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Review */}
        {review.map((item, index) => (
          <Grid container style={{ marginTop: '3rem' }} key={index}>
            <Grid item xs={12}>
              <Rating
                name='read-only'
                value={item.rating}
                size='small'
                readOnly
              />
              <p>{item.teks}</p>

              <Grid container spacing={2}>
                <Grid item lg={2}>
                  <h5>{item.nama}</h5>
                </Grid>

                <Grid item lg={3}>
                  <p className="m-0">
                    {' '}
                    <span>{item.waktu}</span>
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
