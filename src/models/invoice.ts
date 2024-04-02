export interface SiteData {
    title: string;
    description: string;
    image: string;
}

export interface SiteConfig {
    fiscalData: string;
    fromEmail: string;
}

export interface Invoice {
    siteData: SiteData;
    config: SiteConfig;
    id: string;
}