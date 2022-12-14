const thisItem = 'featured';

const landing = {}

function addNew(type, name, sort) {
    type[name] = {
        name: `${name[0].toUpperCase() + name.slice(1)}`,
        imgURL: name,
        type: sort,
        url: `${name}.shodon.ru`,
        github: 'github.com/shodon2007/' + name,
    }
}

addNew(landing, "notation", 'landing');
addNew(landing, "tennis", 'landing');
addNew(landing, "portfolio", 'landing')

function portfolioClick(type) {
    resetNavStyles();
    addNavStyle(type);


    if (type == 'landing') {
        type = landing;
    } else if (type == 'frontend') {
        type = frontend
    } else if (type == 'featured') {
        type = featured;
    } else if (type == 'fullstack') {
        type = fullstack;
    } else if (type == 'backend') {
        type = backend;
    }
    showElements(type);
}



function showElements(type) {
    resetElements();
    for (item of Object.values(type)) {
        document.querySelector(".portfolio__bottom").innerHTML += `
    <div class="portfolio__project" style="background-image: url(img/${item.imgURL}.png)">
        <div class="project__body">
            <div class="project__top">
                <div class="project__title">${item.name}</div>
                <div class="project__subtitle">${item.type}</div>
            </div>

            <div class="project__links">
                <a class="project__online" href="https://${item.url}">visit online</a>
                <a class="project__github" href="https://${item.github}">visit github</a>
            </div>
        </div>
    </div>
    `
    }
}

showElements(featured);

function addNavStyle(type) {
    document.querySelector(`.portfolio__${type}`).classList.add('selected');
}

function resetNavStyles() {
    document.querySelectorAll('.portfolio__el').forEach((el) => {
        el.classList.remove('selected');
    })
}

function resetElements() {
    document.querySelector('.portfolio__bottom').innerHTML = '';
}