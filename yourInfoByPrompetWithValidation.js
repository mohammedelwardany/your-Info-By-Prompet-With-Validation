do {
    var fname = prompt("what is your first name?");
}
while (isFinite(fname))
do {
    var lname = prompt("what is your last name?");
}
while (isFinite(lname))

do {
    var phone = prompt("what is your phone number?");
}
while (phone.length != 11)

do {
    var color = prompt("what color do you prefere(red,green,blue)");
}
while (color != "red" && color != "green" && color != "blue")


document.write("<p style='color:" + color + "'>welcome dear:" + fname + " " + lname + "</p>");
document.write("<p style='color:" + color + "'>your phone number:" + phone + "</p>");