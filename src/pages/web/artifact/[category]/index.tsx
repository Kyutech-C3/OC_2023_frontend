import { useRouter } from "next/router";

const CategoryTop = () => {
    const router = useRouter();
    return <>this is {router.query.category} top</>;
};

export default CategoryTop;
