import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar max-w-full bg-base-100 shadow-md">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl ">
          Tanvir
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal pr-4 uppercase">
          <li>
            <Link href="/">home</Link>
          </li>

          <li>
            <Link href="/">about</Link>
          </li>
          <li>
            <Link href="/">skills</Link>
          </li>
          <li>
            <Link href="/">projects</Link>
          </li>
          <li>
            <Link href="/">contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
