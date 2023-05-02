export declare module "@mui/material/styles" {
    interface Palette {
        hack: Palette["primary"];
        game: Palette["primary"];
        cg3d: Palette["primary"];
        cg2d: Palette["primary"];
        music: Palette["primary"];
    }

    interface PaletteOptions {
        hack: PaletteOptions["primary"];
        game: PaletteOptions["primary"];
        cg3d: PaletteOptions["primary"];
        cg2d: PaletteOptions["primary"];
        music: PaletteOptions["primary"];
    }
}
export declare module "@mui/material/Button" {
    export interface ButtonPropsColorOverrides {
        hack: true;
        game: true;
        cg2d: true;
        cg3d: true;
        music: true;
    }
}
