import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about" alt="The section which explains a bit about the developer as a person and a professional">
            <div className="left">
                <div className="wrapper">
                        
                        <div className="infoCard">
                            <h2>{'{ Who am I? }'} </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Quis odio deleniti velit dicta numquam 
                                odit deserunt mollitia, sapiente impedit quam incidunt, 
                                ipsa eaque neque omnis non, accusamus eum! Aliquam, at.
                            </p>
                        </div>
                        
                        <a href="#portfolio">
                            <img src="/Portfolio/assets/arrow.svg" alt="arrow Icon by freeicons on freeicons.io" />
                        </a>
                    </div>  
                </div>

            <div className="right">
                <div className="imgContainer">
                    <img src="/Portfolio/assets/bonsai.png" alt="" />
                </div>
            </div>

        </div>
    )
}
