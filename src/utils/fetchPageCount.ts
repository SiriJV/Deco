export async function fetchPageCount(workId: string): Promise<number | null> {
    try {
      const res = await fetch(`https://openlibrary.org/works/${workId}/editions.json`);
      const data = await res.json();
      const editions = data.entries;
  
      if (!editions || editions.length === 0) {
        console.log("No editions found.");
        return null;
      }
  
      const withPages = editions.find((ed) => ed.number_of_pages);
  
      if (withPages) {
        // console.log("Pages:", withPages.number_of_pages);
        return withPages.number_of_pages;
      } else {
        console.log("No pages foundddddd");
        return null;
      }
    } catch (err) {
      console.error("Error fetching page count:", err);
      return null;
    }
}