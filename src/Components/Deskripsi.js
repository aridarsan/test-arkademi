import React from "react"
import sertifikat from "../Images/sertifikat.png";
import { Grid, Button } from "@material-ui/core"


export default function Deskripsi (){
	return(
			<Grid container spacing={2} style={{marginTop: "2rem"}}>
  			<Grid item xs={12}>
  				<h3 style={{marginBottom: "1rem"}}>
  					Cara Alami Menguasai Bahasa Inggris Semudah Bahasa Indonesia
  				</h3>

  				<p style={{textAlign:"justify"}}>
  					Jika Anda bisa bahasa Indonesia seharusnya Anda juga bisa bahasa Inggris. Tanpa sadar Anda sudah menjalani proses alami belajar bahasa. Ternyata Tuhan sudah menurunkan metode bagaimana menguasai suatu bahasa, itulah cara alami. Suatu cara yang sudah anda lakukan, namun Anda tidak menyadari. Apakah anda bisa bahasa Indonesia? Apakah anda kursus bahasa Indonesia? Bagaimana cara anda belajar bahasa Indonesia?
  				</p>

  				<p style={{textAlign:"justify"}}>
  					Memperkenalkan “Cara Alami Menguasai Bahasa Inggris Semudah Bahasa Indonesia”. Metode ini menuntun Anda langkah demi langkah bagaimana menguasai bahasa Inggris dengan cara alami seperti orang Indonesia menguasai bahasa Indonesia, termasuk penyiapan perangkat.
  				</p>

  				<h4 style={{margin: "2rem 0 1rem"}}>
  					Tujuan Pembelajaran
  				</h4>

  				<p style={{textAlign:"justify"}}>
  				Belajar bahasa Inggris di kelas ini membuat anda menyadari kesalahan umum yang menyebabkan: Belajar bahasa Inggris terasa sangat sulit Setelah kursus kemampuan anda berangsur-angsur menurun Masih sulit memahami novel, komik dan film, biarpun sudah kursus Ketika bicara bahasa Inggris takut salah sehingga muncul rasa tidak percaya diri.
					</p>

					<h4 style={{margin: "2rem 0 1rem"}}>
  					Yang Akan Siswa Pelajari
  				</h4>

  				<p style={{textAlign:"justify"}}>
  				Metode alami yang dapat meningkatkan kemampuan semua aspek bahasa secara bersamaan meliputi kosa kata, kemampuan bicara, mendengar, membaca, menulis, tata bahasa dan pelafalan sehingga menguasai bahasa Inggris menjadi sangat mudah. Menghindari munculnya rasa tidak percaya diri ketika bicara bahasa Inggris. Memanfaatkan materi, perangkat dan teknologi yang sudah anda miliki namun belum menyadari Teknik jitu bicara dengan English native speaker Teknik jitu bicara di depan umum, bagaimana mengatasi grogi hanya dalam satu menit.
					</p>

					<h4 style={{margin: "2rem 0 1rem"}}>
  					Sertifikat
  				</h4>
  				<Grid container>
  					<Grid item xs={12} lg={8}>
  						<img src={sertifikat} width="100%" alt="Sertifikat"/>
  					</Grid>
  				</Grid>

  				<h4 style={{margin: "2rem 0 1rem"}}>
  					Untuk Siapa Kelas Ini?
  				</h4>

  				<Grid container spacing={2}>
  					<Button className="btn read-btn" readOnly>Mahasiswa</Button>
  					<Button className="btn read-btn" readOnly>Umum</Button>
  					<Button className="btn read-btn" readOnly>Karyawan</Button>
  					<Button className="btn read-btn" readOnly>Profesional</Button>
  				</Grid>

  				<h4 style={{margin: "2rem 0 1rem"}}>
  					Cara Belajar
  				</h4>

  				<p style={{textAlign:"justify"}}>
  					14 video ajar yang bisa anda saksikan kapan saja dan dimana saja. E-book Kuis Online session pembahasan dan tanya-jawab
  				</p>

  				<h4 style={{margin: "2rem 0 1rem"}}>
  					Tentang Pengajar
  				</h4>

  				<p style={{textAlign:"justify"}}>
  					Kelas ini dibawakan oleh Bapak Anang Sam dari English Technology, sebuah institusi kursus Bahasa Inggris di Jakarta yang berpengalaman belasan tahun dalam mengajar Bahasa Inggris. Dari pengalaman panjang tersebut English Technology berhasil mengembangkan metode pengajaran dan belajar Bahasa Inggris secara alami dan mudah yang tidak anda dapatkan di tempat lain.
  				</p>
  			</Grid>
  		</Grid>
	)
}