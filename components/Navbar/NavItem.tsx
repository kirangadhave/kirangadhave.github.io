import clsx from "clsx";
import Link from "next/link";

type Props = {
  path: string;
  label: string;
  isActive?: boolean;
  isMobile?: boolean;
};

const NavItem = ({
  path,
  label,
  isActive = false,
  isMobile = false,
}: Props) => {
  return isMobile ? (
    <li className={clsx({ active: isActive })}>
      <Link href={`${path}`}>
        <a
          className={
            isActive
              ? "block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              : "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
          }
        >
          {label}
        </a>
      </Link>
    </li>
  ) : (
    <div>
      <Link href={`${path}`}>
        <a
          className={
            isActive
              ? "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
              : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          }
        >
          {label}
        </a>
      </Link>
    </div>
  );
};

export default NavItem;
