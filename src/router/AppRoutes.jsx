import {
    Navigate,
  createBrowserRouter,
} from "react-router-dom";
import { AnimeApp } from "../AnimeApp";
import { WelcomePage } from "../main/pages/WelcomePage";
import { AnimeListPage, MainAnimePage } from "../anime";
import { MainMangaPage } from "../manga";
import { MainGenresPage } from "../genres";
import { MainCharacterPage } from "../characters";
import { AnimeIdPage } from "../anime/pages/AnimeIdPage";

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
                path: "anime/:querySearch",
                element: <AnimeListPage />
            },
            {
                path: "anime/:querySearch/:id",
                element: <AnimeIdPage />
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
                path: "characters",
                element: <MainCharacterPage />
            },
            {
                path: "*",
                element: <Navigate to="/" />
            }
        ]
    },
  ]);