import React from 'react'
import { CardMedia, Grid, Card, CardContent } from '@mui/material'

const List = () => {
  return (
    <div>
      <Grid align='center'>
        <Grid conatiner spacing={2} direction='column'>
          <h5 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 'large', textAlign: 'left', padding: '1%' }}>Recommended movies</h5>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: '80%' }}>
              <CardMedia
                component="img"
                height="80%"
                image="Images\Drishyam-2.jpg"
                alt="Drishyam 2"
              />
              <CardContent>
                <h5 style={{fontFamily:'serif',fontWeight:'bold',fontSize:'large',textAlign:'left'}}>Drishyam 2</h5>
                <p style={{fontFamily:'sans',fontWeight:'normal',fontSize:'large'}}>Drama/Mystery/Thriller </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{maxWidth:'90%'}}>
              <CardMedia 
               component="img"
               height="80%"
               image="Images\Bhediya.jpg"
               alt="Bhediya"
              />
              <CardContent>
                <h5 style={{fontFamily:'serif',fontWeight:'bold',fontSize:'large',textAlign:'left'}}>Bhediya</h5>
                <p style={{fontFamily:'sans',fontWeight:'normal',fontSize:'large',textAlign:'left'}}>Comedy/Thriller</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{maxWidth:'90%'}}>
              <CardMedia 
               component="img"
               height="80%"
               image="Images\Avatar.jpg"
               alt="Avatar"
              />
              <CardContent>
                <h5 style={{fontFamily:'serif',fontWeight:'bold',fontSize:'large',textAlign:'left'}}>Avatar:The way of water</h5>
                <p style={{fontFamily:'sans',fontWeight:'normal',fontSize:'large'}}>Action/Adventure/Scientific</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{maxWidth:'90%'}}>
              <CardMedia 
               component="img"
               height="80%"
               image="Images\Ram-Setu.jpeg"
               alt="RamSetu"
              />
              <CardContent>
                <h5 style={{fontFamily:'serif',fontWeight:'bold',fontSize:'large',textAlign:'left'}}>Ram Setu</h5>
                <p style={{fontFamily:'sans',fontWeight:'normal',fontSize:'large',textAlign:'left'}}>Action/Adventure/Thriller</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{maxWidth:'80%'}}>
              <CardMedia 
               component="img"
               height="70%"
               image="Images\Kantara_poster.jpeg"
               alt="Kantara"
              />
              <CardContent>
                <h5 style={{fontFamily:'serif',fontWeight:'bold',fontSize:'large',textAlign:'left'}}>Kantara</h5>
                <p style={{fontFamily:'sans',fontWeight:'normal',fontSize:'large',textAlign:'left'}}>Adventure/Drama/Thriller</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{maxWidth:'70%'}}>
              <CardMedia 
               component="img"
               height="60%"
               image="Images\Action hero.jpg"
               alt="Action Hero"
              />
              <CardContent>
                <h5 style={{fontFamily:'serif',fontWeight:'bold',fontSize:'large',textAlign:'left'}}>An Action Hero</h5>
                <p style={{fontFamily:'sans',fontWeight:'normal',fontSize:'large',textAlign:'left'}}>Action/Thriller</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default List