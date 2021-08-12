import React from 'react';
import {Container, Grid, Breadcrumbs, Typography, Link, Button, Accordion, AccordionDetails, AccordionSummary,} from '@material-ui/core';
import thumbnail from "../Images/thumb.png";
import Rating from '@material-ui/lab/Rating';
import PersonIcon from '@material-ui/icons/Person';
import sertifikat from "../Images/sertifikat.png";
import triangle from "../Images/triangle.png"


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const tanyajawab = [
  {
    panel: 'panel1',
    aria: 'panel1bh-content',
    id: 'panel1bh-header',
    tanya: 'Pegantar',
    jawab:
      '2. Cara alami menguasai bahasa inggris semudah bahasa Indonesia',
  },
  {
    panel: 'panel2',
    aria: 'panel2bh-content',
    id: 'panel2bh-header',
    tanya: 'Mengapa belajar bahasa inggris',
    jawab:
      '2. Cara alami menguasai bahasa inggris semudah bahasa Indonesia',
  },
  {
    panel: 'panel3',
    aria: 'panel3bh-content',
    id: 'panel3bh-header',
    tanya:
      'Tantangan belajar bahasa inggris',
    jawab:
      '2. Cara alami menguasai bahasa inggris semudah bahasa Indonesia',
  },
  {
    panel: 'panel4',
    aria: 'panel4bh-content',
    id: 'panel3bh-header',
    tanya:
      'Cara menguasai bahasa inggris',
    jawab:
      '2. Cara alami menguasai bahasa inggris semudah bahasa Indonesia',
  },
  {
    panel: 'panel5',
    aria: 'panel5bh-content',
    id: 'panel3bh-header',
    tanya:
      'Penutup',
    jawab:
      '2. Cara alami menguasai bahasa inggris semudah bahasa Indonesia',
  }
 ]

export default function DescCourse(){
	 const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

	return(
		<React.Fragment>
			<Container style={{marginTop: "3rem"}}>
				<Breadcrumbs aria-label="breadcrumb">
		      <Link color="inherit" href="/" className="font" onClick={handleClick}>
		        Home
		      </Link>
		      <Link color="inherit" href="/" className="font" onClick={handleClick}>
		        Course
		      </Link>
		      <Link color="inherit" href="/" className="font" onClick={handleClick}>
		        Bahasa
		      </Link>
		      <Typography color="textPrimary" className="font">Prakerja</Typography>
		    </Breadcrumbs>

		    <Grid container spacing={2}>
		    	<Grid item lg={8} xs={12}>
		    		<Grid container spacing={2} style={{marginTop:"1rem"}}>
		    			<Grid item lg={3} xs={12}>
		    				<img src={thumbnail} alt="thumbnail" style={{ width: "100%", fontWeight: "800"}}/>
		    			</Grid>

		    			<Grid item lg={9}>
		    				<h3>
		    					Cara Alami Menguasai Bahasa Inggris Semudah Bahasa Indonesia
		    				</h3>

		    				<Grid container spacing={2}>
		    					<Grid item xs={8} lg={7}>
		    						<Grid container spacing={2}>
			    						<Grid item lg={5}>
		  						      <Rating
		                      name='read-only'
		                      value={5}
		                      size='large'
		                      readOnly
		                    />
	                    </Grid>
	                    <Grid item lg={7}>
		                    <p>
		                    	4.5 (3274 reviews)
		                    </p>
	                    </Grid>
		    						</Grid>		
		    					</Grid>

		    					<Grid item xs={4} lg={5}>
		    						<Grid container>
		    							<PersonIcon/>
		    						<p>
		    							  29719 siswa
		    						</p>
		    						</Grid>
		    					</Grid>

		    				</Grid>

		    			</Grid>


		    		<Grid container spacing={2}>
		    			<Grid item lg={12} style={{borderBottom: "0.736429px solid rgba(28, 29, 32, 0.150705)", paddingBottom: "0"}}>
		    				<Button className="btn" style={{fontWeight:"700", color:"#1C1D20", borderBottom: ".3rem solid #0872C7", borderRadius: "0"}} size="large">Depan</Button>
		    				<Button className="btn" size="large">Siswa</Button>
		    				<Button className="btn" size="large">Aktivitas</Button>
		    				<Button className="btn" size="large">Admin</Button>
		    				<Button className="btn" size="large">Sunting</Button>
		    			</Grid>
		    		</Grid>

		    		<Grid container style={{marginTop:"2rem"}}>
		    				<iframe width="100%" height="400" src="https://www.youtube.com/embed/p-273wJCQOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		    		</Grid>

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

		    		<Grid container>
		    			<Grid item xs={12}>
		    				<h4 style={{margin: "2rem 0 1rem"}}>
		    					Kurikulum Kelas
		    				</h4>
			    			{tanyajawab.map((item, index) => (
			    				<Accordion
	                expanded={expanded === item.panel}
	                onChange={handleChange(item.panel)}
	                style={{ borderRadius: '7px', border: "0.7px solid rgba(28, 29, 32, 0.128961)", margin: ".5rem 0", boxShadow: "0px 3px 6px rgba(28, 29, 32, 0.0485686)"}}
	                key={index}
	              >
	                <AccordionSummary
	                  expandIcon={<img src={triangle} alt="icon"/>}
	                  aria-controls={item.aria}
	                  id={item.id}
	                >
	                  <p style={{ margin: 0, lineHeight: "1.5", fontWeight: "600" }}>{item.tanya}</p>
	                </AccordionSummary>
	                <AccordionDetails>
	                	<Grid container spacing={2}>
	                		<Grid item lg={10} xs={10}>
			                	<a href="/">
			                  	<small style={{ margin: 0 }}>{item.jawab}</small>
			                  </a>
		                  </Grid>

		                  <Grid item xs={2} lg={2}>
		                  	<small><span style={{textAlign: "right"}}>00:05:00</span></small>
		                  </Grid>
	                  </Grid>
	                </AccordionDetails>
	              </Accordion>
	                ))}
		    			</Grid>
		    		</Grid>


		    	</Grid>

		    	</Grid>

		    	<Grid item lg={4} xs={12}>

		    	</Grid>
		    </Grid>
			</Container>
		</React.Fragment>
	)
}