import React from 'react'
import vg from '../assets/2.webp'
import {AifillGoogleCircle,Amazon,AiFillYoutube} from 'react-icons/ai'
const Home = () => {
  return (
    <div className='parent'>
    <div className='home'>
    <main>
        <h1> Technotron </h1>
        <p> Lets Start a Journey Towards Future</p>
    </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="" />
        <div>
            <p>
            Technotron, created by Faiz, is a dynamic and innovative website that caters to the latest technological advancements. The website features a user-friendly interface that allows easy navigation and access to a wide range of tech-related content. With a focus on delivering accurate and up-to-date information, Technotron covers various topics such as software, hardware, gadgets, gaming, and cybersecurity. Faiz has ensured that the website is designed to provide an immersive experience to visitors, with well-curated articles, reviews, and how-to guides. Whether you're a tech enthusiast or a novice, Technotron is an excellent source of information that can keep you updated on the latest trends and developments in the world of technology.
            </p>
        </div>
    </div>
    <div  className='home3'>
    <div>
      <h1>Who Am I</h1>
      <p>
        
Faiz is a highly motivated and skilled MCA graduate from Jain University, with a passion for technology and a drive to excel in the field of web development. As the administrator of the TechnoTron website, Faiz brings a wealth of knowledge and experience to the table, ensuring that the site runs smoothly and efficiently.

With a keen eye for detail and a strong sense of innovation, Faiz is always on the lookout for new and exciting ways to improve the user experience and enhance the site's functionality. His expertise in web development, coupled with his ability to think outside the box, make him an invaluable asset to the TechnoTron team.

As an individual, Faiz is dedicated, hardworking, and always striving to be the best. His commitment to excellence is reflected in the quality of his work, and his ability to collaborate effectively with others makes him a true team player. With his skills, passion, and determination, Faiz is sure to make a lasting impact in the world of web development and beyond.
      </p>
      </div>
    </div>

<div className='home4'>
  <div>
    <h1>Brands</h1>
    <article>
    <div>

    </div>
    </article>
  </div>
</div>

    </div>
  )
}

export default Home