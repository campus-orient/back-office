import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UsersContext, useAuthContext } from "../../../declarations";
import { fetchLoggedUser } from "../../../../services/http/auth";
import {
  createUser,
  deleteUser,
  fetchUsers,
  updateUser,
} from "../../../../services/http/users";

const UsersProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const { logged } = useAuthContext();

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: fetchLoggedUser,
    enabled: logged,
  });

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    enabled: logged && userQuery.data != null,
  });

  const newUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log("success data", data);
      if (data.message) queryClient.invalidateQueries(["users"]);
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      console.log("success data", data);
      if (data.message) queryClient.invalidateQueries(["users"]);
    },
  });

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      console.log("success data", data);
      if (data.message) queryClient.invalidateQueries(["users"]);
    },
  });

  // Create the auth context value
  const usersContextValue = {
    //
    userQuery,
    usersQuery,
    newUserMutation,
    updateUserMutation,
    deleteUserMutation,
  };

  return (
    <UsersContext.Provider value={usersContextValue}>
      {children}
    </UsersContext.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersProvider;
