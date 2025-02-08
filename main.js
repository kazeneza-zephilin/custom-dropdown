export function createDropdown() {
    const openBtn = document.createElement("button");
    openBtn.classList.add("opener");
    openBtn.textContent = "Open it!";
    document.body.appendChild(openBtn);
    const homeDropDown = document.createElement("ul");
    homeDropDown.classList.add("item-container", "open");

    populateDropdownList(homeDropDown, [
        "Home",
        "Products",
        "From us",
        "Contact",
    ]);

    function populateDropdownList(dropDown, pages) {
        if (!dropDown || !pages) {
            console.log("Please provide the required arguments");
            return;
        }
        if (!Array.isArray(pages)) {
            console.log("Please provide an array of pages");
            return;
        }
        pages.forEach((page) => {
            dropDown.appendChild(createListItems("item", page));
        });
        document.body.appendChild(dropDown);
    }

    function createListItems(classList, text) {
        if (!classList || !text) {
            console.log("Please provide the required     arguments");
            return;
        }

        const separator = document.createElement("div");
        const p = document.createElement("p");
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = text;
        a.href = "#";
        li.appendChild(a);
        li.classList.add(classList);
        p.appendChild(li);
        separator.classList.add("separator-line");
        p.appendChild(separator);
        return p;
    }

    openBtn.addEventListener("click", () => {
        homeDropDown.classList.contains("closed")
            ? homeDropDown.classList.remove("closed")
            : homeDropDown.classList.add("closed");
    });
}
