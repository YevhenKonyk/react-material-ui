import React from 'react';
import Grid from '@material-ui/core/Grid';
import faker from 'faker';
import Product from './Product';

const getProducts = count => {
  const products = [];

  for (let i = 0; i < count; i += 1) {
    const product = {
      id: faker.random.uuid(),
      title: faker.commerce.product(),
      subTitle: faker.commerce.price(),
      description: faker.lorem.words(10),
      avatarSrc: faker.image.avatar(),
      imageSrc: faker.image.image(),
    };

    products.push(product);
  }

  return products;
};

const Content = () => {
  const products = getProducts(10);
  return (
    <Grid container spacing={4}>
      {products.length > 0 &&
        products.map(product => (
          <Grid item xs={12} sm={4} key={product.id}>
            <Product {...product} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Content;
