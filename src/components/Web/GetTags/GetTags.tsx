import { Grid, Typography } from "@mui/material";
import Image from "next/image";

interface GetTagsProps {
    str: string;
}

interface TagProps {
    logourl: string;
    logoname: string;
}

const Tags = [
    {
        logourl: "./ts-logo-128.png",
        logoname: "typescript",
    },
    {
        logourl: "./blender.png",
        logoname: "blender",
    },
];
    // <Grid container md="auto" >
    //     <Image alt="image" src={logourl} key={index}/>
    //     <Typography textAlign={"center"} ml={2} marginTop="8px">
    //         {logoname}
    //     </Typography>
    // </Grid>
    return (
        {Tags.map((Tags:TagProps, index:number) => (
                <Grid container md="auto">
                    <Image alt="image" src={Tags.logourl} key={index} />
                    <Typography ml={2} marginTop="8px">
                        {Tags.logoname}
                    </Typography>
                </Grid>
            ))
        }
    );


/* import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList() {
    return (
        <ImageList
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {TagData.map((item) => (
                <ImageListItem
                    key={item.img}
                >
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const TagData = [
    {
        img: "./ts-logo-128.png",
        title: "typescript",
    },
    {
        img: "./blender.png",
        title: "blender",
    },
]; */
