export const getAllUsers = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const responseUsers = await response.json();
      return responseUsers;
    } catch (err) {
      console.log(err);
    }
  };
  
  export const users = {
    getAllUsers,
  };
  