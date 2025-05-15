import { fetchPageCount } from "./fetchPageCount";

export async function getTotalPagesForShelf(books: { id: string }[]): Promise<number> {
    const pageCounts: (number | null)[] = await Promise.all(
      books.map(book => fetchPageCount(book.id))
    );
  
    return pageCounts.reduce<number>((total, pages) => total + (pages ?? 0), 0);
}