const createRepos = (
    repoHref,
    repoName,
    repoAuthorName,
    repoAuthorLink,
    repoAuthorAvatar
) => {
    const repoElement = document.createElement("li");
    repoElement.classList.add("repos__list-item");
    repoElement.innerHTML = `
        <a 
            class="repos__link link-repos" 
            href=${repoHref} 
            target="_blank" 
            title="Ссылка на репозиторий"
            >
            ${repoName}
        </a>
        <div class="repos__author-wrapper">
            <span class="repos__author">Автор:</span>
            <a
                class="repos__author-link link-repos"
                href=${repoAuthorLink}
                target="_blank"
                title="Ссылка на страницу автора"
                >
                ${repoAuthorName}
            </a>
            <img
                class="repos__author-avatar"
                src=${repoAuthorAvatar}
                alt="Author"
            />
        </div>`;

    return repoElement;
};

export default createRepos;
