export const ACTION_TYPE = {
  SELECT_AUTHOR: 'SELECT_AUTHOR',
  LOAD_POSTS: 'LOAD_POSTS',
};

export const selectAuthor = selectedIndex => ({
  type: ACTION_TYPE.SELECT_AUTHOR,
  selectedIndex,
});

export const loadPosts = () => ({
  type: 'LOAD_POSTS',
  payload: {
    request: {
      method: 'get',
      url: 'posts',
    }
  }
});

export const createPosts = () => ({
  type: 'LOAD_POSTS',
  payload: {
    request: {
      method: 'post',
      url: 'posts',
    }
  }
});
