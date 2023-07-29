interface PageProps {
    params: { slug: number | string };
}

const Page = async ({ params }: PageProps) => {
    return <div>Account</div>;
};

export default Page;
