const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

const EMAIL = "adoptions@whiterockdog.org";
const openEmail = (subject, body) => {
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

document.querySelector(".sub-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const note = document.querySelector(".sub-note");
  if (!form.reportValidity()) return;
  openEmail("Subscribe me to Pupdates", `Please add ${form.email.value} to the Pupdates list.`);
  note.textContent = "Woof! Good, boy. Press send in your email app to finish.";
});

const contact = document.querySelector(".contact-form");
if (contact) {
  contact.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = contact.querySelector(".form-note");
    if (!contact.email.validity.valid || !contact.message.value.trim()) {
      note.textContent = "Add a valid email address and a message.";
      note.classList.add("error");
      return;
    }
    note.classList.remove("error");
    const name = `${contact.first.value} ${contact.last.value}`.trim();
    openEmail(`Website message from ${name || contact.email.value}`, `${contact.message.value}\n\n${name}\n${contact.email.value}`);
    note.textContent = "Your email app has opened with this message. Press send to finish.";
  });
}
