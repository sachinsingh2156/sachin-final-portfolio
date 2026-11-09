import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

export const RESUME_URL = 'https://drive.google.com/file/d/1gBS8R7Rz4rkNwiFAzANTdndIANK143Ys/view?usp=sharing';

export const GOOGLE_SCHOLAR_URL = 'https://scholar.google.com/citations?user=IIk7194AAAAJ&hl=en';

export const socials = [
  { label: 'GitHub', value: 'sachinsingh2156', href: 'https://github.com/sachinsingh2156', icon: Github },
  { label: 'LinkedIn', value: 'sachinsingh2156', href: 'https://linkedin.com/in/sachinsingh2156', icon: Linkedin },
  { label: 'Google Scholar', value: 'Scholar', href: GOOGLE_SCHOLAR_URL, icon: BookOpen },
  { label: 'Email', value: 'sachinsingh2156@gmail.com', href: 'mailto:sachinsingh2156@gmail.com', icon: Mail },
];
