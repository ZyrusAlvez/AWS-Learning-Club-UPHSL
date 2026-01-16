import "../styles/globals.css";
import { Toaster } from "sonner";
import Footer from "@/component/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://awslc.uphsl.edu.ph'),
  title: {
    default: 'AWS Learning Club - UPHSL | Amazon Web Services Student Community',
    template: '%s | AWS Learning Club - UPHSL'
  },
  description: 'Official AWS Learning Club at University of Perpetual Help System Laguna (UPHSL) Biñan. Join our cloud computing community led by Zyrus Alvez, Renzo Ramos, and team. Learn AWS services, attend workshops, and build your tech career.',
  keywords: [
    'AWS Learning Club',
    'AWS Learning Club UPHSL',
    'UPHSL AWS',
    'Amazon Web Services UPHSL',
    'Cloud Computing UPHSL',
    'AWS Student Community',
    'Zyrus Alvez',
    'Renzo Ramos',
    'Allan John Funelas',
    'Wilmar Lipata',
    'Josh Leonard Mendoza',
    'Sherwin Limosnero',
    'France Raphael Rivera',
    'Richard Torculas',
    'Trisha Biglete',
    'Jullie Temporosa',
    'Alyssa Marie Valera',
    'Andrew Velandrez',
    'Allianna Faith Palmiery',
    'Rain Jade De Castro',
    'Carl Angelo Hernandez',
    'Ram Andrei Manalo',
    'University of Perpetual Help System Laguna',
    'UPHSL Biñan',
    'AWS Workshops',
    'Cloud Computing Training',
    'AWS Certification',
    'Tech Community Philippines'
  ],
  authors: [{ name: 'AWS Learning Club - UPHSL' }],
  creator: 'AWS Learning Club - UPHSL',
  publisher: 'AWS Learning Club - UPHSL',
  icons: {
    icon: '/awslc logo.webp',
    apple: '/awslc logo.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://awslc.uphsl.edu.ph',
    siteName: 'AWS Learning Club - UPHSL',
    title: 'AWS Learning Club - UPHSL | Amazon Web Services Student Community',
    description: 'Official AWS Learning Club at University of Perpetual Help System Laguna. Join our cloud computing community and learn AWS services.',
    images: [
      {
        url: '/awslc logo.webp',
        width: 1200,
        height: 630,
        alt: 'AWS Learning Club UPHSL Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Learning Club - UPHSL',
    description: 'Official AWS Learning Club at University of Perpetual Help System Laguna',
    images: ['/awslc logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://awslc.uphsl.edu.ph',
  },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AWS Learning Club - UPHSL",
    "alternateName": "AWSLC UPHSL",
    "url": "https://awslc.uphsl.edu.ph",
    "logo": "https://awslc.uphsl.edu.ph/awslc logo.webp",
    "description": "Official AWS Learning Club at University of Perpetual Help System Laguna",
    "email": "awslc.uphsl@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Biñan",
      "addressRegion": "Laguna",
      "addressCountry": "PH"
    },
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "University of Perpetual Help System Laguna",
      "alternateName": "UPHSL"
    },
    "member": [
      {"@type": "Person", "name": "Zyrus Alvez", "jobTitle": "President"},
      {"@type": "Person", "name": "Renzo Ramos", "jobTitle": "Vice President"},
      {"@type": "Person", "name": "Allan John Funelas", "jobTitle": "Executive Secretary"},
      {"@type": "Person", "name": "Wilmar Lipata", "jobTitle": "Associate Secretary"},
      {"@type": "Person", "name": "Josh Leonard Mendoza", "jobTitle": "Head of Communications"},
      {"@type": "Person", "name": "Sherwin Limosnero", "jobTitle": "P.R.O. External"},
      {"@type": "Person", "name": "France Raphael Rivera", "jobTitle": "Marketing Director"},
      {"@type": "Person", "name": "Richard Torculas", "jobTitle": "Social Media Marketing Manager"},
      {"@type": "Person", "name": "Trisha Biglete", "jobTitle": "Content Manager"},
      {"@type": "Person", "name": "Jullie Temporosa", "jobTitle": "Head of Creatives"},
      {"@type": "Person", "name": "Alyssa Marie Valera", "jobTitle": "Graphic Designer"},
      {"@type": "Person", "name": "Andrew Velandrez", "jobTitle": "Graphic Designer"},
      {"@type": "Person", "name": "Allianna Faith Palmiery", "jobTitle": "Graphic Artist"},
      {"@type": "Person", "name": "Rain Jade De Castro", "jobTitle": "Support Staff"},
      {"@type": "Person", "name": "Carl Angelo Hernandez", "jobTitle": "Logistic Coordinator"},
      {"@type": "Person", "name": "Ram Andrei Manalo", "jobTitle": "Multimedia Specialist"}
    ],
    "sameAs": [
      "https://www.facebook.com/awslcuphsl"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Toaster richColors position="top-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}