const getRepos = async () => {
  const response = await fetch("https://api.github.com/users/WallacePRM/repos");

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
};