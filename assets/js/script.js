var workExamplesDetails = [
    {
        altName: "Module-1",
        name: "Run-Buddy",
        imageLink: "./assets/images/run-buddy-page.PNG",
        ApplicationLink: "https://pc611652003.github.io/run-buddy/",
        RepositoryLink: "https://github.com/pc611652003/run-buddy/"
    }, 
    {
        altName: "Challenge-1",
        name: "Code Refactor",
        imageLink: "./assets/images/challenge01-page.PNG",
        ApplicationLink: "https://pc611652003.github.io/Challenge01/",
        RepositoryLink: "https://github.com/pc611652003/Challenge01/"
    },
    {
        altName: "Challenge-3",
        name: "Password Generator",
        imageLink: "./assets/images/password-generator-page.PNG",
        ApplicationLink: "https://pc611652003.github.io/Password-Generator/",
        RepositoryLink: "https://github.com/pc611652003/Password-Generator/"
    },
    {
        altName: "Challenge-4",
        name: "Code Quiz",
        imageLink: "./assets/images/code-quiz-page.PNG",
        ApplicationLink: "https://pc611652003.github.io/Code-Quiz/",
        RepositoryLink: "https://github.com/pc611652003/Code-Quiz/"
    },
    {
        altName: "Challenge-5",
        name: "Work Day Scheduler",
        imageLink: "./assets/images/work-day-scheduler-page.PNG",
        ApplicationLink: "https://pc611652003.github.io/Work-Day-Scheduler/",
        RepositoryLink: "https://github.com/pc611652003/Work-Day-Scheduler/"
    },
    {
        altName: "Challenge-6",
        name: "Weather Dashboard",
        imageLink: "./assets/images/weather-dashboard-page.PNG",
        ApplicationLink: "https://pc611652003.github.io/Weather-Dashboard/",
        RepositoryLink: "https://github.com/pc611652003/Weather-Dashboard/"
    },
    {
        altName: "Project-1",
        name: "Travel Agent",
        imageLink: "./assets/images/travel-agent-page.PNG",
        ApplicationLink: "https://maxh1231.github.io/travel-agent/",
        RepositoryLink: "https://github.com/pc611652003/travel-agent/"
    },
    {
        altName: "Challenge-11",
        name: "Note Taker",
        imageLink: "./assets/images/Note-Taker-page.PNG",
        ApplicationLink: "https://thawing-depths-69202.herokuapp.com/notes",
        RepositoryLink: "https://github.com/pc611652003/Note-Taker"
    },
    {
        altName: "Challenge-14",
        name: "Tech Blog",
        imageLink: "./assets/images/Tech-Blog-page.PNG",
        ApplicationLink: "https://frozen-retreat-94147.herokuapp.com/",
        RepositoryLink: "https://github.com/pc611652003/Tech-Blog"
    },
    {
        altName: "Project-2",
        name: "Allergy-Finder",
        imageLink: "./assets/images/allergy-finder-page.PNG",
        ApplicationLink: "https://whispering-chamber-78611.herokuapp.com/",
        RepositoryLink: "https://github.com/pc611652003/Allergy-Finder"
    },
    {
        altName: "Challenge-19",
        name: "Budget Tracker",
        imageLink: "./assets/images/Budget-Tracker-page.PNG",
        ApplicationLink: "https://vast-wildwood-92684.herokuapp.com/",
        RepositoryLink: "https://github.com/pc611652003/Budget-Tracker"
    },
    {
        altName: "Project-3",
        name: "FEEDback",
        imageLink: "./assets/images/FEEDback-page.PNG",
        ApplicationLink: "https://polar-mountain-81832.herokuapp.com/",
        RepositoryLink: "https://github.com/pc611652003/FEEDback"
    }
];

var workExamplesDisplay = document.getElementById("work-examples-display");

/* <div class="work-examples">
    <div class="image-wrap">
        <img class="work-image" src="./assets/images/run-buddy-page.PNG" alt="Run-buddy" />
        <h4 class="Work-example-description">Run-Buddy</h4>
        <a href="https://pc611652003.github.io/run-buddy/">
            <button type="button" class="btn ABtn">Application</button>
        </a>
        <a href="https://github.com/pc611652003/run-buddy">
            <button type="button" class="btn RBtn">Repository</button>
        </a>
    </div>
</div> */

var displayExample = function (itemNum) {
    var workExamples = document.createElement("div");
    var imageWrap = document.createElement("div");
    var workImage = document.createElement("img");
    var workExampleDescription = document.createElement("h4");
    var ABtnLinkEl = document.createElement("a");
    var RBtnLinkEl = document.createElement("a");
    var ABtn = document.createElement("button");
    var RBtn = document.createElement("button");

    ABtn.setAttribute("type","button");
    ABtn.setAttribute("class", "btn ABtn");
    ABtn.textContent = "Application";
    RBtn.setAttribute("type","button");
    RBtn.setAttribute("class", "btn RBtn");
    RBtn.textContent = "Repository";

    ABtnLinkEl.setAttribute("href", workExamplesDetails[itemNum].ApplicationLink);
    RBtnLinkEl.setAttribute("href", workExamplesDetails[itemNum].RepositoryLink);

    workExampleDescription.setAttribute("class", "Work-example-description");
    workExampleDescription.textContent = workExamplesDetails[itemNum].name;

    workImage.setAttribute("class", "work-image");
    workImage.setAttribute("src", workExamplesDetails[itemNum].imageLink);
    workImage.setAttribute("alt", workExamplesDetails[itemNum].name);

    imageWrap.setAttribute("class", "image-wrap");

    workExamples.setAttribute("class", "work-examples");

    workExamplesDisplay.appendChild(workExamples);
    workExamples.appendChild(imageWrap);
    imageWrap.appendChild(workImage);
    imageWrap.appendChild(workExampleDescription);
    imageWrap.appendChild(ABtnLinkEl);
    imageWrap.appendChild(RBtnLinkEl);
    ABtnLinkEl.appendChild(ABtn);
    RBtnLinkEl.appendChild(RBtn);
}

var displayAllExample = function () {
    for (var i = 0; i < workExamplesDetails.length; i++) {
        displayExample(workExamplesDetails.length - 1 - i);
    }
}

displayAllExample();