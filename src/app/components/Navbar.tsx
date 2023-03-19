import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="nav">
      <Link href={"/"}>
        <h1>Pokédex</h1>
      </Link>
    </nav>
  );
};
