if [ -d $1 ]; then
  echo 'error: dir exists'
  exit
else
var fs = require('fs-extra')
fs.mkdirsSync('/c/Users/Administrator/local')
var process = require('process');
process.chdir('/c/Users/Administrator/local');
fs.mkdirsSync('css')
fs.mkdirsSync('js')


touch index.html css/style.css js/main.js


fs.writeFileSync("./index.html", "<!DOCTYPE>
<title>Hello</title>
<h1>Hi</h1>")
fs.writeFileSync("./css/style.css", "h1{color: red;")
fs.writeFileSync("./js/main.js", "var string = "Hello World"
alert(string)")


echo"console.log( 'success')"
  exit
fi


process.exit(0)