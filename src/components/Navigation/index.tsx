import Link from "next/link";

import links from "./links";

function Navigation() {
  return (
    <>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      ;
    </>
  );
}

export default Navigation;