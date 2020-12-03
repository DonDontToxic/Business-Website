import React from "react";
import home1 from "../img/home1.png"
// Styled
import { About, Description, Image, Hidden} from "../styles"
// Framer Motion
import {motion} from "framer-motion";

const AboutSection = () => {

    return (
        <About> 
            <Description>
                <motion.div className="title">
                    <Hidden>
                        <motion.h2
                        >We work to make</motion.h2>
                    </Hidden>
                    <Hidden>
                        <motion.h2
                        >your <span>dreams</span></motion.h2>
                    </Hidden>
                    <Hidden>
                        <motion.h2
                        >come true.</motion.h2>
                    </Hidden>
                </motion.div>
                <p>Contact us for any photography or videography ideas 
                that you have. We have professionals with amazing skills.</p>
                <button>Contact us</button>  
            </Description>
            <Image>
                <img src={home1} alt="Guy with a camera"/>
            </Image>
        </About>
    )
}



export default AboutSection;