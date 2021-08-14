import React from 'react';
import sertifikat from '../Images/sertifikat.png';
import { Grid, Button } from '@material-ui/core';
import styled from 'styled-components';

export default function Deskripsi() {
  return (
    <Grid container spacing={2} style={{ marginTop: '2rem' }}>
      <Grid item xs={12}>

        {/*Section 1 */}
        <h3 style={{ marginBottom: '1rem' }}>
          Cara Alami Menguasai Bahasa Inggris Semudah Bahasa Indonesia
        </h3>

        <p className='justify'>
          Jika Anda bisa bahasa Indonesia seharusnya Anda juga bisa bahasa
          Inggris. Tanpa sadar Anda sudah menjalani proses alami belajar bahasa.
          Ternyata Tuhan sudah menurunkan metode bagaimana menguasai suatu
          bahasa, itulah cara alami. Suatu cara yang sudah anda lakukan, namun
          Anda tidak menyadari. Apakah anda bisa bahasa Indonesia? Apakah anda
          kursus bahasa Indonesia? Bagaimana cara anda belajar bahasa Indonesia?
        </p>

        <p className='justify'>
          Memperkenalkan “Cara Alami Menguasai Bahasa Inggris Semudah Bahasa
          Indonesia”. Metode ini menuntun Anda langkah demi langkah bagaimana
          menguasai bahasa Inggris dengan cara alami seperti orang Indonesia
          menguasai bahasa Indonesia, termasuk penyiapan perangkat.
        </p>

        {/*Section 2 */}
        <H4>Tujuan Pembelajaran</H4>

        <p className='justify'>
          Belajar bahasa Inggris di kelas ini membuat anda menyadari kesalahan
          umum yang menyebabkan: Belajar bahasa Inggris terasa sangat sulit
          Setelah kursus kemampuan anda berangsur-angsur menurun Masih sulit
          memahami novel, komik dan film, biarpun sudah kursus Ketika bicara
          bahasa Inggris takut salah sehingga muncul rasa tidak percaya diri.
        </p>

        {/*Section 3 */}
        <H4>Yang Akan Siswa Pelajari</H4>

        <p className='justify'>
          Metode alami yang dapat meningkatkan kemampuan semua aspek bahasa
          secara bersamaan meliputi kosa kata, kemampuan bicara, mendengar,
          membaca, menulis, tata bahasa dan pelafalan sehingga menguasai bahasa
          Inggris menjadi sangat mudah. Menghindari munculnya rasa tidak percaya
          diri ketika bicara bahasa Inggris. Memanfaatkan materi, perangkat dan
          teknologi yang sudah anda miliki namun belum menyadari Teknik jitu
          bicara dengan English native speaker Teknik jitu bicara di depan umum,
          bagaimana mengatasi grogi hanya dalam satu menit.
        </p>

        {/*Section 4 */}
        <H4>Sertifikat</H4>
        <Grid container>
          <Grid item xs={12} lg={8}>
            <img src={sertifikat} width='100%' alt='Sertifikat' />
          </Grid>
        </Grid>

        {/*Section 5 */}
        <H4>Untuk Siapa Kelas Ini?</H4>

        <Grid container spacing={2}>
          <Button className='btn read-btn' readOnly>
            Mahasiswa
          </Button>
          <Button className='btn read-btn' readOnly>
            Umum
          </Button>
          <Button className='btn read-btn' readOnly>
            Karyawan
          </Button>
          <Button className='btn read-btn' readOnly>
            Profesional
          </Button>
        </Grid>

        {/*Section 6 */}
        <H4>Cara Belajar</H4>

        <p className='justify'>
          14 video ajar yang bisa anda saksikan kapan saja dan dimana saja.
          E-book Kuis Online session pembahasan dan tanya-jawab
        </p>

        {/*Section 7 */}
        <H4>Tentang Pengajar</H4>

        <p className='justify'>
          Kelas ini dibawakan oleh Bapak Anang Sam dari English Technology,
          sebuah institusi kursus Bahasa Inggris di Jakarta yang berpengalaman
          belasan tahun dalam mengajar Bahasa Inggris. Dari pengalaman panjang
          tersebut English Technology berhasil mengembangkan metode pengajaran
          dan belajar Bahasa Inggris secara alami dan mudah yang tidak anda
          dapatkan di tempat lain.
        </p>
      </Grid>
    </Grid>
  );
}

const H4 = styled.h4`
  margin: 2rem 0 1rem;
`;
