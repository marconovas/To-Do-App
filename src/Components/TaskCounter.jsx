
export default function TaskCounter({ active, finished, total }) {
    const containerStyle = {
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        margin: "20px 0",
    };

    const cardStyle = {
        padding: "12px 20px",
        borderRadius: "10px",
        backgroundColor: "#f3f3f3",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        textAlign: "center",
        minWidth: "120px",
    };

    const numberStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        marginTop: "5px",
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <span>Active</span>
                <div style={numberStyle}>{active}</div>
            </div>

            <div style={cardStyle}>
                <span>Finished</span>
                <div style={numberStyle}>{finished}</div>
            </div>

            <div style={cardStyle}>
                <span>Total</span>
                <div style={numberStyle}>{total}</div>
            </div>
        </div>
    );
}