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

// тренировки пользователя
export const getUsersWorkouts = () => {
  return fetch(
    "https://fitness-pro-79801-default-rtdb.europe-west1.firebasedatabase.app/users.json",
    {
      method: "GET",
    }
  ).then((response) => {
    return response.json();
  });
};

// пользователи
export const getUsers = () => {
  return fetch(
    "https://fitness-pro-79801-default-rtdb.europe-west1.firebasedatabase.app/users.json",
    {
      method: "GET",
    }
  ).then((response) => {
    return response.json();
  });
};

// добавление тренировки для пользователя
export const addUserCourses = (userId, courseId) => {
  return fetch(
    "https://fitness-pro-79801-default-rtdb.europe-west1.firebasedatabase.app/users.json",
    {
      method: "POST",
      body: JSON.stringify({
        _id: userId,
        courses: [courseId],
      }),
    }
  ).then((response) => {
    return response.json();
  });
};

// обновление данных курса у пользователя
export const updateUserCourses = (name, courses) => {
  return fetch(
    `https://fitness-pro-79801-default-rtdb.europe-west1.firebasedatabase.app/users/${name}/.json`,
    {
      method: "PATCH",
      body: JSON.stringify({
        courses: courses,
      }),
    }
  ).then((response) => {
    return response.json();
  });
};

// получение выполненных курсов пользователя
export const getCompletedWorkouts = () => {
  return fetch(
    "https://fitness-pro-79801-default-rtdb.europe-west1.firebasedatabase.app/users.json",
    {
      method: "GET",
    }
  ).then((response) => {
    return response.json();
  });
};

// добавление выполненых тренировок
export const setCompletedWorkouts = (name, data) => {
  return fetch(
    `https://fitness-pro-79801-default-rtdb.europe-west1.firebasedatabase.app/users/${name}/.json`,
    {
      method: "PATCH",
      body: JSON.stringify({
        completed_workouts: data,
      }),
    }
  ).then((response) => {
    return response.json();
  });
};
