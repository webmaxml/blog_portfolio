// main entry
export const api = 'http://api.blog.webmaxml.ru/wp-json/wp/v2';

// posts 
// expecting - [ {...},{...},... ]
export const postsApi = api + '/posts?filter[posts_per_page]=10&page=1&order=desc';

// pages
// expecting - [ {...},{...},... ]
export const postPageApi = pageNum => api + `/posts?filter[posts_per_page]=10&page=${pageNum}&order=desc`;
export const catsPageApi = ( pageNum, catId )  => api + `/posts?categories=${catId}&filter[posts_per_page]=10&page=${pageNum}&order=desc`;
export const tagsPageApi = ( pageNum, tagId )  => api + `/posts?tags=${tagId}&filter[posts_per_page]=10&page=${pageNum}&order=desc`;


// post
// expecting - {...}
export const postApi = api + '/posts/'; // + id

// categories
// expecting - [ {...},{...},... ]
export const catsApi = api + '/categories';

// tags
// expecting - [ {...},{...},... ]
export const tagsApi = api + '/tags';

// posts by categories
// expecting - [ {...},{...},... ]
export const postsCatsApi = catId => api + `/posts?categories=${catId}`;

export const similarPostsApi = postId => `http://api.blog.webmaxml.ru/wp-json/lazydaddy/v1/similarPosts?id=${ postId }`;

export const postsTopApi = 'https://disqus.com/api/3.0/threads/listPopular.json?api_key=DRTRW7YF22OQ16UlcoKCXrkLugLJOtYbtkEMHbHpnMGwOX2MEpTTqdjQALldBMEs&forum=ilyablog&interval=90d&limit=5';

export const dateArchiveApi = 'http://api.blog.webmaxml.ru/wp-json/lazydaddy/v1/dateArchive';

export const archivePageApi = ( pageNum, before, after ) => `http://api.blog.webmaxml.ru/wp-json/wp/v2/posts?
																before=${ before }&
																after=${ after }&
																page=${ pageNum }`;

export const searchPageApi = ( pageNum, query ) => api + `/posts?search=${query}&page=${pageNum}`;
export const pageNumPostApi = 'http://api.blog.webmaxml.ru/wp-json/lazydaddy/v1/postNumPages';
export const quotesApi = 'http://api.blog.webmaxml.ru/wp-json/wp/v2/quotes?filter[posts_per_page]=-1';