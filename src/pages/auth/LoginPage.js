import {useState} from 'react';
import Layout from "../../components/Layout";
import SubmitButton from "../../components/SubmitButton";

const LoginPage = () => {
  return (
      <Layout>
        <form>
          <label htmlFor={"username"}>Username</label>
          <input id="username" name="username" type="text"/>
          <label htmlFor={"password"}>Password</label>
          <input id="password" name="password" type="password"/>
          <SubmitButton/>
        </form>
      </Layout>
  )
}

export default LoginPage