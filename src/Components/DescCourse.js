import React from 'react';
import {Container, Grid, Breadcrumbs, Typography, Link, Button} from '@material-ui/core';
import thumbnail from "../Images/thumb.png";
import Rating from '@material-ui/lab/Rating';
import PersonIcon from '@material-ui/icons/Person';
import Deskripsi from "./Deskripsi";
import Ulasan from "./Ulasan";
import Kurikulum from "./Kurikulum";
import Harga from "./Harga";
import Kelas from "./Kelas";


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function DescCourse(){

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

		    <Grid container spacing={4}>
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
		    				<iframe width="100%" height="400" src="https://www.youtube.com/embed/p-273wJCQOM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
		    		</Grid>

		    		<Deskripsi/>

		    		<Kurikulum/>

		    		<Ulasan/>

		    	</Grid>

		    	</Grid>

		    	<Grid item lg={4} xs={12}>
		    		<Harga/>
		    	</Grid>
		    </Grid>

		    <Grid container>
		    	<Grid item xs={12}>
		    		<Kelas/>
		    	</Grid>
		    </Grid>
			</Container>
		</React.Fragment>
	)
}