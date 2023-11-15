import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "@/pages/admin/login.module.css";
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
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="email" type="email" placeholder="Email" className={styles.input} />
        <input name="password" type="password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.button}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
