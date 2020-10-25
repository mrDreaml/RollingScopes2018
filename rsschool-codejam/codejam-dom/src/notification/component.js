const TIMEOUT = 1000; // mili seconds

let contentData = [
  {
    caption: "How to use this notification?",
    message: "Use key ' [ ' to flip next, and ' ] ' to flip prev"
  },
  {
    caption: "Hello",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus soluta magnam, explicabo tempora quia magni."
  },
  {
    caption: "Next msg",
    message: "Lorem ipsum dolor sit amet!!!"
  },
  {
    caption: "I know H.T.M.L.",
    message: "How To Meet Ladies"
  }
];
contentData.pageChecked = 0;

localStorage.getItem("isShowNotification") == null
  ? localStorage.setItem("isShowNotification", true) //   set flag is no on local storage
  : 0;

window.onload =
  localStorage.getItem("isShowNotification") == "true"
    ? setTimeout(renderNotification, TIMEOUT) // show notification or not
    : 0;

function renderNotification() {
  function createNode(element, classes = "", attributes = [], text = "") {
    let newElement = document.createElement(element);
    classes != ""
      ? classes.split(" ").forEach(e => (newElement.className += e + " "))
      : 0;
    attributes.forEach(e => newElement.setAttribute(e[0], e[1]));
    newElement.innerText = text;
    return newElement;
  }

  let component = document.body.appendChild(
    createNode("div", "", [["id", "component"]])
  );
  component.appendChild(
    createNode("div", "", [["id", "close-notification"]], "X")
  );
  component.appendChild(
    createNode("p", "caption", [], contentData[contentData.pageChecked].caption)
  );
  component.appendChild(
    createNode("p", "message", [], contentData[contentData.pageChecked].message)
  );
  component.notification = component.appendChild(
    createNode("div", "notification", [])
  );
  component.notification.appendChild(createNode("div"));
  component.notification.children[0].appendChild(
    createNode("input", "", [
      ["type", "checkbox"],
      ["id", "tips-checkbox"],
      ["name", "tips-ch"]
    ])
  );
  component.notification.children[0].appendChild(
    createNode("label", "", [["for", "tips-ch"]], "Disable tips")
  );
  component.notification.appendChild(
    createNode("div", "", [["id", "notification-prev"]])
  );
  component.notification.pages = component.notification.appendChild(
    createNode("div", "pages")
  );
  for (let i = 0; i < contentData.length && i < 5; i++) {
    component.notification.pages.appendChild(
      createNode(
        "div",
        "page" + (contentData.pageChecked == i ? " checked" : "")
      )
    );
  }
  component.notification.appendChild(
    createNode("div", "", [["id", "notification-next"]])
  );

  function flipNotif(step) {
    component.notification.pages.children[contentData.pageChecked].className =
      "page";
    contentData.pageChecked =
      step > 0
        ? contentData.pageChecked <= contentData.length - 2
          ? contentData.pageChecked + step
          : 0
        : contentData.pageChecked > 0
        ? contentData.pageChecked + step
        : contentData.length - 1;
    component.notification.pages.children[contentData.pageChecked].className +=
      " checked";

    component.getElementsByClassName("caption")[0].innerText =
      contentData[contentData.pageChecked].caption;
    component.getElementsByClassName("message")[0].innerText =
      contentData[contentData.pageChecked].message;
  }

  // Events

  document
    .getElementById("close-notification")
    .addEventListener("click", () =>
      document.body.removeChild(document.getElementById("component"))
    );
  document
    .getElementById("notification-next")
    .addEventListener("click", () => flipNotif(1));
  document
    .getElementById("notification-prev")
    .addEventListener("click", () => flipNotif(-1));
  document.addEventListener("keypress", event => {
    if (event.key == "]") {
      flipNotif(1);
    } else if (event.key == "[") {
      flipNotif(-1);
    }
  });
  document
    .getElementById("tips-checkbox")
    .addEventListener("change", function() {
      this.checked
        ? localStorage.setItem("isShowNotification", false)
        : localStorage.setItem("isShowNotification", true);
    });
}
