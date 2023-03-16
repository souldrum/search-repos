export const githubService = async (repName) => {
    const baseUrl = "https://api.github.com/search/repositories?q=";

    const res = await fetch(`${baseUrl}${repName}`);

    if (!res.ok) {
        throw new Error(`Could not fetch ${baseUrl}, received ${res.status}`);
    }

    const data = await res.json();

    return await data.items;
};
