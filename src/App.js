import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProductCard from '../src/Components/ProductCard/ProductCard';
import Typography from '@material-ui/core/Typography';

const machineList = {
  machineOne: {
    title: 'Machine One',
    quality: '2',
    image: 'public/machineOne.jpeg',
    rate: '$14.99',
    imageName: 'Machine One',
    description: 'This machine is great',
  }
};
function App() {
  return (
    <React.Fragment className="App">
      <CssBaseline />
      <Typography variant="h3" align="center">
        Product Rental
      </Typography>
      <ProductCard data={machineList} />
    </React.Fragment>
  );
}

export default App;
