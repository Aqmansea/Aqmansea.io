import { faGithub, faLinkedin, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const socialLinks = [
  {
    icon: faGithub,
    href: 'https://github.com',
    label: 'GitHub',
    type: 'external' as const
  },
  {
    icon: faLinkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    type: 'external' as const
  },
  {
    icon: faEnvelope,
    href: '#contact',
    label: 'Email',
    type: 'internal' as const
  }
];

export const xLink = {
  icon: faXTwitter,
  href: 'https://x.com',
  label: 'X (Twitter)',
  type: 'external' as const
};