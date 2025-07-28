const extentions = [
	{
		"logo": "./assets/images/logo-devlens.svg",
		"name": "DevLens",
		"description": "Quickly inspect page layouts and visualize element boundaries.",
		"isActive": true
	},
	{
		"logo": "./assets/images/logo-style-spy.svg",
		"name": "StyleSpy",
		"description": "Instantly analyze and copy CSS from any webpage element.",
		"isActive": true
	},
	{
		"logo": "./assets/images/logo-speed-boost.svg",
		"name": "SpeedBoost",
		"description": "Optimizes browser resource usage to accelerate page loading.",
		"isActive": false
	},
	{
		"logo": "./assets/images/logo-json-wizard.svg",
		"name": "JSONWizard",
		"description": "Formats, validates, and prettifies JSON responses in-browser.",
		"isActive": true
	},
	{
		"logo": "./assets/images/logo-tab-master-pro.svg",
		"name": "TabMaster Pro",
		"description": "Organizes browser tabs into groups and sessions.",
		"isActive": true
	},
	{
		"logo": "./assets/images/logo-viewport-buddy.svg",
		"name": "ViewportBuddy",
		"description": "Simulates various screen resolutions directly within the browser.",
		"isActive": false
	},
	{
		"logo": "./assets/images/logo-markup-notes.svg",
		"name": "Markup Notes",
		"description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
		"isActive": true
	},
	{
		"logo": "./assets/images/logo-grid-guides.svg",
		"name": "GridGuides",
		"description": "Overlay customizable grids and alignment guides on any webpage.",
		"isActive": false
	},
	{
		"logo": "./assets/images/logo-palette-picker.svg",
		"name": "Palette Picker",
		"description": "Instantly extracts color palettes from any webpage.",
		"isActive": true
	},
	{
		"logo": "./assets/images/logo-link-checker.svg",
		"name": "LinkChecker",
		"description": "Scans and highlights broken links on any page.",
		"isActive": true
	},
	{
		"logo": "./assets/images/logo-dom-snapshot.svg",
		"name": "DOM Snapshot",
		"description": "Capture and export DOM structures quickly.",
		"isActive": false
	},
	{
		"logo": "./assets/images/logo-console-plus.svg",
		"name": "ConsolePlus",
		"description": "Enhanced developer console with advanced filtering and logging.",
		"isActive": true
	}

]


const cardContainer = document.getElementById("card-content");

function createExtensionCard(data) {
	
		for (let i = 0; i < data.length; i++) {
			cardContainer.innerHTML += `
        <div class="ext-card-body" id="${data[i].isActive}">
          <div class="ext-card-body-details">
            <img src=${data[i].logo} alt="" loading="lazy">
            <div class="ext-body-detail-text">
              <h4 class="ext-body-heading">${data[i].name}</h4>
              <p class="ext-body-paragraph">${data[i].description}</p>
            </div>
          </div>
          <!-- this is the extension card footer container -->
          <div class="ext-card-footer">
            <button type="button" class="ext-card-footer-btn" id="remove-button">Remove</button>
            <div class="ext-card-footer-switch ">
              <div class="ext-footer-left-switch  hidden ${data[i].isActive}">
                <p class="dot-icon-inactive "></p>
              </div>
              <div class="ext-footer-right-switch hidden ${data[i].isActive}">
                <p class="dot-icon-active $"></p>
              </div>
            </div>
          </div>
        </div>
		`;
		}

		function updateActiveCardComponent() {
			const leftFooterSwitch = document.querySelectorAll(".ext-footer-left-switch");
			const rightFooterSwitch = document.querySelectorAll(".ext-footer-right-switch");


			rightFooterSwitch.forEach((items) => {
				if (items.classList.contains("true")) {
					items.style.display = "block";
					items.style.background = "var(--Red500)";

				}
			});

			leftFooterSwitch.forEach((items) => {
				if (items.classList.contains("false")) {
					items.style.display = "block";
				}
			});


		}

		updateActiveCardComponent();
	}


createExtensionCard(extentions)

// this is to create a toggle the background color of the page
//Getting the [parent-container]

const searchBarIconSun = document.getElementById("searchBarIconSun");
const searchBarIconMoon = document.getElementById("searchBarIconMoon");
const body = document.querySelector("body");
const moon = "./assets/images/icon-moon.svg";
const sun = "./assets/images/icon-sun.svg";


