interface SiteData {
    title: string;
    description: string;
    image: string;
}

interface SiteConfig {
    fromEmail: string;
}

export interface Invoice {
    siteData: SiteData;
    config: SiteConfig;
    id: string;
}