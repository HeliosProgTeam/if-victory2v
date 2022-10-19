import React, { useState } from "react";
import Logo from "../../components/logo/Logo";
import Nav from "../../components/nav/Nav";
import Phone from "../../components/phone/Phone";
import Social from "../../components/social/Social";
import { Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import ListRoundedIcon from "@mui/icons-material/ListRounded";

export const Header = ({ ...props }) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="header" {...props}>
      <div className="header__logo">
        <Logo />
      </div>
      {!mdDown ? (
        <>
          <div className="header__nav">
            <Nav />
          </div>
          <div className="header__phone">
            <Phone phone="063 624 03 06"/>
          </div>
        </>
      ) : (
        <div className={"header__menu"}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant={"contained"}
            onClick={handleClick}
            style={{
              padding: "6px 10px",
            }}
          >
            <ListRoundedIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div style={{ padding: "10px" }}>
              <Nav onClick={handleClose} />
            </div>
          </Menu>
        </div>
      )}
    </header>
  );
};
