import { IconMenu2, IconMoonStars, IconSun } from '@tabler/icons-react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './button';

export type ColorMode = 'dark' | 'light';

const links = [
  { key: 'skills', label: 'Skills' },
  { key: 'projects', label: 'Projects' },
  { key: 'experience', label: 'Experience' },
  { key: 'education', label: 'Education' },
  { key: 'resume', label: 'Resume' },
  { key: 'cv', label: 'CV' },
];

export default function Navbar({
  darkMode,
  setDarkMode,
}: {
  darkMode: ColorMode;
  setDarkMode: (m: ColorMode) => void;
}) {
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex justify-center p-2 md:hidden">
        <Button className="!hover:bg-gray:200 !bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:!outline-gray-500 active:!bg-gray-600">
          <IconMenu2 className="stroke-black" />
        </Button>
      </div>
      <div className="hidden flex-col items-center justify-evenly px-12 md:flex md:flex-row">
        <Link href="/" className="prose">
          <h3 className="transition-transform duration-200 hover:scale-110">
            Kiran Gadhave
          </h3>
        </Link>
        <div className="flex flex-col items-center justify-end md:flex-row">
          {links.map((link) => (
            <div
              className="p-2 transition-transform duration-200 hover:scale-110"
              key={link.key}
            >
              <Link
                href={`/${link.key}`}
                className={clsx({
                  'text-rose-700': pathname.includes(`/${link.key}`),
                })}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <button
            className="p-1 "
            onClick={() => {
              setDarkMode(darkMode !== 'dark' ? 'dark' : 'light');
            }}
          >
            {/* Set {darkMode !== 'dark' ? "Dark" : "Light"} Theme */}
            {darkMode === 'dark' ? (
              <IconMoonStars className="stroke-rose-400" />
            ) : (
              <IconSun className="stroke-rose-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
