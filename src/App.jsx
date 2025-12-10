import { AnimatePresence} from "framer-motion";
import './App.css'
import MainLayout from './MainLayout';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Project from './pages/Project';
import { ThemeProvider, createTheme} from '@mui/material/styles';


function App() {
  const location = useLocation();
  const theme = createTheme({
  colorSchemes: {
    light: {
      palette:{
        text: {primary:"#737373"},
        link: {default: "#737373", hover:"black"},
        background: {default:"#ffffff"}
      }
    },
    dark: {
      palette:{
        text: {primary:"#ffffff"},
        link: {default: "#ffffff", hover:"#737373"},
        background: {default:"black"}
      }
    },
  },
  });

  return (
    <>
     <ThemeProvider theme={theme}>
      <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/post/:slug" element={<Project />} />
              </Route>
            </Routes>
      </AnimatePresence>
    </ThemeProvider>
    </>
  )
}

export default App
