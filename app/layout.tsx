'use client';
import '@/app/ui/global.css';
import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import Footer from './ui/footer';
import Navbar, { ColorMode } from './ui/navbar';

const COLOR_MODE_KEY = '__kbg_color_mode__';

function useDarkMode() {
  let initial: ColorMode = 'light';

  if (typeof window !== 'undefined') {
    initial = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

    initial = localStorage.getItem(COLOR_MODE_KEY) as any;
  }

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <html lang="en">
      <body
        className={clsx({
          dark: darkMode === 'dark',
        })}
      >
        <main className="flex min-h-screen flex-col justify-between gap-2 bg-white dark:bg-black">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
