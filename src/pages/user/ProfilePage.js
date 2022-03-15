import Layout from "../../components/Layout";

const ProfilePage = () => {
  return (
      <Layout header footer>
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

        <div>
          <img alt="profile picture"/>
        </div>
      </Layout>
  )
}

export default ProfilePage;
