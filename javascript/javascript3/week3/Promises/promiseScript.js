const bodyEl = document.querySelector("body");
const containerUl = document.createElement("ul");
bodyEl.appendChild(containerUl);

const krithisRepo = fetch(
  "https://api.github.com/search/repositories?q=user:krithi-kondana"
).then(res => res.json());
const swathisRepo = fetch(
  "https://api.github.com/search/repositories?q=user:SwathiSankararaman"
).then(res => res.json());
const mekdesRepo = fetch(
  "https://api.github.com/search/repositories?q=user:Mekdes1"
).then(res => res.json());

const promises = [krithisRepo, swathisRepo, mekdesRepo];

function displayData(data) {
  data.forEach(repo => {
    const ulArray = [];
    const listItemsArray = [];
    userUl = document.createElement("ul");
    ulArray.push(userUl);
    ulArray.forEach(item => {
      repo.items.forEach(element => {
        userUl.innerText = `${element.owner.login}'s repositories:`;
      });
    });
    ulArray.forEach(item => {
      repo.items.forEach(element => {
        listItems = document.createElement("ol");
        listItems.innerText = element.full_name;
        listItemsArray.push(listItems);
        item.appendChild(listItems);
        urlList = document.createElement("ul");
        listItems.appendChild(urlList);
        urlLinks = document.createElement("a");
        urlList.appendChild(urlLinks);
        urlLinks.href = element.html_url;
        urlLinks.innerText = "Click here";
        urlLinks.target = "_blank";
      });
      containerUl.appendChild(item);
    });
  });
}

Promise.all(promises)
  .then(data => displayData(data))
  .then(() => console.log("All promises displayed"));
