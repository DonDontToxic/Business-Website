import React from "react";
import home1 from "../img/home1.png"
// Styled
import { About, Description, Image, Hidden} from "../styles"
// Framer Motion
import {motion} from "framer-motion";
import {titleAnimation, fade, photoAnimation} from "../animation";
const AboutSection = () => {
    return (
        <About> 
            <Description>
                <motion.div className="title">
                    <Hidden>
                        <motion.h2
                            variants={titleAnimation}
                        >We work to make</motion.h2>
                    </Hidden>
                    <Hidden>
                        <motion.h2
                            variants={titleAnimation}
                        >your <span>dreams</span></motion.h2>
                    </Hidden>
                    <Hidden>
                        <motion.h2
                            variants={titleAnimation}
                        >come true.</motion.h2>
                    </Hidden>
                </motion.div>
                <motion.p
                    variants={fade}
                >Contact us for any photography or videography ideas 
                    that you have. We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contact us</motion.button>  
            </Description>
            <Image>
                <motion.img
                    src={home1}
                    alt="Guy with a camera"
                    variants={photoAnimation}
                />
            </Image>
        </About>
    )
}



export default AboutSection;