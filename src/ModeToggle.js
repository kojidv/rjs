const ModeToggle = ({isToggled, onToggle}) => {
    return (
        <div className="ModeToggle">
            <label className="ToggleSwitch">
                <input type="checkbox" checked={isToggled} onChange={onToggle} />
                <span className="Slider" />
            </label>
        </div>
    );
}

export default ModeToggle;