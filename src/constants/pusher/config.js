import Pusher from "pusher-js";

const config = {
  cluster: "mt1",
  pusherKey: "a1bf00a2aaeee0f25cce",
};

export const pusher = new Pusher(config.pusherKey, {
  cluster: config.cluster,
});
