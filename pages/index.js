import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/MenuTube";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    // const mensagem = "Welcome to boa noite!";
    const estiloDaHomePage = {
        // backgroundColor: "red"
    };


    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header />
                <Timeline playlist={config.playlists} />
            </div>
        </>
    );

}

export default HomePage


// function Menu() {
//     // return (
//     //     <div>
//     //         menu
//     //     </div>
//     // );
// }

const StyleHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyleHeader>
            {/* <img src="banner"></img> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}></img>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyleHeader>
    );
}



function Timeline(props) {

    const playlistNames = Object.keys(props.playlist);

    // pesquisar
    // statement
    // retorno po expressão
    // map

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlist[playlistName]
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName} </h2>
                        <div>
                            {videos.map((videos) => {
                                return (

                                    <a href={videos.url}>
                                        <img src={videos.thumb} />
                                        <span>
                                            {videos.title}
                                        </span>
                                    </a>
                                );
                            })};
                        </div>
                    </section>
                )
            })};

        </StyledTimeline>
    );
}