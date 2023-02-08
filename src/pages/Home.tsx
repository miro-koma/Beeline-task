import Button from "../components/Button";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { users, fetchUser, clearUser, loading, removeUser } = useFetch();

  return (
    <div className="container py-4 table-responsive" data-testid="users">
      {users && <>
        <div className="d-flex justify-content-between align-items-center pb-4" data-testid="user-number">
          <div>Total: {users.length} Users</div>
          <div className="d-flex">
            <Button
              onClick={() => fetchUser()}
              text="Load Users"
              color="blue"
            />
            <div className="ms-2">
              <Button
                onClick={() => clearUser()}
                text="Remove Users"
                color="orange"
              />
            </div>
          </div>
        </div>
        <table className="table table-bordered" data-testid="user-list">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Website</th>
              <th>Company</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} data-testid={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                <td>
                  <Button
                    text="Remove"
                    color="red"
                    onClick={() => removeUser(user.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
      }
      <Loading show={loading} />
    </div>
  );
};

export default Home;
