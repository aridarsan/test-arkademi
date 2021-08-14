import React from 'react';
import { Container, Grid } from '@material-ui/core';
import populer from '../Images/populer.png';
import gplay from '../Images/gplay.png';
import ios from '../Images/ios.png';
import kominfo from '../Images/kominfo.png';
import midtrans from '../Images/pembayaran/midtrans.png';
import mandiri from '../Images/pembayaran/mandiri.png';
import bca from '../Images/pembayaran/bca.png';
import gopay from '../Images/pembayaran/gopay.png';
import atm from '../Images/pembayaran/atm.png';
import prima from '../Images/pembayaran/prima.png';
import alto from '../Images/pembayaran/alto.png';
import logo from '../Images/logo.png';
import mox from '../Images/mox.png';
import styled from 'styled-components';

const popkel = [
  {
    image: populer,
    judul: 'Strategi Menjadi Entrepreneur Pemula yang Kreatif dan Produktif',
  },
  {
    image: populer,
    judul: 'Membuat Website Professional Untuk Perusahaan',
  },
  {
    image: populer,
    judul: 'Personal Branding untuk Melesatkan Karir dan Bisnis',
  },
];

const popkat = [
  'Digital Marketing',
  'Health and Safety',
  'Karier',
  'Kewirausahaan',
  'Microsoft Excel',
  'Prakerja',
  'Psikotest',
];

const alat = [
  'Kalkulator Pajak Karyawan',
  'Kalkulator Nilai Usaha',
  'Tes Teknik Kewirausaan',
  'Diagnosa Usaha',
  'FAQ',
  'Karier',
  'Privacy Policy',
];

const bayar = [midtrans,mandiri, bca, gopay, atm, prima, alto];

export default function Footer () {
  return (
    <React.Fragment>
      <div
        style={{
          marginTop: '2rem',
          padding: '2rem 0',
          color: '#1C1D20',
          background: "rgba(65, 72, 93, 0.06)"
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={2} className='footer-wrap'>

            {/* Section 1 */}
            <Grid item xs={12} md={4} lg={4}>
              <h5 className='footer-judul'>Kelas Populer</h5>
              {popkel.map((item, index) => (
                <a href='/'>
                  <Grid container spacing={1} key={index}>
                    <Grid item xs={1} lg={2}>
                      <img src={item.image} width='100%' alt='populer' />
                    </Grid>
                    <Grid item xs={10}>
                      <p className='bold'>{item.judul}</p>
                    </Grid>
                  </Grid>
                </a>
              ))}
            </Grid>
            
            {/* Section 2 */}
            <Grid item xs={6} md={4} lg={2}>
              <h5 className='footer-judul'>Kategori Populer</h5>
              {popkat.map((item, index) => (
                <a href='/' key={index}>
                  <p className='m-0 bold'>{item}</p>
                </a>
              ))}
            </Grid>

            {/* Section 3 */}
            <Grid item xs={6} md={4} lg={3}>
              <h5 className='footer-judul'>Alat</h5>
              {alat.map((item, index) => (
                <a href='/' key={index}>
                  <p className='m-0 bold'>{item}</p>
                </a>
              ))}
            </Grid>

            {/* Section 4 */}
            <Grid item xs={12} md={4} lg={3}>
              <h5 className='footer-judul'>Arkademi Mobile App</h5>
              <small>
                Belajar lebih nyaman lewat aplikasi Android dan IOS Arkademi
              </small>
              <div className="mb-1 mt-1">
                <a href="/">
                  <img src={gplay} width='60%' alt='gplay' />
                </a>

                <a href="/">
                  <img src={ios} width='60%' alt='ios' />
                </a>
              </div>
              <Grid container spacing={2} alignItems='center'>
                <Grid item>
                  <p className="bold">Terdaftar resmi di</p>
                </Grid>
                <Grid item>
                  <img src={kominfo} width='70%' alt='kominfo' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr />
          <br/>
          <Grid container justifyContent='center'>
            <Grid item xs={12}>
              <p className='t-center' style={{color: "rgba(28, 29, 32, 0.5)", fontWeight: "500"}}>Metode Pembayaran</p>
            </Grid>
            <Grid item lg={7} xs={12}>
              {bayar.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  className='bayar'
                  alt='pembayaran'
                />
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>

      <div style={{ background: "rgba(103, 108, 122, 0.16)", color: '#1C1D20', padding: "1rem 0"}}>
        <Container maxWidth='lg'>
          <Grid container className='wrap' spacing={4}>
            <Grid item lg={6} xs={12}>
              <img src={logo} alt='logo' width='30%' />
              <P>
                Arkademi adalah massive open online course (MOOC) platform karya
                anak bangsa Indonesia. Pembelajaran di dikhususkan untuk
                pembelajaran berbasis keahlian yang diantarkan melalui kelas
                belajar kursus online melalui aplikasi Arkademi berbasis mobile
                app dan web. Di Arkademi setiap individu dan lembaga kursus
                dapat membuka dan mengkomersialkan kelas online dan menjangkau
                siswa dari seluruh Indonesia.
              </P>
            </Grid>

            <Grid item lg={6} xs={12}>
              <h5 style={{ paddingTop: '1rem', margin: '0' }}>Akselerator</h5>

              <P>
                Arkademi adalah bagian program inkubasi dan akselerator dari
                perusahaan top-level dunia: SOSV MOX(Mobile Only Accelerator),
                Amazon Web Service (Edstart Program) dan Y Combinator (startup
                school) yang dipilih dari tech startup edukasi terbaik dunia.
              </P>
              <img src={mox} alt='mox' width='40%' />
            </Grid>
          </Grid>
        </Container>
      </div>

      <div style={{ backgroundColor: '#1C1D20', color : "#ffff" }}>
        <Container maxWidth='lg'>
          <Grid container>
            <Grid item lg={8} xs={12}>
              <a href="/">
              <P>
                <span style={{color: "#ffff", opacity: ".4"}}>&copy; 2017-2021 PT Arkademi Daya Indonesia</span>
              </P>
              </a>
            </Grid>

            <Grid item lg={2} xs={12}>
            <a href="/">
              <P>
                <span style={{color: "#ffff"}}>Ketentuan Layanan</span>
              </P>
            </a>
            </Grid>

            <Grid item lg={2} xs={12}>
              <a href="/">
                <P><span style={{color: "#ffff"}}>Kontak</span></P>
              </a>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

const P = styled.p`
  padding: 1rem 0;
  margin: 0;
  font-weight: 500;
`
