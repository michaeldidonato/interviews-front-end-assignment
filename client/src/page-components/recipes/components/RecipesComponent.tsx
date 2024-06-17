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
import { FormFilterRecipesType, Recipe } from "../types";
import { useCallback, useEffect, useState } from "react";
import { apiClient } from "@/lib/api/apiClient";
import { Grid } from "@mui/material";
import { AppBar, DrawerHeader, Main, drawerWidth } from "./DrawerComponents";
import { useForm } from "react-hook-form";
import FormFilterRecipes from "./FormFilterRecipes";
import useFilterQueryRecipes from "../hooks/useFilterQueryRecipes";
import useSpinning from "@/page-components/shared/hooks/useSpinning";

type RecipesComponent = {};

const RecipesComponent = ({}: RecipesComponent) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control, setValue } = useForm<FormFilterRecipesType>({
    defaultValues: {
      cuisine: "",
      diet: "",
      difficulty: "",
      search: "",
    },
  });

  const { handleSave } = useFilterQueryRecipes();

  const clearForm = useCallback(() => {
    setValue("search", "");
    setValue("cuisine", "");
    setValue("diet", "");
    setValue("difficulty", "");
  }, [setValue]);

  const onSave = useCallback(
    (formData: FormFilterRecipesType) => {
      const queryBuilder = handleSave(formData);
      setQuery(queryBuilder);
    },
    [handleSave]
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.getRecipes(query);
        setRecipes(response.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [query]);

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

          <form onSubmit={handleSubmit(onSave)}>
            <FormFilterRecipes control={control} handleClearForm={clearForm} />
          </form>
        </List>
      </Drawer>
      <Main open={open}>
        <Typography gutterBottom variant="h5">
          Recipe List
        </Typography>

        {recipes.length > 0 && (
          <Grid container spacing={4}>
            {recipes.map((recipe) => (
              <Grid key={recipe.id} item xs={12}>
                <CardRecipe
                  id={recipe.id}
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
