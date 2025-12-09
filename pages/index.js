import fs from 'fs/promises'
import path from 'path';
import Link from 'next/link';

function HomePage(props) {
  
  const {products} = props
  return (
    <ul>
      {products.map((product) => 
        <li> <Link href={`/${product.id}`}> {product.id}, {product.title} </Link></li>
      )}
    </ul>
  );
}

export async function getStaticProps(context){
  console.log('(Re..)Generating.....');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const fileProducts =  await fs.readFile(filePath);
  const data = JSON.parse(fileProducts);
  return {
    props : {
      products: data.products
    },
    revalidate:10
  }
}

export default HomePage;
