function ExerciseProgress({ color, value, bgColor }) {
  const containerStyles = {
    width: "100%",
    height: 36,
    borderRadius: 22,
    backgroundColor: bgColor,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: color,
  };

  const fillerStyles = {
    height: "100%",
    width: `${value}%`,
    backgroundColor: color,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    paddingRight: 20,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${value}%`}</span>
      </div>
    </div>
  );
}

export default ExerciseProgress;
