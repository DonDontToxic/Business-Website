import React from "react";
import home1 from "../img/home1.png"
// Styled
import styled from "styled-components";
import { About, Description, Image, Hidden} from "../styles"


const AboutSection = () => {
    return (
        <About> 
            <Description>
                <div className="title">
                    <Hidden>
                        <h2>We work to make</h2>
                    </Hidden>
                    <Hidden>
                    <h2>your <span>dreams</span></h2>
                    </Hidden>
                    <Hidden>
                    <h2>come true.</h2>
                    </Hidden>
                </div>
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