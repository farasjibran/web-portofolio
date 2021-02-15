import React from 'react';

function HomeScreen() {
    return (
        <>
            <div className="page-body-wrapper">
                <section id="home" className="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="main-banner">
                                    <div className="d-sm-flex justify-content-between">
                                        <div data-aos="zoom-in-up">
                                            <div className="banner-title">
                                                <h3 className="font-weight-medium">Welcome To My Portofolio Website, And Please Enjoy
                            </h3>
                                            </div>
                                            <p className="mt-3">You Can Visit My Github With Button Under This Text.
                            </p>
                                            <a href="https://github.com/farasjibran" className="btn btn-secondary mt-3">Go To GitHub</a>
                                        </div>
                                        <div className="mt-5 mt-lg-0">
                                            <img src="images/opening.svg" alt="marsmello" className="img-fluid" data-aos="zoom-in-up" width={800} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-services" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h5 className="text-dark">Section About My Skill</h5>
                                <h3 className="font-weight-medium text-dark mb-5">The Skills I Have Right Now</h3>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-sm-4 text-center text-lg-left">
                                <div className="services-box" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                                    <img src="images/logos_codeigniter.svg" alt="integrated-marketing" data-aos="zoom-in" />
                                    <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                        CodeIgniter
                                    </h6>
                                    <p>
                                        I have quite experience in Codeigniter programming language. you can see it in the project section that I have finished.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center text-lg-left">
                                <div className="services-box" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                                    <img src="images/logos_laravel.svg" alt="design-development" data-aos="zoom-in" />
                                    <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                        Laravel
                                    </h6>
                                    <p>
                                        in laravel language I am also quite experienced because I am still working in the world of laravel, and until the latest laravel I can do it.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center text-lg-left">
                                <div className="services-box" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                                    <img src="images/logos_lumen.svg" alt="digital-strategy" data-aos="zoom-in" />
                                    <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                        Lumen
                                    </h6>
                                    <p>
                                        In Lumens, I also use it quite often as a fire in React JS or React Native. I can create a full API rest in a flash.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-sm-4 text-center text-lg-left">
                                <div className="services-box  pb-lg-0" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                                    <img src="images/logos_react.svg" alt="digital-marketing" data-aos="zoom-in" />
                                    <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                        React JS
                                    </h6>
                                    <p>
                                        In React JS language, I am still inexperienced because I have only been working with React for about 8 months. but you can see the projects I have worked on in the work section.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center text-lg-left">
                                <div className="services-box pb-lg-0" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                                    <img src="images/logos_mysql.svg" alt="growth-strategy" data-aos="zoom-in" />
                                    <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                        My Sql
                                    </h6>
                                    <p>
                                        my sql or database i am very good with it. because it must be related to laravel, lumen or codeigniter. so I must also master mysql.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center text-lg-left">
                                <div className="services-box pb-0" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                                    <img src="images/logos_figma.svg" alt="saving-strategy" data-aos="zoom-in" />
                                    <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                        Design UI
                                    </h6>
                                    <p>
                                        I am also good at designing something, I can design your application or website, everything is according to what you ask.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-process" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6" data-aos="fade-up">
                                <h5 className="text-dark">Hello, My Name Is</h5>
                                <h3 className="font-weight-medium text-dark">Muhammad Farras Jibran</h3>
                                <h5 className="text-dark mb-3">
                                    my desire is to be rich not to look rich</h5>
                                <p className="font-weight-medium mb-4">
                                    below is a little about me.
                                </p>
                                <div className="d-flex justify-content-start mb-3">
                                    <img src="images/tick.png" alt="tick" className="mr-3 tick-icon" />
                                    <p className="mb-0">
                                        I still go to school at SMK TARUNA BHAKTI DEPOK until now, and I am in grade 3.</p>
                                </div>
                                <div className="d-flex justify-content-start mb-3">
                                    <img src="images/tick.png" alt="tick" className="mr-3 tick-icon" />
                                    <p className="mb-0">
                                        My major in SMK TARUNA BHAKTI DEPOK is software engineering.</p>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <img src="images/tick.png" alt="tick" className="mr-3 tick-icon" />
                                    <p className="mb-0">
                                        I am 17 years old when this website was created, and I am not married.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 text-right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={2000}>
                                <img src="images/person.svg" width={400} alt="idea" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="our-projects" id="projects" style={{ marginBottom: '10%' }}>
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-sm-12">
                                <div className="d-sm-flex justify-content-between align-items-center mb-2">
                                    <h3 className="font-weight-medium text-dark ">Let's See My Latest Project</h3>
                                    <div><a href="https://github.com/farasjibran?tab=repositories" className="btn btn-outline-primary">View more</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5" data-aos="fade-up">
                        <div className="owl-carousel-projects owl-carousel owl-theme">
                            <div className="item">
                                <a href="https://github.com/EH-Corporation-Magang/Promo-Magang-V1">
                                    <img src="images/carousel/slide1.png" alt="slider" />
                                </a>
                            </div>
                            <div className="item">
                                <img src="images/carousel/slide2.png" alt="slider" />
                            </div>
                            <div className="item">
                                <img src="images/carousel/slide3.png" alt="slider" />
                            </div>
                            <div className="item">
                                <img src="images/carousel/slide4.png" alt="slider" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomeScreen