<%--
  Created by IntelliJ IDEA.
  User: wdr434
  Date: 20.07.18
  Time: 14:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="/index.js"></script>
</head>
<body>

<h1>Books</h1>
<form method="POST">
    <div class="div">
        <input type="text" placeholder="id" class="id">
        <input type="text" placeholder="isbn" class="isbn">
        <input type="text" placeholder="title" class="title">
        <input type="text" placeholder="author" class="author">
        <input type="text" placeholder="publisher" class="publisher">
        <input type="text" placeholder="type" class="type">
        <input type="submit" class="submit">
    </div>
</form>


<button id="edit">Edit</button>

<h1>List books</h1>
<div id="listBooks">

</div>


</body>
</html>
