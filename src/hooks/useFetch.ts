import { useState, useEffect, useCallback } from "react";
import { User } from "../types";

const api = "https://jsonplaceholder.typicode.com/users";

const useFetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUser = async () => {
    if(users.length > 0) {
      alert('Users already exist!');
      return;
    }

    setLoading(true);
    const res = await fetch(api);
    const response = await res.json();
    setUsers(response);
    setLoading(false)
  };

  const clearUser = () => {
    if(!users.length) {
      alert('Users already empty!');
      return;
    }
    setUsers([]);
  }

  const removeUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id))
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return { users, fetchUser, clearUser, removeUser, loading };
};

export default useFetch;
