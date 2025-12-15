import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

function ProjectCard(props){
    const theme = useTheme();
    const images = props.img;
    const widthResize = ['kunyahwebsite', 'kunyahmobile', 'bankpeerapp'].includes(props.name);
    const heightResize=['bankpeerapp', 'kunyahmobile'].includes(props.name);
    const isVideo = ['kunyahmobile', 'calculator'].includes(props.name);

    return(
        <motion.div
            initial = {{opacity:0}}
            animate = {{opacity: 1}}
            exit = {{opacity: 0}}
            transition = {{duration: 0.2}}
            style={{ width: "100%" }}
        >
        
        <Card sx={{maxWidth: 800}}>
            {images.map((i)=> (
                <CardMedia sx={{marginBottom: 1, objectFit:'contain', width: widthResize  ? "50%" : "100%", display: widthResize ? "inline" : "block", maxHeight: heightResize ? 500 : "none"}} key={i} component={isVideo ? "video" : "img"} {...(isVideo ? { controls: true, autoPlay: true, loop: true} : {})} alt={props.title}  src={i} />
            ))}
            <CardContent>
                <p className='cousine-bold'><u>{props.title}</u></p>
                <p className='cousine-regular'>{props.desc}</p>
                {props.url ? <Link sx={{ color: theme.palette.link.default, "&:hover": {color: theme.palette.link.hover}, fontFamily: 'Cousine', fontWeight: 'bold', textDecoration: 'none', fontSize: 12}} href={props.url} >↠ Try it out here ↞</Link> : null}
            </CardContent>
        </Card>
        </motion.div>
        
    );
}

export default ProjectCard;