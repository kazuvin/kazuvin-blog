import { Category } from "../category/type";

export interface Scrap {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  emoji: string;
  category: Category;
}
