// main entry
export const api = 'http://api.blog.webmaxml.ru/wp-json/wp/v2';

// posts 
// expecting - [ {...},{...},... ]
export const postsApi = api + '/posts?filter[posts_per_page]=10&page=1&order=desc';

// pages
// expecting - [ {...},{...},... ]
export const pageApi = pageNum => api + `/posts?filter[posts_per_page]=10&page=${pageNum}&order=desc`;


// post
// expecting - {...}
export const postApi = api + '/posts/'; // + id

// categories
// expecting - [ {...},{...},... ]
export const catsApi = api + '/categories';