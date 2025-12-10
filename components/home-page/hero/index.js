import classes from './hero.module.css'
import Image from 'next/image'


export default function Hero(){
    return (
        <section className= {classes.hero}>
            <div className= {classes.image} >
                <Image src={`/images/site/sumit.jpg`} alt='My Image' width ={200} height={200}  />
            </div>
            <h1> Hi, I'm Sumit</h1>
            <p>
                Something Went Wrong here !!!!
            </p>

        </section>
    );
}