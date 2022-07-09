const LiText = (props) => {
    return (
        <li style={{
            width: "390px",
            height: "17.81px",
            fontFamily: "'Inter'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FFFFFF",
            paddingBottom: "20px"
        }}>{props.text}</li>
    );
};

export default LiText;