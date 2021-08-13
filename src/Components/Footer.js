import React from 'react';
import { Container, Grid } from '@material-ui/core';
import populer from "../Images/populer.png"
import gplay from '../Images/gplay.png'
import ios from '../Images/ios.png'
import kominfo from '../Images/kominfo.png'
import midtrans from "../Images/pembayaran/midtrans.png";
import mandiri from "../Images/pembayaran/mandiri.png"
import bca from "../Images/pembayaran/bca.png"
import gopay from "../Images/pembayaran/gopay.png"
import atm from "../Images/pembayaran/atm.png"
import prima from "../Images/pembayaran/prima.png"
import alto from "../Images/pembayaran/alto.png"
import logo from "../Images/logo.png";
import mox from "../Images/mox.png";

const popkel =[
  {
    image : populer,
    judul : "Strategi Menjadi Entrepreneur Pemula yang Kreatif dan Produktif"
  },
    {
    image : populer,
    judul : "Membuat Website Professional Untuk Perusahaan"
  },
    {
    image : populer,
    judul : "Personal Branding untuk Melesatkan Karir dan Bisnis"
  },
]

const popkat = [
  "Digital Marketing", "Health and Safety", "Karier", "Kewirausahaan", "Microsoft Excel", "Prakerja", "Psikotest"
]

const alat=["Kalkulator Pajak Karyawan", "Kalkulator Nilai Usaha", "Tes Teknik Kewirausaan", "Diagnosa Usaha", "FAQ", "Karier", "Privacy Policy"]

const bayar =[midtrans, bca, gopay, atm, prima, alto]

const Footer = () => {
  return (
    <React.Fragment>
      <div
        style={{
          marginTop: '4rem',
          padding: '2rem 0',
          color: '#ffff',
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={2} className="footer-wrap">
            <Grid item xs={12} md={4} lg={4}>
              <h5 className="footer-judul">Kelas Populer</h5>
              {popkel.map((item, index)=> (
              <a href="/">
                <Grid container spacing={1} key={index}>
                  <Grid item xs={1} lg={2}>
                    <img src={item.image} width="100%" alt="populer"/>
                  </Grid>
                  <Grid item xs={10}>
                    <p className="bold">{item.judul}</p>
                  </Grid>
                </Grid>
              </a>
              ))}
            </Grid>

            <Grid item xs={6} md={4} lg={2}>
              <h5 className="footer-judul">Kategori Populer</h5>
              {popkat.map((item, index)=> (
              <a href="/" key={index}>
                <p  className="m-0 bold">{item}</p>
              </a>
              ))}
            </Grid>

            <Grid item xs={6} md={4} lg={3}>
              <h5 className="footer-judul">Alat</h5>
            {alat.map((item, index)=> (
              <a href="/" key={index}>
                <p className="m-0 bold">{item}</p>
              </a>
              ))}
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <h5 className="footer-judul">Arkademi Mobile App</h5>
              <small>Belajar lebih nyaman lewat aplikasi Android dan IOS Arkademi</small>
              <img src={gplay} width="70%" alt="gplay"/>
              <img src={ios} width="70%" alt="ios"/>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <h5>Terdaftar resmi di</h5>
                </Grid>
                <Grid item>
                  <img src={kominfo} width="70%" alt="kominfo"/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr/>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <p className="t-center">Metode Pembayaran</p>
            </Grid>
            <Grid item lg={6} xs={12}>
              {bayar.map((item, index)=>(
                <img key={index} src={item} className="bayar" alt="pembayaran"/>
                ))}
            </Grid>
          </Grid>
        </Container>
      </div>

      <div style={{ backgroundColor: '#3333' }}>
        <Container maxWidth='lg'>
        <Grid container className="wrap" spacing={4}>
          <Grid item lg={6} xs={12}>
          <img src={logo} alt="logo" width="30%"/>
            <p style={{ padding: '1rem 0', margin: '0' }}>
              Arkademi adalah massive open online course (MOOC) platform karya anak bangsa Indonesia. Pembelajaran di dikhususkan untuk pembelajaran berbasis keahlian yang diantarkan melalui kelas belajar kursus online melalui aplikasi Arkademi berbasis mobile app dan web. Di Arkademi setiap individu dan lembaga kursus dapat membuka dan mengkomersialkan kelas online dan menjangkau siswa dari seluruh Indonesia.
            </p>
          </Grid>

          <Grid item lg={6} xs={12}>
            <h5 style={{ padding: '1rem 0', margin: '0' }}>Akselerator</h5>

            <p style={{ padding: '1rem 0', margin: '0' }}>
              Arkademi adalah bagian program inkubasi dan akselerator dari perusahaan top-level dunia: SOSV MOX(Mobile Only Accelerator), Amazon Web Service (Edstart Program) dan Y Combinator (startup school) yang dipilih dari tech startup edukasi terbaik dunia.
            </p>
            <img src={mox} alt="mox" width="40%"/>
          </Grid>
        </Grid>
        </Container>
      </div>

      <div style={{ backgroundColor: '#3333' }}>
        <Container maxWidth='lg'>
        <Grid container>
          <Grid item lg={8} xs={12}>
            <p style={{ padding: '1rem 0', margin: '0' }}>
              2017-2021 PT Arkademi Daya Indonesia
            </p>
          </Grid>

          <Grid item lg={2} xs={12}>
            <p style={{padding: '1rem 0', margin: '0' }}>Ketentuan Layanan</p>
          </Grid>

          <Grid item lg={2} xs={12}>
            <p style={{ padding: '1rem 0', margin: '0' }}>Kontak</p>
          </Grid>
        </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
