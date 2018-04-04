export interface MenuItem {
  title: string;
  slug: string;
  url?: string;
  items?: MenuItem[];
}
