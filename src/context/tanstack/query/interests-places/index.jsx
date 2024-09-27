import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { InterestsPlacesContext } from "../../../declarations";
import { fetchInterestsPlaces } from "../../../../services/http/interests-places";
import { pusher } from "../../../../constants/pusher/config";

const InterestsPlacesProvider = ({ children }) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    //
    const channel = pusher.subscribe("interests-places");
    channel.bind("interests-place-created", (interestsPlace) => {
      queryClient.invalidateQueries(["interestsPlaces"]);
      console.log("New interests place has been added", interestsPlace);
    });
  }, []);

  const interestsPlacesQuery = useQuery({
    queryKey: ["interestsPlaces"],
    queryFn: fetchInterestsPlaces,
  });

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
    interestsPlacesQuery,
  };

  return (
    <InterestsPlacesContext.Provider value={contextValues}>
      {children}
    </InterestsPlacesContext.Provider>
  );
};

InterestsPlacesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InterestsPlacesProvider;
