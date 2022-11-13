var rows = document.getElementById("rows");
function setFav() {
  var activities = localStorage.getItem("favoriteActivities");
  activities = JSON.parse(activities);

  for (var activity of activities) {
    console.log("activity = ", activity);

    var tr = document.createElement(`tr`);

    tr.innerHTML = `
        <td id="activity">${activity.activity}</td>
        <td id="price">${activity.price}</td>
        <td id="type">${activity.type}</td>
    `;

    rows.appendChild(tr);
  }
}
setFav();
