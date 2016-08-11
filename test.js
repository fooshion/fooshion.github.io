<!DOCTYPE html>
<html>
<head>
</head>
<body>
<p id="result"></p>
<script>
// Store
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
</script>
</body>
</html>