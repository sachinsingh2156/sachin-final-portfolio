import { useTheme } from '@/hooks/use-theme';

type BrandProps = {
  className?: string;
};

/** Icon-only mark — switches with site theme. */
export const BrandMark = ({ className }: BrandProps) => {
  const { theme } = useTheme();
  const src = theme === 'dark' ? '/favicon-dark.png' : '/favicon-light.png';

  return (
    <img
      src={src}
      alt="Sachin Singh"
      width={48}
      height={48}
      className={className}
      draggable={false}
    />
  );
};

/** Full wordmark — switches with site theme. */
export const BrandWordmark = ({ className }: BrandProps) => {
  const { theme } = useTheme();
  const src = theme === 'dark' ? '/logo-dark.png' : '/logo-light.png';

  return (
    <img
      src={src}
      alt="Sachin Singh — Software Engineer"
      width={240}
      height={96}
      className={className}
      draggable={false}
    />
  );
};
