import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CardRecipe from "./CardRecipe";
import { Recipe } from "../types";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/api/apiClient";
import { Grid } from "@mui/material";
import { AppBar, DrawerHeader, Main, drawerWidth } from "./DrawerComponents";
import useSpinning from "@/hooks/useSpinning";
import { useForm } from "react-hook-form";
import FormFilterRecipes from "./FormFilterRecipes";

type RecipesComponent = {};

const RecipesComponent = ({}: RecipesComponent) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.getRecipes();
        setRecipes(response.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useSpinning([loading]);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Recipe Book
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem>
            <Typography variant="h6">Filter Recipes</Typography>
          </ListItem>

          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <FormFilterRecipes control={control} />
          </form>

          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        {recipes.length > 0 && (
          <Grid container spacing={4}>
            {recipes.map((recipe) => (
              <Grid key={recipe.id} item xs={12}>
                <CardRecipe
                  title={recipe.name}
                  urlImage={recipe.image}
                  ingredients={recipe.ingredients}
                  cuisineId={recipe.cuisineId}
                  dietId={recipe.dietId}
                  difficultyId={recipe.difficultyId}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Main>
    </Box>
  );
};

export default RecipesComponent;
