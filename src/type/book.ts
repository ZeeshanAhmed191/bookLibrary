export type Book = {
  id: number;
  title: string;
  slug: string;
  coverUrl: string;
  description: string;
  pdfUrl: string;
  views: number;
  downloads: number;

  author: {
    name: string;
  };

  category: {
    name: string;
  };
};
export type GetBooksFilters = {
  page: number;
  limit: number;
  category?: string;
  search?: string;
  sort?: string;
  selectedLanguage?: string
};