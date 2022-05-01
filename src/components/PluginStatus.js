import "../styles/PluginStatus.scss";

const PluginStatus = () => {
    return(
        <>
            <label className="plugin-status">
                <input type="checkbox"/>
                <span className="plugin-status__slider round"></span>
                <span className="plugin-status__title">Allowed</span>
            </label>
        </>
    )
}

export default PluginStatus;