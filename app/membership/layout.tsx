import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membership Application',
  description: 'Join AWS Learning Club UPHSL - Apply for official membership. Get your membership ID, access to exclusive AWS workshops, events, and community benefits. Led by Zyrus Alvez and team.',
  keywords: ['AWS Learning Club membership', 'UPHSL AWS join', 'AWS student membership', 'cloud computing club'],
  openGraph: {
    title: 'Join AWS Learning Club - UPHSL',
    description: 'Apply for official membership at AWS Learning Club UPHSL',
  },
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
