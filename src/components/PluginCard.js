import PluginStatus from "./PluginStatus";
import "../styles/PluginCard.scss";

const PluginCard = () => {
    return(
        <div className="plugin-card">
            <div className="plugin-card__details">
                <h3 className="plugin-card__details__title">Plugin1</h3>
                <p className="plugin-card__details__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className="plugin-card__status">
                <PluginStatus />
            </div>
        </div>
    )
}

export default PluginCard;