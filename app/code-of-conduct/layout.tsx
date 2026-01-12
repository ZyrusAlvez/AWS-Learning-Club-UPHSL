import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Code of Conduct',
  description: 'AWS Learning Club UPHSL Code of Conduct - Standards of behavior, professional conduct, and community guidelines for all members and participants.',
  keywords: ['AWS Learning Club code of conduct', 'UPHSL community guidelines', 'professional conduct'],
  openGraph: {
    title: 'Code of Conduct - AWS Learning Club UPHSL',
    description: 'Community guidelines and standards of behavior for AWS Learning Club UPHSL',
  },
};

export default function ConductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
