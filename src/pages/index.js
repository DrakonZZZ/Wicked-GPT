import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <Head>
        <title>Wicked GPT - Login</title>
      </Head>
      <div className="flex min-h-screen w-full items-center justify-center">
        <div>
          <div />
        </div>
        <div>
          {user ? (
            <Link href="/api/auth/logout">Logout</Link>
          ) : (
            <>
              <Link
                href="/api/auth/login"
                className="rounded-md bg-[#FFFF8F] px-4 py-2 text-xl font-semibold text-gray-600 hover:bg-[#ffff36]"
              >
                Login
              </Link>
              <Link
                href="/api/auth/signup"
                className="rounded-md
                                bg-[#FFFF8F] px-4 py-2 text-xl font-semibold
                                text-gray-600 hover:bg-[#ffff36]"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context.req, context.res);

  if (session) {
    return {
      redirect: {
        destination: "/conversation",
      },
    };
  }

  return {
    props: {},
  };
};
