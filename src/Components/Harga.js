import React from 'react';
import {Grid, Button, Card,CardContent} from "@material-ui/core";
import level from '../Images/level.svg'
import time from '../Images/time.svg'
import video from '../Images/video.svg'
import kuis from '../Images/kuis.svg'
import sertifikat from '../Images/sertifikat.svg'
import logo from '../Images/logo-small.png'

const detail =[
	{
		icon: level,
		title: "Level Pemula"
	},
		{
		icon: time,
		title: "Durasai belajar 30 hari"
	},
		{
		icon: video,
		title: "Jumlah 15 seri"
	},
		{
		icon: kuis,
		title: "1 kuis"
	},
		{
		icon: sertifikat,
		title: "Sertifikat kelas"
	},
]

export default function Harga(){
	return(
		<Grid container>
			<Grid item xs={12}>
				<Card style={{border: "0.5px solid rgba(28, 29, 32, 0.15)", boxShadow: "0px 6px 6px rgba(28, 29, 32, 0.04)", borderRadius: "1rem"}}>
					<CardContent style={{padding: "2rem"}}>
						<p style={{fontWeight: "600", color: "rgba(28, 29, 32, 0.3)", margin: "0"}}>Rp. 250.000 <span style={{fontSize: "1.5rem", color: "#FE5C63"}}>Hemat Rp. 99.000</span></p>
						<h3>Rp 149.000</h3>
						<Button fullWidth size="large" variant="contained" className="btn btn-primary">Gabung ke Kelas</Button>

						{detail.map((item, index)=>(
						<Grid container spacing={1} key={index}>
							<Grid item xs={1}>
								<img src={item.icon} width="100%" alt="icon"/>
							</Grid>

							<Grid item xs={10}>
								<h5 style={{fontWeight: "400", marginBottom: "1rem"}}>{item.title}</h5>
							</Grid>
						</Grid>
						))}
						<hr/>
						<Grid container spacing={1} alignItems="center" style={{margin: ".3rem 0"}}>
							<Grid item xs={2}>
								<img src={logo} width="100%" alt="logo"/>
							</Grid>

							<Grid item xs={10}>
								<h5 style={{fontWeight: "500"}}>Arkademi</h5>
							</Grid>
						</Grid>
					<hr/>
					<br/>
					<p style={{color: "rgba(28, 29, 32, 0.445941)"}}>Kursus prakerja ini tersedia di</p>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	)
}
