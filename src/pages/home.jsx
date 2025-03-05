import React, { useState, useEffect } from "react";
import Base from '../components/Base'
import resume from '../img/Resume.pdf'

export default function Home() {

    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [screenSize, setScreenSize] = useState(getScreenSize());

    function getScreenSize() {
        const width = window.innerWidth;
        if (width < 768) return "small"; // Desktop
        if (width < 992) return "medium"; // Tablet
        return "large"; // Mobile
    }

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSize());
            if (window.innerWidth < 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const show = () => {
        setIsOpen(true);
    };

    const hide = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navStyles = {
        large: {
            display: "grid",
            height: "100px",
            alignItems: "center",
            margin: "0 5%",
        },
        medium: {
            textAlign: "center",
            gridTemplateColumns: "100%",
        },
        small: {
            height: isOpen ? "400px" : "50px",
        },
    };

    const navListStyles = {
        large: {
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-around",
        },
        medium: {
            display:"flex",
        },
        small: {
            display: isOpen ? "grid" : "none",
        },
    };

    const up ={
        large:{
            display: "none",
        },
        medium:{
            display: "none",
        },
        small:{
            display: isOpen ? "block" : "none" 
        } 
    };

    const down ={
        large:{
            display: "none",
        },
        medium:{
            display: "none",
        },
        small:{
            display: isOpen ? "none" : "block" 
        } 
    }


    return (
        <>
            <nav id="home" style={{ ...navStyles[screenSize], transition: "0.3s ease" }}>
                <h3><a href="/">Devmini</a></h3>
                <div style={{ ...navListStyles[screenSize], transition: "0.5s ease",
                }} className="nav-list">
                    <a href="#myskills"><span style={{ color: "var(--3)" }}>01.</span> My Skills</a>
                    <a href="#aboutme"><span style={{ color: "var(--4)" }}>02.</span> About Me</a>
                    <a href="#myprojects"><span style={{ color: "var(--5)" }}>03.</span> My Projects</a>
                    <a href="#contactme"><span style={{ color: "var(--6)" }}>04.</span> Contact Me</a>
                </div>


                {!isOpen ? (
                    <div className="down" id="down" onClick={show} style={{ ...down[screenSize] }}>
                        <img src={Base.down} alt="Open Menu" />
                    </div>
                ) : (
                    <div className="up" id="up" onClick={hide} style={{ ...up[screenSize] }}>
                        <img src={Base.up} alt="Close Menu" />
                    </div>
                )}
            </nav>


            <main>
                <div>
                    <h1>
                        Hi there<span style={{ color: "var(--5)" }}>!</span> <br /> My name is Damini <br /> <span
                            style={{ color: "var(--6)" }}>&</span> <br /> I<span style={{ color: "var(--3)" }}>'</span>m a <span
                                style={{ color: "var(--4)" }}>Front-end developer</span>
                        <br />
                        <a href={resume} target="_blank"><button className="btn-resume">Download resume</button></a>
                    </h1>
                </div>
            </main>

            <section>
                <div className="myskills" id="myskills">
                    <div className="subH"><span style={{ color: "var(--3)" }}>01.</span> My Skills</div><br />
                    <div className="skills">
                        <div>
                            <div style={{ backgroundColor: "var(--5)" }}></div>
                            <div style={{ backgroundColor: "var(--3)" }}></div>
                            <div style={{ backgroundColor: "var(--6)" }}></div>
                        </div>
                        <div>
                            <div>
                                <ul>
                                    <li>1</li><br />
                                    <li>2</li><br />
                                    <li>3</li><br />
                                    <li>4</li><br />
                                    <li>5</li><br />
                                    <li>6</li><br />
                                    <li>7</li><br />
                                    <li>8</li><br />
                                    <li>9</li><br />
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>&lt;skills&gt;</li><br />
                                    <ul>
                                        <li>&lt;<span style={{ color: "var(--3)" }}>HTML</span>&gt;</li><br />
                                        <li>&lt;<span style={{ color: "var(--4)" }}>CSS</span>&gt;</li><br />
                                        <li>&lt;<span style={{ color: "var(--5)" }}>Bootstrap</span>&gt;</li><br />
                                        <li>&lt;<span style={{ color: "var(--6)" }}>Javascript</span>&gt;</li><br />
                                        <li>&lt;<span style={{ color: "var(--3)" }}>Node.js</span>&gt;</li><br />
                                        <li>&lt;<span style={{ color: "var(--4)" }}>React.js</span>&gt;</li><br />
                                        <li>&lt;<span style={{ color: "var(--5)" }}>Figma</span>&gt;</li><br />
                                    </ul>
                                    <li>&lt;/skills&gt;</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aboutme" id="aboutme">
                    <div className="subH"><span style={{ color: "var(--4)" }}>02.</span> About Me</div><br />
                    <div className="about">
                        <div>
                            <p>Hello! I'm Damini, an aspiring <span style={{ color: "var(--4)" }}>front-end developer</span> with a
                                passion
                                for
                                building visually appealing
                                and user-friendly websites. Skilled in HTML, CSS, Javascript, Node.js, Bootstrap & UI
                                designing
                                tool
                                Figma. I worked on <span style={{ color: "var(--5)" }}>UI design</span> using <span
                                    style={{ color: "var(--6)" }}>Figma</span> for a while, and then I chose Front-end development.
                                <br /><br />
                                My journey as a Front-end developer is just beginning, which started with a curiosity about
                                how
                                websites
                                are built and a desire to bring my creative ideas to life on the web. Over the past year,
                                I've
                                immersed
                                myself in learning the fundamental technologies and concepts that form the backbone of
                                modern
                                web
                                development
                            </p>
                        </div>
                        <div className="devimage"><img src={Base.developer} alt="" /></div>
                    </div>
                </div>

                <div className="myprojects" id="myprojects">
                    <div className="subH"><span style={{ color: "var(--5)" }}>03.</span> My Projects</div><br />
                    <div className="projects">
                        <a href="https://artgallery-five.vercel.app/" target="_blank">
                            <div className="project">
                                <div className="proimg"><img src={Base.project1} alt="" /></div>
                                <div className="prodes">
                                    <h3>&lt;<span style={{ color: "var(--3)" }}>Art Gallery</span>&gt;</h3>
                                    <p>&lt;project-description&gt;<span style={{ color: "var(--5)" }}> A website that makes it easy
                                        for visitors to explore our art collection. Show off each artwork with beautiful
                                        pictures and simple menus, so everyone can enjoy looking at art
                                        online. </span>&lt;/project-description&gt;</p>
                                    <p>&lt;technologies/tools&gt; :
                                        &lt;<span style={{ color: "var(--3)" }}>HTML</span>&gt;
                                        &lt;<span style={{ color: "var(--4)" }}>CSS</span>&gt;
                                        &lt;<span style={{ color: "var(--6)" }}>Javascript</span>&gt;
                                        &lt;<span style={{ color: "var(--3)" }}>Node.js</span>&gt;</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/posts/damini-nayak_meat-delivery-project-activity-7145345196501757952-idxU?utm_source=share&utm_medium=member_android"
                            target="_blank">
                            <div className="project-reverse">
                                <div className="proimg order2"><img src={Base.project2} alt="" /></div>
                                <div className="prodes order1">
                                    <h3>&lt;<span style={{ color: "var(--3)" }}>Meat delivery project</span>&gt;</h3>
                                    <p>&lt;project-description&gt;<span style={{ color: "var(--5)" }}> Developed the user interface
                                        (UI) design for a meat delivery service platform, aimed at providing customers
                                        with a effortless and user-friendly online shopping experience for purchasing
                                        high-quality meats. </span>&lt;/project-description&gt;</p>
                                    <p>&lt;technologies/tools&gt; : &lt;<span style={{ color: "var(--4)" }}>Figma</span>&gt;</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.shreecoaching.in/" target="_blank">
                            <div className="project">
                                <div className="proimg"><img src={Base.shreecoaching} alt="" /></div>
                                <div className="prodes">
                                    <h3>&lt;<span style={{ color: "var(--3)" }}>Shree Classes</span>&gt;</h3>
                                    <p>&lt;project-description&gt;<span style={{ color: "var(--5)" }}> The Website provides interactive
                                        courses and enables visitors to easily inquire online, eliminating the need for physical
                                        visits to know about coaching class. </span>&lt;/project-description&gt;</p>
                                    <p>&lt;technologies/tools&gt; :
                                        &lt;<span style={{ color: "var(--3)" }}>HTML</span>&gt;
                                        &lt;<span style={{ color: "var(--4)" }}>CSS</span>&gt;
                                        &lt;<span style={{ color: "var(--5)" }}>Bootstrap</span>&gt;
                                        &lt;<span style={{ color: "var(--6)" }}>Javascript</span>&gt;
                                        &lt;<span style={{ color: "var(--3)" }}>Node.js</span>&gt;</p>
                                </div>
                            </div>
                        </a>
                        {/* <a href="https://artgallery-five.vercel.app/" target="_blank"> */}
                        {/* <div className="project progress">
                        <div className="proimg progressimg"><img src={Base.progress} alt="" /></div>
                        <div className="prodes">
                            <h3>&lt;<span style={{color:"var(--3)"}}>Shree Classes</span>&gt;</h3>
                            <p>&lt;project-description&gt;<span style={{color:"var(--5)"}}> The Website provides interactive
                                courses and enables visitors to easily inquire online, eliminating the need for physical
                                visits to know about coaching class. </span>&lt;/project-description&gt;</p>
                            <p>&lt;technologies/tools&gt; :
                                &lt;<span style={{color:"var(--3)"}}>HTML</span>&gt;
                                &lt;<span style={{color:"var(--4)"}}>CSS</span>&gt;
                                &lt;<span style={{color:"var(--6)"}}>Javascript</span>&gt;
                                &lt;<span style={{color:"var(--3)"}}>Node.js</span>&gt;</p>
                        </div>
                    </div> */}
                        {/* </a> */}
                        <a href="https://green-haven-one.vercel.app/"
                            target="_blank">
                            <div className="project-reverse">
                                <div className="proimg order2"><img src={Base.project3} alt="" /></div>
                                <div className="prodes order1">
                                    <h3>&lt;<span style={{ color: "var(--3)" }}>Green Haven</span>&gt;</h3>
                                    <p>&lt;project-description&gt;<span style={{ color: "var(--5)" }}> Green Haven is a plant nursery project designed to offer expert care tips for seasonal flowers, DIY gardening solutions, creative garden designs, and showcare services, fostering a thriving green space for enthusiasts and homeowners. </span>&lt;/project-description&gt;</p>
                                    <p>&lt;technologies/tools&gt; : &lt;<span style={{ color: "var(--4)" }}>React.js</span>&gt;</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="contactme" id="contactme">
                    <div className="subH"><span style={{ color: "var(--6)" }}>04.</span> Contact Me</div><br />
                    <div className="contact">
                        <a href="mailto:damininayak.ryp@gmail.com">
                            <div><img src={Base.email} alt="" />
                                <p>&lt;<span style={{ color: "var(--3)" }}>damininayak.ryp@gmail.com</span>&gt;</p>
                            </div>
                        </a>
                        <a href="tel:+917049377452">
                            <div><img src={Base.telephone} alt="" />
                                <p>&lt;<span style={{ color: "var(--4)" }}>7049377452</span>&gt;</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/damini-nayak" target="_blank">
                            <div><img src={Base.linkedin} alt="" />
                                <p>&lt;<span style={{ color: "var(--5)" }}>LinkedIn</span>&gt;</p>
                            </div>
                        </a>
                        <a href="https://github.com/Damini-nayak" target="_blank">
                            <div><img src={Base.github} alt="" />
                                <p>&lt;<span style={{ color: "var(--6)" }}>Github</span>&gt;</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <div id="home" className={`gototop ${isVisible ? "visible" : "hidden"}`}>
                <div className="nav-list">
                    <a href="#home"><span style={{ color: "var(--6)" }}>00.</span> Home</a>
                    <a href="#myskills"><span style={{ color: "var(--3)" }}>01.</span> My Skills</a>
                    <a href="#aboutme"><span style={{ color: "var(--4)" }}>02.</span> About Me</a>
                    <a href="#myprojects"><span style={{ color: "var(--5)" }}>03.</span> My Projects</a>
                    <a href="#contactme"><span style={{ color: "var(--6)" }}>04.</span> Contact Me</a>
                </div>
            </div>
        </>
    )
}
