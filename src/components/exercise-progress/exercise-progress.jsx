function ExerciseProgress({ color, value, bgColor, max }) {
  const containerStyles = {
    width: "100%",
    height: 36,
    borderRadius: 22,
    backgroundColor: bgColor,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: color,
  };

  const width = value / max >= 1 ? 100 : (value / max) * 100;

  const fillerStyles = {
    height: "100%",
    width: `${value ? width : 0}%`,
    backgroundColor: color,
    borderTopLeftRadius: "inherit",
    borderBottomLeftRadius: "inherit",
    borderTopRightRadius: `${(value / max) * 100 >= 100 ? "inherit" : "unset"}`,
    borderBottomRightRadius: `${
      (value / max) * 100 >= 100 ? "inherit" : "unset"
    }`,
    textAlign: "right",
  };

  const labelStyles = {
    marginRight: 5,
    marginLeft: 10,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${value ? (value / max) * 100 : 0}%`}</span>
      </div>
    </div>
  );
}

export default ExerciseProgress;
