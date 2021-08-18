import {useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"

//Data
import 
{
    projectFortify, 
    cloudCities,
    goneMissing,
    bystander,
    archiesHunt,
    penelope
} from "../../data.js"

//Routing
import { Link } from "react-router-dom";


export default function Portfolio() {
    const [selected, setSelect] = useState("project fortify")
    const [data, setData] = useState([])
    const list = [
        {
            id: "project fortify",
            title: "Project Fortify",
        },

        {
            id: "cloudCities",
            title: "Cloud Cities",
        },

        {
            id: "goneMissing",
            title: "Gone Missing",
        },

        {
            id: "bystander",
            title: "Bystander",
        },

        {
            id: "archiesHunt",
            title: "Archies Hunt",
        },

        {
            id: "penelope",
            title: "Penelope",
        },
    ];

    useEffect(() => 
    {
        switch(selected)
        {
            case "projectFortify":
                setData(projectFortify);
                break;

                case "cloudCities":
                setData(cloudCities);
                break;
                
                case "goneMissing":
                setData(goneMissing);
                break;
                
                case "bystander":
                setData(bystander);
                break;

                case "archiesHunt":
                    setData(archiesHunt);
                    break;
                
                    case "penelope":
                setData(penelope);
                break;

                default:
                    setData(projectFortify);
        }
    }, [selected])

    return (
        <div className = "portfolio" id="portfolio" alt="The section of the website that covers the developer's project based work.">
            <h1>Portfolio</h1>

            <ul>
            {list.map((item) => (
                <PortfolioList title = {item.title}
                active = {selected === item.id}
                setSelect = {setSelect}
                id = {item.id}
                />
            ))}
            </ul>

            <div className="container">
                {data.map(d => (
                <div className="item">
                    <img src={d.img} alt="" />
                    <p>
                       {d.description}
                    </p>
                    <Link classname="learnMore" to={d.buttonLocation}>{d.buttonName}</Link>
                </div>
                ))}

                <a href="#contact" className="scrollArrow">
                   <img src="assets/arrow.svg" alt="" />
                </a>
              
            </div>
        </div>
    )
}
