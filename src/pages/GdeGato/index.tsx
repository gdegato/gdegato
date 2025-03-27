import { Profile } from "../../components/Profile";
import { BetweenCats, BetweenContentCats, GitHubProjectsNumber, TitleGitHubProjects } from "../GitHubRepos/styles";
import greg from '../../assets/Gregorio.png'
import manos from '../../assets/Manos.png'
import lando from '../../assets/Orlando.png'



function GdeGato() {
    return (
        <>
            <Profile />
            <GitHubProjectsNumber>
                <TitleGitHubProjects>Gregório e Orlando</TitleGitHubProjects>
            </GitHubProjectsNumber>

            <BetweenContentCats>
                <p>
                    G de Gato é uma homenagem aos meus dois gatos Gregório e Orlando!
                </p>
                <BetweenCats>
                    <img src={greg} alt="Gregório" title="Gregório" />
                    <img src={lando} alt="Orlando" title="Orlando" />
                    <img src={manos} alt="Gregório e Orlando juntos" title="Gregório e Orlando juntos" />
                </BetweenCats>
            </BetweenContentCats>

        </>
    )
}

export default GdeGato;