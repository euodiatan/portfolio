import { useParams } from "react-router-dom";
import ProjectCard from '../components/Card';
import { Box } from "@mui/material";
import Asteroid1 from "../assets/asteroid-tracker-bigger.png";
import Asteroid2 from "../assets/asteroid-tracker2.png";
import HeatMap from "../assets/heatmap2.jpg";
import KunyahWebsite from "../assets/kunyahwebsite.png";
import KunyahMobile from "../assets/kunyahordervideo.mp4";
import CalculatorVideo1 from "../assets/uiuxcalculatorvideo.mp4";
import CalculatorVideo2 from "../assets/DSPO_UIUX_Calculator.mp4";
import BookNotes1 from "../assets/book-notes-bigger.png";
import BookNotes2 from "../assets/book-notes2.png";
import BookNotes3 from "../assets/book-notes3.png";
import BlogPost from "../assets/blog-bigger.png";
import Bank0 from "../assets/bank0.png";
import Bank1 from "../assets/bank1.png";
import Bank2 from "../assets/bank2.png";
import Bank3 from "../assets/bank3.png";
import Bank4 from "../assets/bank4.png";
import Bank5 from "../assets/bank5.png";
import Bank6 from "../assets/bank6.png";
import Bank7 from "../assets/bank7.png";

function Project(){
    const { slug } = useParams();

    const projectData = {
        calculator: {
            title: "Website Carbon Calculator",
            images: [CalculatorVideo2],
            desc:"For GOVTECH Singapore, I developed a website prototype to measure emissions produced by Government websites, and identify needle-moving areas for software developers in image/media/code optimization to decarbonize webpages specific to app development. This was done using React.JS, Express, DynamoDB, and deployed on an AWS EC2."
        },
        kunyahmobile: {
            title: "Mobile Ordering Interface for Kunyah Cafe",
            images: [KunyahMobile],
            desc:"For my university's Final Year Project, I introduced a self-ordering mobile concept for a F&B establishment that hires employees with disabilities. This was done with React.JS, Node.JS and PostGresSQL, and deployed on an AWS EC2."
        },
         kunyahwebsite: {
            title: "Corporate Website Prototype for Fortitude Culina Pte Ltd",
            images: [KunyahWebsite],
            desc:"For my university's Final Year Project, I prototyped a corporate website for a F&B establishment that hires employees with disabilities. This was done with Figma."
        },
        doctorheatmap: {
            title: "Internet-of-Things: Patient Wearable Heart Rate Monitor Dashboard",
            images: [HeatMap],
            desc:"For my university's module, Cloud Management & Engineering, I developed a doctor's dashboard to monitor the heart rate of patients wearing IoT devices. This was done using React.JS and Chart.JS, with data collected from an S3 bucket after processing via SageMaker and Glue. It was deployed on an AWS EC2."
        },
        asteroid: {
            title: "Asteroid Website Tracker",
            images: [Asteroid1, Asteroid2],
            desc:"For fun, I designed and developed a website that calls NASA's open database to retrieve asteroid information. It allows users to input a data range and get a list of potentially hazardous asteroids that are flying near Earth. This was done using EJS and CSS.",
            link: "https://asteroid-tracker-yixg.onrender.com/"
        },
        booknotes: {
            title: "Book Notes Website",
            images: [BookNotes1, BookNotes2, BookNotes3],
            desc:"For fun, I designed and developed a website that allows you to record important notes and information about books that you have read. It calls OpenLibrary API to retrieve book covers with valid ISBN. This was done using EJS, CSS and PostGresSQL.",
            link: "https://booknotes-kx6w.onrender.com/"
        },
        blogwebsite: {
            title: "Blog Website",
            images: [BlogPost],
            desc:"For fun, I designed and developed a website that allows you to create, edit and delete blog posts. This was my first project when I learned how to program with EJS.",
            link: "https://blog-website-2gbl.onrender.com/"
        },
        bankpeerapp: {
            title: "Peer to Peer Bank Transaction Mobile App",
            images: [Bank0, Bank1, Bank2, Bank3, Bank4, Bank5, Bank6, Bank7],
            desc:"For a take-home interview assignment, I designed a P2P bank transaction mobile application for users that want an easy and reliable way to send money, that will inform them of the process at every step of the user journey. ",
        }


    };

    return (
        <Box sx={{width: "100%", maxWidth: 1200, mx: "auto" }}>
            <ProjectCard 
                title={projectData[slug].title} 
                name={slug}
                desc={projectData[slug].desc}
                alt={projectData[slug].title} 
                url={projectData[slug].link} img={projectData[slug].images}/>
        </Box>
    );

}

export default Project;