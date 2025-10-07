const API_BASE = '/api';

export const fetchBlogPosts = async () => {
    const response = await fetch(`${API_BASE}/blog`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}