import { useRouter } from "next/router";

const ArtifactDetail = () => {
    const router = useRouter();

    return <>this is artifact detail of id:{router.query.artifactId}</>;
};

export default ArtifactDetail;
