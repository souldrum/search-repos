import { githubService } from "../services/githubService";
import createRepos from "./createRepos";

const createReposList = () => {
    const reposList = document.querySelector(".repos__list");
    const formSearch = document.querySelector(".header__form");
    const inputSearch = document.querySelector(".header__input");
    const searchLabel = document.querySelector(".header__search");

    const isLoading = document.querySelector(".repos__message-list-loading");
    const isNotFound = document.querySelector(".repos__message-not-found");
    const isEmpty = document.querySelector(".repos__message-list-empty");
    const isError = document.querySelector(".repos__message-error");

    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!inputSearch.value || inputSearch.value.trim() === "") {
            inputSearch.addEventListener("input", () => {
                isError.classList.add("repos__message-error_hidden");
                searchLabel.classList.remove("header__search_red");
            });
            reposList.innerHTML = "";
            isEmpty.classList.add("repos__message-list-empty_hidden");
            isNotFound.classList.add("repos__message-not-found_hidden");

            isError.classList.remove("repos__message-error_hidden");
            inputSearch.focus();
            document.querySelector(".repos__error-text").textContent =
                "Недостаточное количество символов для поиска";
            searchLabel.classList.add("header__search_red");
            inputSearch.setAttribute("disabled");
        }

        isEmpty.classList.add("repos__message-list-empty_hidden");
        isLoading.classList.remove("repos__message-list-loading_hidden");
        isNotFound.classList.add("repos__message-not-found_hidden");

        reposList.innerHTML = "";

        githubService(inputSearch.value)
            .then((data) => {
                console.log(data);
                data.splice(10);

                if (!data.length) {
                    isNotFound.classList.remove(
                        "repos__message-not-found_hidden"
                    );
                }

                data.forEach((item) => {
                    let nameLengthLimit =
                        item.name.length > 30
                            ? `${item.name.slice(0, 30)}...`
                            : item.name;

                    const repo = createRepos(
                        item["html_url"],
                        nameLengthLimit,
                        item.owner.login,
                        item.owner["html_url"],
                        item.owner["avatar_url"]
                    );
                    reposList.append(repo);
                });
            })
            .catch((e) => {
                console.error(e);
                inputSearch.addEventListener("input", () =>
                    isError.classList.add("repos__message-error_hidden")
                );
                isError.classList.remove("repos__message-error_hidden");
                document.querySelector(".repos__error-text").textContent = e;
            })
            .finally(() => {
                isLoading.classList.add("repos__message-list-loading_hidden");
                e.target.reset();
            });
    });
};

export default createReposList;
