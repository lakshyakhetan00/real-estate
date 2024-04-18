import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to RentUp, your premier destination for all your property needs. Founded with a vision to revolutionize the real estate industry, we are committed to providing exceptional service and innovative solutions to our clients.

At RentUp, we understand that buying, selling, or renting property can be a significant milestone in your life. That's why we've assembled a team of experienced professionals dedicated to guiding you through every step of the process with expertise and integrity.

Our mission is simple: to empower individuals and businesses with the information and tools they need to make informed decisions about real estate. Whether you're searching for your dream home, looking to invest in commercial properties, or seeking expert advice on market trends, we're here to help you achieve your goals.

What sets us apart is our unwavering commitment to excellence in everything we do. From our user-friendly website interface to our personalized customer service, we strive to exceed your expectations at every turn. With cutting-edge technology and industry-leading resources at our disposal, we are well-equipped to meet your needs and exceed your expectations.

But beyond our professional expertise, it's our passion for real estate and our dedication to serving our community that truly drives us. We believe in building lasting relationships based on trust, transparency, and mutual respect. When you choose [Your Real Estate Website], you're not just a client – you're part of our family.

Thank you for choosing [Your Real Estate Website]. We look forward to serving you and helping you achieve your real estate dreams. Let's embark on this journey together and turn your vision into reality.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
