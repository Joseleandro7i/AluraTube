
import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
    // const mensagem = "Welcome to boa noite!";
    const estiloDaHomePage = {
        // backgroundColor: "red"
    };

    const  [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <PerfilDoUsuario  />
                {/* prop drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Timeline searchValue={valorDoFiltro} playlist={config.playlists} />
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

const StylePerfil = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

`;

// function Header() {
//     return (
      
//     );
// }

const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${config.background});
    background-repeat: no-repeat;
    background-size: auto;
    /* background-image: url(${({background}) => background}); */
    height: 230px;
`;

function PerfilDoUsuario(img) {
    return(
        <StylePerfil>
         <StyledBanner
        //  background={config.background} 
        /> 
         
        <section className="user-info">
            <div>
            <img src={`https://github.com/${config.github}.png`}></img>
                <h2>{config.name}</h2>
                <p>{config.job}</p>
            </div>
        </section>
    </StylePerfil>
    );
}



function Timeline({searchValue, ...props}) {

    const playlistNames = Object.keys(props.playlist);

    // pesquisar
    // statement
    // retorno po expressão
    // map

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlist[playlistName]
                // console.log(playlistName);
                // console.log(videos);
                return (
                    <section key={playlistName}>
                        <h2>{playlistName} </h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (

                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
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