import Box from '@mui/material/Box';
import {motion} from 'framer-motion';
import { Link } from '@mui/material';
import {useTheme} from '@mui/material/styles';

function About(){
   const theme = useTheme();
   return (
   <motion.div
   initial = {{opacity:0}}
   animate = {{opacity: 1}}
   exit = {{opacity: 0}}
   transition = {{duration: 0.5}}
   >
   <Box sx={{  display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    minWidth: "80vw"}}>
      <p className='cousine-bold'>about me</p>
      <p className="cousine-regular">dia / 26 / female</p>
      <p className="cousine-regular">I graduated from Singapore Management University in 2024, majoring in Information Systems. </p>
      <p className="cousine-regular">in my free time, you can find me reading, cooking or powerlifting.</p>
      <p className='cousine-bold' style={{marginTop:50}}>contact me</p>
      <p className="cousine-regular">if you're interested to collaborate, you can reach me at:</p>
      <p className="cousine-regular">euodiatan1999@gmail.com</p>
      <Link href="https://www.linkedin.com/in/euodia-t-460b1a173/" sx={{ color: theme.palette.link.default, "&:hover": {color: theme.palette.link.hover}, fontFamily: 'Cousine', textDecoration: 'underline', fontSize: 12}}>My LinkedIn</Link>
   </Box>
   {/* <Box sx={{mb: 10}}>
      <p className="cousine-bold">my leadership/community experiences</p>
      <Box sx={{mt:2.5, mb: 5}}>
      <p className="cousine-regular" style={{marginTop: 20}}><u>Project Leader of SMU Project HeartCode (2022) </u></p>
      <p className="cousine-regular">I had the meaningful opportunity to lead a community service project that aims to provide underprivileged youths opportunities to learn web development skills. Besides coding skills, I also organized sessions for them to learn peer mental well-being support techniques, as I made mental health the focus of the service-learning portion.</p>
      </Box>
      <Box sx={{mt:2.5, mb: 5}}>
      <p className="cousine-regular" style={{marginTop: 20}}><u>Student Organizer for International Day in Kozminski University, Poland (2023)</u></p>
      <p className="cousine-regular">I helped to facilitate the commencement and activities of International Day, where students travel outside of Warsaw to visit an orphanage housing children with mental disabilities.</p>
      </Box>
      <Box sx={{mt:2.5, mb: 5}}>
      <p className="cousine-regular" style={{marginTop: 20}}><u>Project Leader for a Final Year Project with Fortitude Culina Pte Ltd (2024)</u></p>
      <p className="cousine-regular">In SMU, I led a team of five to design and develop a digitalised, accessible ordering system for a F&B Establishment that hires employees with physical disabilities.</p>
      <p className="cousine-regular">The aim of the project was to remove their pain points from a physical ordering system, and give them more time and leeway to focus on their food preparation tasks. We designed and developed a self-ordering mobile system and a order display interface that was accessibility-friendly.</p>
      </Box>
   </Box> */}
   </motion.div>
   ); 
}

export default About;