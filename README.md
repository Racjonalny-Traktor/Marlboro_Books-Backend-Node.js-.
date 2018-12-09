# Routes

### /actions/book
* get 
```sh
{
    "success": boolean,
    "data": [
        {
            "print": string,
            "_id": string,
            "title": string,
            "desc": string,
            "author": string,
            "__v": number
        }
    ]
}
```
* post + file (name need to be bookFile)
```sh
{
	"title": string,
	"desc": string,
	"author": string,
	"print": ?string
}
```
in html file:
```sh
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="bookFile" />
</form>
```

