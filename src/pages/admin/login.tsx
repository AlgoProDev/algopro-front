import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AdminLogin: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/admin");
    }
  }, [session, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result?.error) {
      router.push("/admin");
    } else {
      // Handle errors
    }
  };

  if (status === "loading") return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default AdminLogin;
