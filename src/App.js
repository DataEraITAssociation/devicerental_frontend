import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProductCard from '../src/Components/ProductCard/ProductCard';
import Typography from '@material-ui/core/Typography';
import machineOne from '../src/Assets/Images/machineOne.jpeg';
import machineTwo from '../src/Assets/Images/machineTwo.jpeg';
import machineThree from '../src/Assets/Images/machineThree.jpeg';
import machineFour from '../src/Assets/Images/machineFour.jpeg';
const machineList = [{
  title: 'Machine One',
  quality: '2',
  image: machineOne,
  rate: '$14.99',
  imageName: 'Machine One',
  description: 'This machine is great',
},
{
  title: 'Machine Two',
  quality: '10',
  image: machineTwo,
  rate: '$12.99',
  imageName: 'Machine Two',
  description: 'This machine is best!'
}, {
  title: 'Machine Three',
  quality: '100',
  image: machineThree,
  rate: '$107.99',
  imageName: 'Machine Three',
  description: 'Please rent this one if you are kids!'
}, {
  title: 'Machine Four',
  quality: '76',
  image: machineFour,
  rate: '$56.99',
  imageName: 'Machine Four',
  description: 'Please rent this one if you are adults!'
}

];

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography variant="h3" align="center" style={{ marginTop: "1%" }}>
        Product Rental
      </Typography>
      <Grid container align="center" style={{ marginTop: "1%" }}>
        {
          machineList.map((data) => {
            return (
              <Grid item xs={3}> <ProductCard data={data} /></Grid>

            );
          })
        }
      </Grid>


    </React.Fragment>
  );
}

export default App;
