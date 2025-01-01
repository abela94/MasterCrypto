import React from 'react';

// Define a type for the base JSON-LD structure
type JsonLdType = 
  | 'Organization'
  | 'WebSite'
  | 'WebPage'
  | 'Article'
  | 'Product'
  | 'Event'
  | 'BreadcrumbList';

// Define the base structure for all JSON-LD objects
interface BaseJsonLd {
  '@context': 'https://schema.org';
  '@type': JsonLdType;
}

// Define specific properties for different types
interface OrganizationJsonLd extends BaseJsonLd {
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

interface WebSiteJsonLd extends BaseJsonLd {
  '@type': 'WebSite';
  name: string;
  url: string;
}

// Union type for all possible JSON-LD structures
type JsonLdData = OrganizationJsonLd | WebSiteJsonLd;

interface StructuredDataProps {
  data: JsonLdData;
}

const StructuredData: React.FC<StructuredDataProps> = React.memo(({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  );
});

StructuredData.displayName = 'StructuredData';

export default StructuredData;

