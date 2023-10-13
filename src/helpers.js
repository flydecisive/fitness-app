export const handleImg = (item) => {
  switch (item.name) {
    case "Стретчинг":
      return "/img/stratching.png";
    case "Бодифлекс":
      return "/img/bodyflex.png";
    case "Йога":
      return "/img/yoga.png";
    case "Танцевальный фитнес ":
      return "/img/dance.png";
    case "Степ-аэробика":
      return "/img/stap.png";
    default:
      return "/img/stap.png";
  }
};
