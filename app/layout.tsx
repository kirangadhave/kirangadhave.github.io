'use client';
import '@/app/ui/global.css';
import { IconMoon, IconMoonStars, IconSun } from '@tabler/icons-react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

type ColorMode = 'dark' | 'light';

const COLOR_MODE_KEY = '__kbg_color_mode__';

function useDarkMode(initial: ColorMode) {
  const [mode, setMode] = useState<ColorMode>(initial);

  const setModeWithLS = useCallback((_mode: ColorMode) => {
    localStorage.setItem(COLOR_MODE_KEY, _mode);
    setMode(_mode);
  }, []);

  useEffect(() => {
    const lsMode = localStorage.getItem(COLOR_MODE_KEY) as ColorMode | null;
    if (!lsMode) {
      const preferDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;

      setMode(preferDark ? 'dark' : 'light');
    } else {
      setMode(lsMode);
    }
  }, []);

  return [mode, setModeWithLS] as const;
}

const links = [
  { key: 'skills', label: 'Skills' },
  { key: 'projects', label: 'Projects' },
  { key: 'experience', label: 'Experience' },
  { key: 'education', label: 'Education' },
  { key: 'resume', label: 'Resume' },
  { key: 'cv', label: 'CV' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useDarkMode(
    (localStorage.getItem(COLOR_MODE_KEY) as any) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'),
  );

  return (
    <html lang="en">
      <body
        className={clsx({
          dark: darkMode === 'dark',
        })}
      >
        <main className="flex min-h-screen flex-col content-center bg-white dark:bg-black">
          <nav className="flex flex-row items-center justify-between border-2 border-solid border-gray-400 px-12">
            <Link href="/">Kiran Gadhave</Link>
            <div className="flex flex-row items-center justify-evenly">
              {links.map((link) => (
                <div className="p-4" key={link.key}>
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
          {children}
        </main>
      </body>
    </html>
  );
}
