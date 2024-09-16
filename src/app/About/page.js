import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";



function About  () {
  return (
    <div className='w-[80%] m-auto lg:flex gap-[25px] pt-[90px] items-start h-[90vh]'>
     <div className="leftSidePanel lg:flex-[1] md:flex-[0] sm:flex-[none] border-[0.5px] rounded-[8px] border-[#333333] bg-[#1a1a1a] p-[20px]">
      <div className='flex gap-[19px] items-center'>
        <Image src='/Dori.jpg' width={60} height={150} className='object-cover rounded-[100px] h-[60px]' alt='dorinel rushi'/>
        <h3 className='font-bold text-[19px]'>Dorinel Rushi</h3>
      </div>
      {/* levels */}
      <div className='flex justify-between mt-[19px] border-b-[1px] border-b-[#333333] pb-[19px] border-[#aaaa]'>
        <h2 >My Level</h2>
        <h3 className='font-bold'>Best seller</h3>
      </div>
      {/* Score */}
      <div className='flex justify-between mt-[10px] '>
        <h2>Success score</h2>
        <h3 className='font-bold'>10/10</h3>
      </div>
      {/* Rating */}
      <div className='flex justify-between mt-[25px] '>
        <h2>Rating</h2>
        <div className='flex items-center gap-[5px]'>
        <FaStar className='text-[orange]' />
        <h3 className='font-bold'>5</h3>
        </div>
      </div>
       {/* Response */}
       <div className='flex justify-between mt-[25px] '>
        <h2>Response rate</h2>
        <h3 className='font-bold'>100%</h3>
      </div>
      {/*button */}
      <Link href='/#contact'>
      <button className='border-[0.5px] border-[#333333] w-[100%] rounded-[8px] py-[13px] mt-[19px] mb-[10px] bg-[#00b22d]'>
       Lets Collaborate
      </button>
     </Link>
     </div>
     <div className='rightSidePanel lg:mt-[0px] md:mt-[20px] sm:mt-[20px] border-[0.5px] rounded-[8px] border-[#333333] lg:h-[80vh] md:h-[50vh] sm:h-[50vh] overflow-y-scroll bg-[#1a1a1a] lg:flex-[3] md:flex-[0] sm:flex-[none] p-[20px]'>
      <h2 className='font-bold text-[19px] mb-[20px]'>About Me</h2>
      <p className='max-w-[750px] text-[18px] mb-[28px]'>Hey, my name is Dorinel Rushi, and I am a passionate Web Designer and Front-End Developer from Albania. With over 5 years of experience in the field, I am dedicated to crafting beautiful, functional, and user-friendly websites that meet the unique needs of my clients.</p>
      <div className='w-[100%] h-[1px] bg-[#272727] mb-[20px]'></div>
        {/*language */}
     <h2 className='font-bold text-[19px] mb-[15px]'>Languages</h2>
     <div className='flex gap-[25px]'>
      <h2>English</h2>
      <h3 className='font-bold'>Conversational</h3>
     </div>
     <div className='flex gap-[25px] mt-[15px] mb-[15px]'>
      <h2>Shqip</h2>
      <h3 className='font-bold'>Conversational</h3>
     </div>
     <div className='w-[100%] h-[1px] bg-[#272727] mb-[20px]'></div>
     <h2 className='font-bold text-[19px] mb-[15px]'>Skills</h2>
     <div className='flex flex-wrap w-[59%] gap-[19px] '>
      <div className='border-[1px] border-[#333333] flex items-center gap-[5px] px-[19px] py-[5px] rounded-[50px] flex justify-center items-center'> <MdVerified  className='text-[#00b22d]'/> HTML</div>
      <div className='border-[1px] border-[#333333] flex items-center gap-[5px] px-[19px] py-[5px]  rounded-[50px] flex justify-center items-center'> <MdVerified  className='text-[#00b22d]'/>CSS</div>
      <div className='border-[1px]  border-[#333333] flex items-center gap-[5px] px-[19px] py-[5px]  rounded-[50px] flex justify-center items-center'> <MdVerified  className='text-[#00b22d]'/>Javascript</div>
      <div className='border-[1px] border-[#333333] flex items-center gap-[5px] px-[19px] py-[5px]  rounded-[50px] flex justify-center items-center'><MdVerified  className='text-[#00b22d]'/> NextJs</div>
      <div className='border-[1px] border-[#333333] px-[19px] flex items-center gap-[5px] py-[5px]  rounded-[50px] flex justify-center items-center'> <MdVerified  className='text-[#00b22d]'/>Wordpress / Shopify</div>
      <div className='border-[1px] border-[#333333] px-[19px] py-[5px] flex items-center gap-[5px]  rounded-[50px] flex justify-center items-center'> <MdVerified  className='text-[#00b22d]'/> Photoshop</div>
      <div className='border-[1px] border-[#333333] px-[19px] py-[5px] flex items-center gap-[5px]  rounded-[50px] flex justify-center items-center'> <MdVerified  className='text-[#00b22d]'/> Ilustrator</div>
     </div>
     <div className='w-[100%] h-[1px] bg-[#272727] mt-[29px] mb-[20px]'></div>
     <h2 className='font-bold text-[19px] mb-[15px]'>Career</h2>
     <div className='career'>
      <h2 className='font-bold'>2019 - 2020</h2>
      <p className='max-w-[750px] text-[15px] mt-[15px]'>Started as a freelancer, working for various clients and companies in my country. Focused on web design and front-end development, enhancing my skills in HTML, CSS, JavaScript, and design tools like Figma and Photoshop.</p>
      <div className='h-[100px]  border-l-[0.5px] mt-[10px] mb-[10px] border-dashed border-[#333333]'></div>
      <h2 className='font-bold'>2021 - 2024</h2>
      <p className='max-w-[750px] text-[15px] mt-[15px]'>Started working for Paeon Marketing for 3 years as a web designer and developer, focusing on creating engaging and responsive websites, improving user experiences, and collaborating on various marketing projects.</p>
      <div className='h-[100px]  border-l-[0.5px] mt-[10px] mb-[10px] border-dashed border-[#333333]'></div>
      <h2 className='font-bold'>2024 - Continue </h2>
      <p className='max-w-[750px] text-[15px] mt-[15px]'>I am building my own company, focusing on delivering innovative web design and development solutions. My goal is to create a unique brand that excels in providing exceptional digital experiences for clients. </p>
     </div>
      {/*project */}
      <h2 className='font-bold text-[19px] mt-[30px] mb-[20px]'>My Projects</h2>
      <div className=''>
        <div className='flex gap-[25px] flex-wrap'>
        <iframe src="https://www.behance.net/embed/project/203135475?ilo0=1" height="316" width="404"  allow="clipboard-write" allowFullScreen ></iframe>
        <iframe src="https://www.behance.net/embed/project/195931865?ilo0=1" height="316" width="404" allow="clipboard-write"  allowFullScreen></iframe>
        <iframe src="https://www.behance.net/embed/project/196554531?ilo0=1" height="316" width="404" allow="clipboard-write"  allowFullScreen></iframe>
        <iframe src="https://www.behance.net/embed/project/195658461?ilo0=1" height="316" width="404" allow="clipboard-write"  allowFullScreen></iframe>
        <iframe src="https://www.behance.net/embed/project/191059297?ilo0=1" height="316" width="404" allow="clipboard-write"  allowFullScreen></iframe>
        <iframe src="https://www.behance.net/embed/project/193369931?ilo0=1" height="316" width="404" allow="clipboard-write"  allowFullScreen></iframe>
        </div>
      </div>
     </div>
    </div>
  )
}

export default About