import { DiscordSVG } from "../../SVG/DiscordSVG"
import { TelegramSVG } from "../../SVG/TelegramSVG"
import "./АccessionFromCommunity.css"

export const АccessionFromCommunity = ({ Join, JoinImg, JoinL }) => {
  return (
    <div className="АccessionFromCommunity">
        <div className="JoinConf">
            <h1>{Join}</h1>
            <img src={JoinImg} alt="Join" width={120}/>
            <h1>{JoinL}</h1>
        </div>
        <div className="JoinLinks">
            <a href="https://web.telegram.org/a/" className="JoinLink" title="Telegram">
                <TelegramSVG/>
            </a>
            <a href="https://discord.com/" className="JoinLink" title="Diskord">
                <DiscordSVG/>
            </a>
        </div>
    </div>
  )
}
