interface PageProps {
    params: { id: number };
}

const Page = async ({ params }: PageProps) => {
    return <div>Account</div>;
};

export default Page;
