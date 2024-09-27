import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { pusher } from "../../../../constants/pusher/config";
import { fetchUsersLogins } from "../../../../services/http/users";
import { UsersLoginsContext } from "../../../declarations";

const UsersLoginsProvider = ({ children }) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    console.log("I'm getting user logins");
    //
    // const channel = pusher.subscribe("interests-places");
    // channel.bind("interests-place-created", (interestsPlace) => {
    //   queryClient.invalidateQueries(["interestsPlaces"]);
    //   console.log("New interests place has been added", interestsPlace);
    // });
  }, []);

  const usersLoginsQuery = useQuery({
    queryKey: ["usersLogins"],
    queryFn: fetchUsersLogins,
  });

  useEffect(() => {
    console.log("Users logins", usersLoginsQuery);
  }, [usersLoginsQuery]);

  //   const updateUserMutation = useMutation({
  //     mutationFn: updateUser,
  //     onSuccess: (data) => {
  //       console.log("success data", data);
  //       if (data.message) queryClient.invalidateQueries(["users"]);
  //     },
  //   });

  //   const deleteUserMutation = useMutation({
  //     mutationFn: deleteUser,
  //     onSuccess: (data) => {
  //       console.log("success data", data);
  //       if (data.message) queryClient.invalidateQueries(["users"]);
  //     },
  //   });

  // Create the auth context value
  const contextValues = {
    //
    usersLoginsQuery,
  };

  return (
    <UsersLoginsContext.Provider value={contextValues}>
      {children}
    </UsersLoginsContext.Provider>
  );
};

UsersLoginsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersLoginsProvider;
