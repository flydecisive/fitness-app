// Тренировки
export const getWorkouts = () => {
  return fetch(
    "https://fitness-pro-79801-default-rtdb.europe-west1.firebasedatabase.app/workouts.json",
    {
      method: "GET",
    }
  ).then((response) => {
    return response.json();
  });
};
