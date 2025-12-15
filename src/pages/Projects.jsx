import { useState } from 'react';
import {motion} from 'framer-motion';
import Box from '@mui/material/Box';
import Image from '../components/ProjectImage';
import CalculatorImage from '../assets/govtechgif.gif';
import AsteroidImage from '../assets/asteroid-tracker.png'
import BlogImage from '../assets/blog.png'
import BookNotesImage from '../assets/book-notes.png'
import HeatMapImage from'../assets/heatmap2.jpg'
import CulinaryWebsiteImage from'../assets/kunyahwebsite.png'
import KunyahMobileImage from '../assets/kunyahmobilegif.gif' 
import BankPeerApp from '../assets/bank8.png'
import Masonry from "@mui/lab/Masonry";
import Link from '@mui/material/Link';

function Projects(){
   const imgList = [{url: BankPeerApp, slug:"bankpeerapp"},{url: CalculatorImage, slug:"calculator"}, {url: CulinaryWebsiteImage, slug: "kunyahwebsite"}, {url: KunyahMobileImage, slug: "kunyahmobile"}, {url: HeatMapImage, slug: "doctorheatmap"}, {url: BookNotesImage, slug: "booknotes"}, { url:AsteroidImage, slug: "asteroid"}, {url: BlogImage, slug: "blogwebsite"}];

   return (
   <motion.div
   initial={{opacity:0}}
   animate={{opacity:1}}
   exit={{opacity:0}}
   transition={{transition: 0.2}}
   >
      <Box sx={{width:"60%", margin:'0 auto',overflowY: 'scroll'}} >
         <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={4}>
            {imgList.map((img, index)=> (
               <div key={index}>
                  <Link href={`/post/${img.slug}`} underline="none" sx={{display:'block'}}>
                     <Image url={img.url} desc={img.slug}/>
                  </Link>
               </div>
            ))}
         </Masonry>        
      </Box>
   </motion.div>
   );
}

export default Projects;