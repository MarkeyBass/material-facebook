import { Button, styled, Typography } from "@mui/material";
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';


function App() {

  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&hover": {
      backgroundColor: "lightblue"
    },
    "&disabled": {
      backgroundColor: "grey",
      color: "white"
    }
  }))
  return (
    <div className="App">
      <Button 
        startIcon={<AcUnitRoundedIcon />}
        variant="text"
        size="small"
      >Text</Button>
      <Button startIcon={<SettingsIcon />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="success"
        size="small"

      >
        Add New Post
      </Button>
      <Button
        variant="outlined"
        disabled
      >
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        h1. Heading as p tag
      </Typography>
      <BlueButton variant="contained" sx={{color:'yellow'}}>Unique</BlueButton>
      <BlueButton variant="contained">Unique</BlueButton>

    </div>
  );
}

export default App;
