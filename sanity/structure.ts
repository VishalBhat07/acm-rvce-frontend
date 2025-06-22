import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts by Category')
        .child(
          S.documentTypeList('category')
            .title('Categories')
            .child((categoryId) =>
              S.documentList()
                .title('Posts')
                .filter('_type == "post" && category._ref == $categoryId')
                .params({ categoryId })
            )
        ),
      S.documentTypeListItem('post').title('All Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author'].includes(item.getId()!),
      ),
    ])
