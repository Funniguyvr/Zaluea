var updates = [
    {message: "Kinda Yoinked this but this is Funni's Google Classroom (shh) "}
];
var updatespage = document.getElementById("updatespage");
for(let item of updates) {
    let a = document.createElement("updatespage");
    a.className = "updatespage";
    var title = document.createElement("message");
    title.textContent = item.message;
    a.appendChild(title);
    updatespage.appendChild(a);
}
