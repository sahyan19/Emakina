
let workSpace = document.getElementById("work-col-2");

fetch("../data/work.json")
    .then((response) => response.json())
    .then((allData) => {
        allData.forEach(data => {
            let container = document.createElement("div");
            container.className = "work-card-content-col";
            container.innerHTML = `
                                <div class="work-card-image"><img src=${data.img_src} alt="" id="work-card-image-size"></div>
                                <div class="work-card-description">
                                    <div class="work-card-description-title">${data.title}</div>
                                    <div class="work-card-description-text">
                                        ${data.description}
                                        <div style="margin-top: 1rem;">${data.divDescription}</div>
                                    </div>
                                </div>
                                `;
            workSpace.appendChild(container);
        });
    });