function changeBackgroundColorDefault() {
	body.style.background = "var(--Light-Gradient)";
	body.style.color = "var(--Neutral800)";
	document.querySelectorAll('.ext-card-footer-btn').forEach(item => {
		item.addEventListener("mouseenter", () => {
			item.style.background = "var(--Red500)";
			item.style.color = "var(--Neutral000)";
		})
		item.addEventListener("mouseleave", () => {
			item.style.background = "var(--Neutral000)";
			item.style.color = "var(--Neutral900)";
		})
	})

	document.getElementById("ext-text-header").style.color = "var(--Neutral900)";
	document.querySelector('.ext-search-container').style.background = "var(--Neutral000)";
	document.querySelector('.ext-card-container').style.color = "var(--Neutral(900)";
	document.querySelectorAll('.ext-card-body').forEach(item => {
		item.style.background = "var(--Neutral000)";
	})


	const cardFooterBtn = document.querySelectorAll('.ext-card-footer-btn');
	const cardHeading = document.querySelectorAll('.ext-body-heading');
	const cardParagraph = document.querySelectorAll('.ext-body-paragraph');



	cardHeading.forEach(item => {
		item.style.color = "var(--Neutral900)"
	});

	cardParagraph.forEach(item => {
		item.style.color = "var(--Neutral900)"
	});

	cardFooterBtn.forEach(item => {
		item.style.background = "var(--Neutral000)";
		item.style.border = "1px solid #212636";
		item.style.color = " #212636";
	});
}

function changeBackgroundColorDark() {
	body.style.background = "var(--Dark-Gradient)";
	body.style.color = "var(--Neutral000)";
	searchBarIconSun.classList.toggle("hidden");
	searchBarIconMoon.style.display = "none";


	document.getElementById("ext-text-header").style.color = "var(--Neutral000)";
	document.querySelector('.ext-search-container').style.background = "var(--Neutral800)";
	document.querySelectorAll('.ext-card-body').forEach(item => {
		item.style.background = "var(--Neutral800)";
	});


	const cardFooterBtn = document.querySelectorAll('.ext-card-footer-btn');
	const cardHeading = document.querySelectorAll('.ext-body-heading');
	const cardParagraph = document.querySelectorAll('.ext-body-paragraph');


	cardHeading.forEach(item => {
		item.style.color = "var(--Neutral000)";
	});

	cardParagraph.forEach(item => {
		item.style.color = "var(--Neutral000)";
		console.log(cardParagraph);
	});

	cardFooterBtn.forEach(item => {
		item.style.background = "var(--Neutral800)";
		item.style.border = "1px solid rgb(255, 255, 255)";
		item.style.color = "var(--Neutral000)";

	})
}




searchBarIconSun.addEventListener("click", (e) => {
	e.preventDefault();
	searchBarIconSun.classList.toggle("hidden");
	searchBarIconMoon.style.display = "block";
	document.getElementById('logo').src = './assets/images/logo.svg';
	document.get
	changeBackgroundColorDefault();
});


searchBarIconMoon.addEventListener("click", (e) => {
	e.preventDefault();
	document.getElementById('logo').src = './assets/images/logo-white.svg';
	changeBackgroundColorDark();

});

// this for the active buttons

const btnAll = document.getElementById("ext-btn-all");
const activeBtn = document.getElementById("ext-btn-active");
const inactiveBtn = document.getElementById("ext-btn-inactive");

function toggleCardBtn() {
	if (activeBtn) {
		activeBtn.addEventListener("click", () => {
			const cardFalse = document.querySelectorAll("#false");
			const cardTrue = document.querySelectorAll("#true");
			console.log(cardFalse);
			cardFalse.forEach((item) => {
				item.style.display = "none";
			});

			console.log(cardTrue);
			cardTrue.forEach((item) => {
				item.style.display = "block";
			});

			btnAll.classList.remove("active-btn");
			activeBtn.classList.add("active-btn");
			inactiveBtn.classList.remove("active-btn");
		});
	}

	if (inactiveBtn) {
		inactiveBtn.addEventListener("click", () => {
			const cardFalse = document.querySelectorAll("#false");
			const cardTrue = document.querySelectorAll("#true");

			console.log(cardTrue);
			cardTrue.forEach((item) => {
				item.style.display = "none";
			});


			console.log(cardFalse);
			cardFalse.forEach((item) => {
				item.style.display = "block";
			});

			btnAll.classList.remove("active-btn");
			activeBtn.classList.remove("active-btn");
			inactiveBtn.classList.add("active-btn");
		});
	}

	if (btnAll) {
		btnAll.addEventListener("click", () => {
			const cardFalse = document.querySelectorAll("#false");
			const cardTrue = document.querySelectorAll("#true");

			console.log(cardTrue);
			cardTrue.forEach((item) => {
				item.style.display = "block";
			});

			cardFalse.forEach((item) => {
				item.style.display = "block";
			});
			activeBtn.classList.remove("active-btn");
			inactiveBtn.classList.remove("active-btn");
			btnAll.classList.add("active-btn");
			console.log(btnAll);
		});
	}
}
toggleCardBtn();
