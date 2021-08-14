import React from 'react';
import { Grid, Button, Card, CardContent } from '@material-ui/core';
import logo from '../Images/logo-small.png';
import Carousel from 'react-grid-carousel';
import kelas from '../Images/kelas.png';
import PersonIcon from '@material-ui/icons/Person';
import StarIcon from '@material-ui/icons/Star';
import styled from 'styled-components';

const kartu = [
  {
    image: kelas,
    judul: 'Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..',
    harga: '149.000',
    rating: 5,
    murid: 2500,
  },
  {
    image: kelas,
    judul: 'Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..',
    harga: '149.000',
    rating: 4.5,
    murid: 2500,
  },
  {
    image: kelas,
    judul: 'Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..',
    harga: '149.000',
    rating: 5,
    murid: 2500,
  },
  {
    image: kelas,
    judul: 'Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..',
    harga: '149.000',
    rating: 4.5,
    murid: 2500,
  },
];

export default function Kelas() {
  return (
    <React.Fragment>
      <Grid container>
        <H4>Kelas Serupa</H4>
      </Grid>

      <Grid container className="mb-3">
        <Grid item xs={12}>
          <Carousel cols={4} rows={1} gap={10} autoplay={2000} loop>
            {kartu.map((item, index) => (
              <Carousel.Item key={index}>
                <Card className="kartu">
                  <CardContent>

                    {/* Thumbnail */}
                    <div>
                      <img
                        src={item.image}
                        width='100%'
                        alt='kelas'
                      />
                    </div>
                    <p className="bold">{item.judul}</p>

                    {/* Student */}
                    <Grid container>
                      <Grid item xs={6}>
                        <Grid container>
                          <Grid item xs={2}>
                            <StarIcon style={{ color: '#F7D400' }} />
                          </Grid>

                          <Grid item xs={9}>
                            <p
                              style={{ fontWeight: '400', marginLeft: '.5rem' }}
                            >
                              {item.rating}
                            </p>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={6}>
                        <Grid container>
                          <Grid item xs={2}>
                            <PersonIcon className="color-icon"
                            />
                          </Grid>

                          <Grid item xs={9}>
                            <p
                              style={{ fontWeight: '400', marginLeft: '.5rem' }}
                            >
                              {item.murid}
                            </p>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* Account */}
                    <Grid
                      container
                      spacing={1}
                      alignItems='center'
                      style={{
                        margin: '.3rem 0',
                        borderBottom: '1px solid #3333',
                        borderTop: '1px solid #3333',
                        marginBottom: '1rem',
                      }}
                    >
                      <Grid item xs={2} style={{ marginTop: '.5rem' }}>
                        <img
                          src={logo}
                          width='90%'
                          style={{ bottom: 0 }}
                          alt='logo'
                        />
                      </Grid>

                      <Grid item xs={10}>
                        <a href="/">
                          <h5 style={{ fontWeight: '600', color: "#1C1D20", opacity: "0.8" }}>ARKADEMI</h5>
                        </a>
                      </Grid>
                    </Grid>

                    {/* Price */}
                    <p
                      style={{
                        fontWeight: '600',
                        fontSize: '1rem',
                        color: '#FE5C63',
                        textAlign: 'center',
                      }}
                    >
                      <span
                      className="color-icon"
                        style={{
                          fontSize: '.8rem',
                          margin: '0',
                          textDecoration: 'line-through',
                        }}
                      >
                        Rp. 250.000{' '}
                      </span>{' '}
                      Hemat Rp 99.000
                    </p>
                    <h4 style={{ textAlign: 'center' }}>Rp {item.harga}</h4>
                    <Grid container justifyContent='center'>
                      <Grid item>
                        <Button
                          size='medium'
                          variant='contained'
                          className='btn btn-primary mb-0'
                        >
                          Ambil Kelas
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const H4 = styled.h4`
  margin: 2rem 0 1rem;
`;