type Props = {
    children: JSX.Element
}

const TracksContainer = ({children}: Props) => {
    return (
        <div className="tracks-container">
            {children}
        </div>
    );
};

export default TracksContainer;