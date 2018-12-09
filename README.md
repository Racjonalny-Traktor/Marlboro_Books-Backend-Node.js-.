# Routes

### /actions/book
* get // returns all books 
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
* post + file (name need to be bookFile) // adds book
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
* delete // removes book
```sh
{
    "id": string
}
```
* patch // edits book
```sh
{
    "id": string,
    "data": {
        // here things to change
    }
}
```
