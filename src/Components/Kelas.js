import React from 'react';
import {Grid, Button, Card,CardContent} from "@material-ui/core";
import logo from '../Images/logo-small.png'
import Carousel from 'react-grid-carousel';
import kelas from '../Images/kelas.png'
import PersonIcon from '@material-ui/icons/Person';
import StarIcon from '@material-ui/icons/Star';

const kartu =[
	{
		image : kelas,
		judul : "Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..",
		harga : 149000,
		rating : 5,
		murid : 2500
	},
		{
		image : kelas,
		judul : "Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..",
		harga : 149000,
		rating : 4.5,
		murid : 2500
	},
		{
		image : kelas,
		judul : "Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..",
		harga : 149000,
		rating : 5,
		murid : 2500
	},
		{
		image : kelas,
		judul : "Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..",
		harga : 149000,
		rating : 4.5,
		murid : 2500
	},
]


export default function Kelas(){
	return(
		<React.Fragment>

			<Grid container>
				<h4 style={{margin: "2rem 0 1rem"}}>
    					Kelas Serupa
    		</h4>
			</Grid>

			<Grid container style={{marginBottom: "3rem"}}>
				<Grid item xs={12}>
				<Carousel
            cols={4}
            rows={1}
            gap={10}
            autoplay={2000}
            loop
          >
          {kartu.map((item, index)=>(

          <Carousel.Item key={index}>
					<Card style={{border: "0.5px solid rgba(28, 29, 32, 0.15)", boxShadow: "0px 6px 6px rgba(28, 29, 32, 0.04)", borderRadius: "1rem", overflow: "auto"}}>
						<CardContent style={{overflow: "visible"}}>
							<div style={{marginTop: "-3rem"}}>
								<img src={item.image} width="100%" style={{ position: "relative", bottom: 0}} alt="kelas"/>
							</div>
							<p style={{fontWeight: "700"}}>{item.judul}</p>
							<Grid container >
								<Grid item xs={6}>
									<Grid container>
										<Grid item xs={2}>
											<StarIcon style={{color: "#F7D400"}}/>
										</Grid>

										<Grid item xs={9}>
											<p style={{fontWeight: "400", marginLeft: ".5rem"}}>{item.rating}</p>
										</Grid>
									</Grid>
								</Grid>

								<Grid item xs={6}>
									<Grid container>
										<Grid item xs={2}>
											<PersonIcon style={{color: "rgba(28, 29, 32, 0.3)"}}/>
										</Grid>

										<Grid item xs={9}>
											<p style={{fontWeight: "400", marginLeft: ".5rem"}}>{item.murid}</p>
										</Grid>
									</Grid>
								</Grid>
							</Grid>

							<Grid container spacing={1} alignItems="center" style={{margin: ".3rem 0", borderBottom: "1px solid #3333", borderTop: "1px solid #3333", marginBottom: "1rem"}}>
								<Grid item xs={2} style={{marginTop: ".5rem"}}>
									<img src={logo} width="90%" style={{bottom: 0}} alt="logo"/>
								</Grid>

								<Grid item xs={10}>
									<h5 style={{fontWeight: "500"}}>ARKADEMI</h5>
								</Grid>
							</Grid>

						<p style={{fontWeight: "600", fontSize: "1rem", color: "#FE5C63", textAlign: "center"}}><span style={{fontSize: ".8rem", color: "rgba(28, 29, 32, 0.3)", margin: "0", textDecoration: "line-through"}}>Rp. 250.000 </span> Hemat Rp. 99.000</p>
							<h4 style={{textAlign: "center"}}>Rp. {item.harga}</h4>
							<Grid container justifyContent="center">
								<Grid item>
									<Button size="medium" variant="contained" className="btn btn-primary" style={{marginBottom: "0"}}>Ambil Kelas</Button>
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
	)
}
