import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AWS Learning Club UPHSL Privacy Policy - Data protection, privacy rights, and information security practices in compliance with Data Privacy Act of 2012.',
  keywords: ['AWS Learning Club privacy policy', 'UPHSL data privacy', 'data protection', 'privacy rights'],
  openGraph: {
    title: 'Privacy Policy - AWS Learning Club UPHSL',
    description: 'Data protection and privacy policy for AWS Learning Club UPHSL',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
