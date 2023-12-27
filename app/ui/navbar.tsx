'use client';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    <nav className="flex flex-row items-center justify-between px-12">
      <Link href="/" className="prose">
        <h3 className="transition-transform duration-200 hover:scale-110">
          Kiran Gadhave
        </h3>
      </Link>
      <div className="flex flex-row items-center justify-evenly">
        {links.map((link) => (
          <div
            className="p-4 transition-transform duration-200 hover:scale-110"
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
    </nav>
  );
}
