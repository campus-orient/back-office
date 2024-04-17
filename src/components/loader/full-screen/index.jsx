import { Typography } from "@mui/material";
import "./styles.css";

const FullScreenLoaderComponent = () => {
  return (
    <div className="loader-container">
      <Typography variant="h2">Campus Orient</Typography>
      <div className="loader"></div>
    </div>
  );
};

export default FullScreenLoaderComponent;
