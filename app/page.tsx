import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandLinkedin,
  IconBrandMastodon,
} from '@tabler/icons-react';
import { IconAt, IconBrandTwitter } from '@tabler/icons-react';
import Image from 'next/image';
import About from '@/app/content/home/about.mdx';

const socials = [
  {
    key: 'Email',
    Icon: IconAt,
    value:
      'mailto&#58;k&#37;6&#57;&#114;&#37;&#54;1&#110;g%6&#49;d%68a%76%&#54;52%&#52;0gma&#105;&#108;%&#50;Ecom',
    display: 'kirangadha&#118;e2&#64;&#103;mail&#46;c&#111;m',
  },
  {
    key: 'Twitter',
    Icon: IconBrandTwitter,
    value: 'https://twitter.com/kbgadhave',
    display: '@kbgadhave',
  },
  {
    key: 'Mastodon',
    Icon: IconBrandMastodon,
    value: 'https://vis.social/@kirangadhave',
    display: '@kirangadhave@vis.social',
  },
  {
    key: 'LinkedIn',
    Icon: IconBrandLinkedin,
    value: 'https://www.linkedin.com/in/gadhavekiran/',
    display: 'Kiran Gadhave',
  },
  {
    key: 'Github',
    Icon: IconBrandGithub,
    value: 'https://github.com/kirangadhave',
    display: 'kirangadhave',
  },
  {
    key: 'Google Scholar',
    Icon: IconBrandGoogle,
    value: 'https://scholar.google.com/citations?user=RXAZarcAAAAJ&hl=en',
    display: 'Google Scholar',
  },
];

export default function Page() {
  return (
    <div className="flex grow flex-col gap-8 ">
      <div className="flex w-full flex-col justify-center p-8 md:p-16 lg:flex-row">
        <div className="m-4 mt-16 flex flex-col items-center">
          <div className="w-[200px]">
            <div className="duration-400 relative aspect-square overflow-hidden rounded-full ring-2 ring-pink-500 ring-offset-2 transition-all hover:ring-4 ">
              <Image
                src="/assets/home_page.jpg"
                layout="filled"
                objectFit="cover"
                objectPosition="center"
                fill={true}
                alt="Picture of Kiran Gadhave wearing sunglasses"
              />
            </div>
          </div>
          <div className="prose mx-2 my-4 w-max lg:text-right">
            {socials.map(({ key, Icon, value, display = value }) => (
              <div key={key}>
                <Icon className="mr-2 inline-block align-middle lg:hidden" />
                {key === 'Email' ? (
                  <a href="ma&#105;lto&#58;k%69%72an%67&#97;dhave&#50;&#64;&#103;mai&#108;&#46;&#37;63o&#109;">
                    ki&#114;anga&#100;&#104;av&#101;2&#64;&#103;mail&#46;com
                  </a>
                ) : (
                  <a href={value}>{display}</a>
                )}
                <Icon className="invisible ml-2 inline-block align-middle lg:visible" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="prose p-4">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}
