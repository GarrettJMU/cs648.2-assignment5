/* global db print */
/* eslint no-restricted-globals: "off" */
/* eslint linebreak-style: ["error", "windows"] */

db.products.remove({});

const productsDB = [
  {
    id: 1,
    Category: 'Shirts',
    Price: 10,
    Name: 'Garrett tee',
    Image: 'https://www.dhresource.com/0x0/f2/albu/g7/M00/CB/05/rBVaSlvJpOuAWjlvAAHgFBFbvXc001.jpg',
  },
  {
    id: 2,
    Category: 'Shirts',
    Price: 20,
    Name: 'Polo',
    Image: 'https://mp-media.reebonz.com/images/p-6e/reebonz-polo-ralph-lauren-polos-t-shirts-giallo-ralph-lauren-1-6e962797-f043-4fca-a542-cdb5b6221aaa.jpg',
  },
  {
    id: 3,
    Category: 'Jeans',
    Price: 100,
    Name: 'Lucky',
    Image: 'https://di2ponv0v5otw.cloudfront.net/posts/2018/10/06/5bb944d412cd4a886ce2338e/m_5bb94505a5d7c6acfd72d9ac.jpg',
  },
];

db.products.insertMany(productsDB);
const count = db.products.count();
print('Inserted', count, 'products');

db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ Name: 1 });
db.products.createIndex({ Category: 1 });
db.products.createIndex({ Price: 1 });

// mongodb+srv://Garrett:SVx5HhJmvqUU4#4)@nodefinalproject-apdpv.mongodb.net/test?retryWrites=true&w=majority
