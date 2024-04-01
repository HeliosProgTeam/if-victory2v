import React, { useState } from "react";
import Logo from "../../components/logo/Logo";
import Nav from "../../components/nav/Nav";
import Phone from "../../components/phone/Phone";
import { Menu, useMediaQuery, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import Link from "next/link";

import SocialLinks from "../../components/SocialLinks/SocialLinks";

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
      <Link href={"/"}>
        <div className="header__logo" style={{ cursor: "pointer" }}>
          <Logo />
        </div>
      </Link>
      {!mdDown ? (
        <>
          <div className="header__nav">
            <Nav />
          </div>
          <SocialLinks />
        </>
      ) : (
        <div className={"header__menu"}>
          <Button
            id="basic-button"
            aria-label={"Меню"}
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
