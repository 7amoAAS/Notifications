// Select Items
const notifiCountEl = document.querySelector(".num-of-notifications");
const markEl = document.getElementById("mark");
const notifiBox = document.querySelectorAll(".notification-box");
const notifiBoxEl = Array.from(notifiBox);
const redMark = document.querySelectorAll("new-notif");

notifiBoxEl.forEach(notifiEl => {
	updateNotifi(notifiEl);
	notifiEl.addEventListener("click", e => {
		if (notifiEl.classList.contains("new")) {
			notifiCountEl.textContent--;
		}
		markAsRead(e);
	});
});

//! AddEventlisteners
markEl.addEventListener("click", markAllAsRead);

//! Functions
function updateNotifi(e) {
	if (e.classList.contains("new")) {
		notifiCountEl.textContent++;
	}
}

function markAllAsRead() {
	notifiBoxEl.forEach(notifiEl => {
		notifiEl.classList.remove("new");
		notifiEl.classList.add("old");
		notifiCountEl.textContent = 0;
	});
}

function markAsRead(e) {
	e.target.closest(".notification-box").classList.remove("new");
	e.target.closest(".notification-box").classList.add("old");
}
