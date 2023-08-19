import videoHomepage from "../assets/videoHomepage.mp4";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={videoHomepage}
                    type="video/mp4" />

            </video>
            <div className="homepage-content">
                <div>There’s a Better Way to Ask for Help</div>

                <div></div>
                <div></div>
            </div>

        </div>
    )
}

export default HomePage;