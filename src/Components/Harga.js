import React from 'react';
import {Grid, Button, Card,CardContent, IconButton} from "@material-ui/core";
import level from '../Images/level.svg'
import time from '../Images/time.svg'
import video from '../Images/video.svg'
import kuis from '../Images/kuis.svg'
import sertifikat from '../Images/sertifikat.svg'
import logo from '../Images/logo-small.png'

import tokopedia from '../Images/mitra/tokopedia.svg';
import bukalapak from '../Images/mitra/bukalapak.svg';
import cakap from '../Images/mitra/cakap.svg';
import sekolahmu from '../Images/mitra/sekolahmu.svg';
import pintaria from '../Images/mitra/pintaria.svg';
import maubelajar from '../Images/mitra/mau-belajar.svg';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

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

const mitra =[tokopedia, bukalapak, cakap, sekolahmu, pintaria, maubelajar]

export default function Harga(){
	return(
		<Grid container>
			<Grid item xs={12}>
				<Card style={{border: "0.5px solid rgba(28, 29, 32, 0.15)", boxShadow: "0px 6px 6px rgba(28, 29, 32, 0.04)", borderRadius: "1rem"}}>
					<CardContent style={{padding: "2rem"}}>
						<p style={{fontWeight: "600", fontSize: "1.5rem", color: "#FE5C63"}}><span style={{fontSize: "1rem", color: "rgba(28, 29, 32, 0.3)", margin: "0", textDecoration: "line-through"}}>Rp. 250.000 </span> Hemat Rp. 99.000</p>
						<h3>Rp 149.000</h3>
						<Button fullWidth size="large" variant="contained" className="btn btn-primary" style={{marginBottom: "1rem"}}>Gabung ke Kelas</Button>

						{detail.map((item, index)=>(
						<Grid container  key={index}>
							<Grid item xs={1}>
								<img src={item.icon} width="80%" alt="icon"/>
							</Grid>

							<Grid item xs={10}>
								<p style={{fontWeight: "400", marginBottom: "1rem", marginLeft: "1rem"}}>{item.title}</p>
							</Grid>
						</Grid>
						))}

						<Grid container spacing={1} alignItems="center" style={{margin: ".3rem 0", borderBottom: "1px solid #3333", borderTop: "1px solid #3333", marginBottom: "1rem"}}>
							<Grid item xs={2} style={{marginTop: ".5rem"}}>
								<img src={logo} width="90%" style={{bottom: 0}} alt="logo"/>
							</Grid>

							<Grid item xs={10}>
								<h5 style={{fontWeight: "500"}}>ARKADEMI</h5>
							</Grid>
						</Grid>
					<p style={{color: "rgba(28, 29, 32, 0.8)"}}>Kursus prakerja ini tersedia di</p>

					<Grid container spacing={1}>
					{mitra.map((item, index)=>(
						<Grid item xs={4} key={index}>
							<Button readOnly className="btn mitra" fullWidth size="large">
								<img src={item} alt="mitra"/>
							</Button>
						</Grid>
						))}
					</Grid>

					<Grid container justifyContent="center" style={{marginTop: "1rem"}}>
						<Grid item>
					    <a href="/" target="_blank" rel="noreferrer">
                {' '}
                <IconButton size="medium" className="icon-btn"> <FacebookIcon className='medsos' /></IconButton>{' '}
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                {' '}
                <IconButton className="icon-btn"> <TwitterIcon className='medsos' /></IconButton>{' '}
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                {' '}
                <IconButton className="icon-btn"> <LinkedInIcon className='medsos' /></IconButton>{' '}
              </a>
						</Grid>
					</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	)
}
