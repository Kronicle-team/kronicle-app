import Layout from "../../components/Layout";

const UserProfilePage = () => {
  return () => {
    <Layout>
      <article>
        <ul>
          <li>
            <label>Username</label>
          </li>
          <li>
            <label>First Name</label>
          </li>
          <li>
            <label>Last Name</label>
          </li>
          <li>
            <label>Gender</label>
          </li>
          <li>
            <label>Birthdate</label>
          </li>
          <li>
            <label>Email</label>
          </li>
          <li>
            <label>Phone Number</label>
          </li>
          <li>
            <label>Address</label>
          </li>
          <li>
            <label>City - Zipcode</label>
          </li>
          <li>
            <label>Country</label>
          </li>
        </ul>
        <button>Edit</button>
      </article>
      <article>
        <div>
          <img alt="profile picture" />
        </div>
      </article>
    </Layout>;
  };
};

export default UserProfilePage;
