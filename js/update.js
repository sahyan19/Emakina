let updateSpace = document.getElementById("blogpost-container");

fetch("../data/update.json")
    .then((response) => response.json())
    .then((allData) => {
        allData.forEach(data => {
            let container = document.createElement("div");
            container.className = "blogpost-col";
            container.innerHTML = `
                                <div class="blogpost-image">
                                <img src=${data.img_src} alt="" class="blogpost-image-size">
                                </div>
                                <div class="blogpost-text">${data.description}<br></div>
                                <div class="blogpost-date">${data.date}</div>
                                <div class="blogpost-category">${data.category}</div>
                                `;
            updateSpace.appendChild(container);
        });

    });




