import Link from "next/link";

export const Sidebar = () => {
  return (
    <section className="bg-gray-100">
      <Link
        href="/api/auth/logout"
        className="text-[1.6rem] font-semibold text-gray-600"
      >
        Logout
      </Link>
    </section>
  );
};
