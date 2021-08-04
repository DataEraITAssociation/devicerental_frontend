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
  quantity: '2',
  image: machineOne,
  rate: '$14.99',
  imageName: 'Machine One',
  description: 'This machine is great',
  detailedDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis. Vulputate eu scelerisque felis imperdiet proin fermentum.',
  tutorial: 'https://en.wikipedia.org/wiki/Robot',
  youTube: 'https://www.youtube.com/embed/Bg_tJvCA8zw'
},
{
  title: 'Machine Two',
  quantity: '10',
  image: machineTwo,
  rate: '$12.99',
  imageName: 'Machine Two',
  description: 'This machine is best!',
  detailedDescription: 'Elementum curabitur vitae nunc sed velit dignissim sodales. Posuere ac ut consequat semper. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Tristique senectus et netus et malesuada fames. Quisque egestas diam in arcu.',
  tutorial: 'https://www.ft.com/content/0bba6e2b-bce9-4153-8b52-1abfd6e921a5',
  youTube: 'https://www.youtube.com/embed/m-LP4qpOLl0'
}, {
  title: 'Machine Three',
  quantity: '100',
  image: machineThree,
  rate: '$107.99',
  imageName: 'Machine Three',
  description: 'Please rent this one if you are kids!',
  detailedDescription: 'Iaculis urna id volutpat lacus. Convallis convallis tellus id interdum velit laoreet id donec. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Venenatis cras sed felis eget velit aliquet. Non blandit massa enim nec dui. ',
  tutorial: 'https://spectrum.ieee.org/video-friday-telexistence-model-t-robot',
  youTube: 'https://www.youtube.com/embed/RNVh_HMX2IY'
}, {
  title: 'Machine Four',
  quantity: '76',
  image: machineFour,
  rate: '$56.99',
  imageName: 'Machine Four',
  description: 'Please rent this one if you are adults!',
  detailedDescription: 'Tortor condimentum lacinia quis vel eros. Netus et malesuada fames ac. Lacus luctus accumsan tortor posuere ac ut consequat semper. Tempor commodo ullamcorper a lacus.',
  tutorial: 'https://spectrum.ieee.org/',
  youTube: 'https://www.youtube.com/embed/a_T4QayqtI4'
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
