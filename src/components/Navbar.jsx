import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Box,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { Mail, Notifications } from "@mui/icons-material";
import avatar from "../photos/pexels-pixabay-70083.jpg";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import top100Films from "../assets/top100Films";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  // backgroundColor: theme.palette.secondary.main,
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: { display: "flex" },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: { display: "none" },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    // setOpen((prevOpen) => !prevOpen);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Markey FB
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search...">
            {/* <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            /> */}
          </InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="MarkeyBass"
            src={avatar}
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            alt="MarkeyBass"
            src={avatar}
            sx={{ width: 30, height: 30 }}
          />
          <Typography>Mark</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
