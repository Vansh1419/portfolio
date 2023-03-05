import { Button, Paper, Stack } from "@mui/material";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <Paper className="sticky top-0">
      <div className="logo">Logo</div>
      <Stack direction="row" className="">
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
      </Stack>
    </Paper>
  );
};

export default Navbar;
