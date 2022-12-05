import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './Auth0LogoutButton'
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return <LogoutButton></LogoutButton>
};

export default Profile;