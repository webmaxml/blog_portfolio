// main entry
export const api = 'http://api.blog.webmaxml.ru/wp-json/wp/v2';

// posts 
// expecting - [ {...},{...},... ]
export const postsApi = api + '/posts';

// categories
// expecting - [ {...},{...},... ]
export const catsApi = api + '/categories';