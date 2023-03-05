import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Navbar = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className="h-20 flex items-center p-3 bg-opacity-90 bg-clip-padding justify-between md:justify-around sticky top-0 z-50 border-b-2 border-gray-500 "
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div
        className="cursor-pointer"
        onClick={(e) => {
          router.push({
            pathname: "/",
          });
        }}
      >
        <Image src={logo} height={50} className="-rotate-12" alt="logo-image" />
      </div>
      <div className="hidden md:block space-x-2 ">
        <Button
          onClick={(e) => {
            router.push({
              pathname: "/projects",
            });
          }}
          variant="outlined"
        >
          projects
        </Button>
        <Button
          onClick={(e) => {
            router.push({
              pathname: "/blogs",
            });
          }}
          variant="outlined"
        >
          Blogs
        </Button>
        <Button
          onClick={(e) => {
            router.push({
              pathname: "/about",
            });
          }}
          variant="outlined"
        >
          about
        </Button>
        <Button
          onClick={(e) => {
            router.push({
              pathname: "/contact",
            });
          }}
          variant="outlined"
        >
          contact
        </Button>
      </div>
      <div className="md:hidden">
        <Button
          className="font-bold capitalize text-black"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
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
          <div
            onClick={(e) => {
              router.push({
                pathname: "/projects",
              });
            }}
          >
            <MenuItem onClick={handleClose}>Projects</MenuItem>
          </div>
          <div
            onClick={(e) => {
              router.push({
                pathname: "/blogs",
              });
            }}
          >
            <MenuItem onClick={handleClose}>Blogs</MenuItem>
          </div>
          <div
            onClick={(e) => {
              router.push({
                pathname: "/about",
              });
            }}
          >
            <MenuItem onClick={handleClose}>About</MenuItem>
          </div>
          <div
            onClick={(e) => {
              router.push({
                pathname: "/contact",
              });
            }}
          >
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
