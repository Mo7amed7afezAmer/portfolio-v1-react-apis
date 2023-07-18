import $ from "jquery";
import { useState } from "react";
import imagePortfolio from "../assets/imgs/portfolio/october.png";

let links = ["all", "frontend", "backend", "react", "vue"];

function activePage() {
    let path = window.location.pathname;

    console.log(path);
}
// activePage();

const Portfolio = () => {

    let [ isActive, setActive ] = useState("frontend");

    return (
        <div className="portfolio-page">
            <div className="page-header">
                <ul className="header-links">
                    {links &&
                        links.map((el) => {
                            return (
                                <li key={ el } className={ isActive == el ? "active" : null } onClick={ () => setActive(el) }>
                                    <a href={"/p"}> { el } </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>{/* #.page-header */}
            {/* page body */}
            <div className="page-body">
                <div className="info-box">
                    <span>3</span>
                    projects
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="inner-box">
                            <div className="box-header">
                                <div className="icons">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h6 className="title">small ecommerce</h6>
                                <div className="live">live</div>
                            </div>
                            <div className="box-body">
                                <img src={ imagePortfolio } alt="po" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner-box">
                            <div className="box-header">
                                <div className="icons">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h6 className="title">small ecommerce</h6>
                                <div className="live">live</div>
                            </div>
                            <div className="box-body">
                                <img src={ imagePortfolio } alt="po" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner-box">
                            <div className="box-header">
                                <div className="icons">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h6 className="title">small ecommerce</h6>
                                <div className="live">live</div>
                            </div>
                            <div className="box-body">
                                <img src={ imagePortfolio } alt="po" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner-box">
                            <div className="box-header">
                                <div className="icons">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h6 className="title">small ecommerce</h6>
                                <div className="live">live</div>
                            </div>
                            <div className="box-body">
                                <img src={ imagePortfolio } alt="po" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
};


export default Portfolio;