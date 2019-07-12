import React from "react";

function Banner () {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <header>
                        <a href="/"><img src="../../public/images/logo-streetcorner.svg" alt="logo"/></a>
                        <nav>
                            <ul>
                                <li><a href="#types">types</a></li>
                                <li><a href="#description">description</a></li>
                                <li><a href="$form">form</a></li>
                            </ul>
                        </nav>
                    </header>
                    <div className="banner-info">
                        <h1>Street Corner Ventures<br/>
                            Qualified Opportunity Zone Funds</h1>
                        <p>Street Corner Ventures Qualified Opportunity Funds are a portfolio of qualified opportunity
                            zone funds that achieve attractive risk-adjusted financial returns while making a positive
                            impact.</p>
                        <a className="button" href="#">GET STARTED!</a>
                    </div>
                    <div className="lines">
                        <div className="oval"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>

            <div className="types" id="types">
                <div className="container">
                    <div className="types--item">
                        <div className="number">1</div>
                        <div className="title">IRS: Opportunity Zones Frequently Asked Questions
                        </div>
                        <div className="line"></div>
                        <div className="text">The IRS has published a list of frequently asked questions regarding
                            opportunity zones including: What is an Opportunity Zones; What is a Qualified Opportunity
                            Fund; How Opportunity Zones Spur Economic Development; and much more.
                        </div>
                        <a href="#">READ MORE <img src="../../public/images/Group%2011.svg" alt="strelochka"/></a>
                    </div>
                    <div className="types--item">
                        <div className="number">2</div>
                        <div className="title">IRS: Opportunity Zones Frequently Asked Questions
                        </div>
                        <div className="line"></div>
                        <div className="text">The IRS has published a list of frequently asked questions regarding
                            opportunity zones including: What is an Opportunity Zones; What is a Qualified Opportunity
                            Fund; How Opportunity Zones Spur Economic Development; and much more.
                        </div>
                        <a href="#">READ MORE <img src="../../public/images/Group%2011.svg" alt="strelochka"/></a>
                    </div>
                    <div className="types--item">
                        <div className="number">3</div>
                        <div className="title">IRS: Opportunity Zones Frequently Asked Questions
                        </div>
                        <div className="line"></div>
                        <div className="text">The IRS has published a list of frequently asked questions regarding
                            opportunity zones including: What is an Opportunity Zones; What is a Qualified Opportunity
                            Fund; How Opportunity Zones Spur Economic Development; and much more.
                        </div>
                        <a href="#">READ MORE <img src="../../public/images/Group%2011.svg" alt="strelochka"/></a>
                    </div>
                </div>
            </div>

            <div className="description" id="description">
                <div className="container">
                    <h1>The Street Corner<br/>
                        Investment Strategy</h1>
                    <p>The Street Corner Ventures investment strategy is focused on real investments in major urban
                        cities throughout the country. Street Corner Ventures utilizes a defined criteria for selecting
                        investments in emerging urban centers that stimulate a dense ecosystem of commercial, mixed use,
                        and residential development transforming neighborhoods and providing investors with positive
                        returns.
                    </p>
                </div>
            </div>

            <div className="form" id="form">
                <div className="container">
                    <div className="contact-text">
                        <h1>We’ll<br/>
                            contact you</h1>
                        <p>Complete the simple form below and one of our experts will reach out to you shortly
                            to answer your questions.</p>
                        <a href="#">READ Disclaimer <img src="../../public/images/Group%2011.svg" alt="strelochka"/></a>
                    </div>
                    <form>
                        <h1>Connect with us</h1>
                        <input type="text" name="first Name" placeholder="First name"/>
                            <div className="line"></div>
                            <input type="text" name="last name" placeholder="Last name"/>
                                <div className="line"></div>
                                <input type="email" name="email" placeholder="E-mail"/>
                                    <div className="line"></div>
                                    <input type="text" name="phone number" placeholder="Phone number"/>
                                        <div className="line"></div>
                                        <input type="text" name="comments" placeholder="Comments"/>
                                            <div className="line"></div>
                                            <input type="text"/>
                    </form>
                </div>
            </div>

            <footer>
                <a href="/"><img src="../../public/images/logo-streetcorner.svg" alt="logo"/></a>
                <div className="info">
                    <p>Made by Vladislav Dontsov</p>
                    <p>My GIT : <a href="https://github.com/KocMoHaWT">My GIT account</a></p>
                    <p>Original design : <a href="http://clients.onix-systems.com/ds_street_corner/">Template</a></p>
                </div>
            </footer>
        </div>
    )
}

export default Banner