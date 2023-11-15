import { useSession, getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Admin: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/admin/login");
    }
  }, [session, router]);

  if (status === "loading" || !session) return <div>Loading...</div>;

  return <div>Welcome to the admin panel!</div>;
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Admin;
