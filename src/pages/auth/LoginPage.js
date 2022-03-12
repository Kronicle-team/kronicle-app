import {useState} from 'react';
import Layout from "../components/Layout";

const LoginPage = () => {
  return (
      <Layout>
        <form>
          <label for="username">Username</label>
          <input id="username" name="username" type="text"/>
          <label for="password">Password</label>
          <input id="password" name="password" type="password"/>
        </form>
      </Layout>
  )
}

export default LoginPage