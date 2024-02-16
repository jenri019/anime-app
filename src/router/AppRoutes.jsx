import {
    Navigate,
  createBrowserRouter,
} from "react-router-dom";
import { AnimeApp } from "../AnimeApp";
import { WelcomePage } from "../main/pages/WelcomePage";
import { AnimeIdPage, MainAnimePage } from "../anime";
import { MainMangaPage } from "../manga";
import { MainGenresPage } from "../genres";
import { CharacterIdPage, MainCharacterPage } from "../characters";

export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AnimeApp />,
        children: [
            {
                path: "/",
                element: <WelcomePage />
            },
            {
                path: "anime",
                element: <MainAnimePage />,
            },
            {
                path: "anime/:id",
                element: <AnimeIdPage />
            },
            {
                path: "character",
                element: <MainCharacterPage />
            },
            {
                path: "character/:id",
                element: <CharacterIdPage />
            },
            {
                path: "manga",
                element: <MainMangaPage />
            },
            {
                path: "genres",
                element: <MainGenresPage />
            },
            {
                path: "*",
                element: <Navigate to="/" />
            }
        ]
    },
  ]);