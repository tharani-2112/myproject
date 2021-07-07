<script>setTimeout(() => {
    console.log("After 3 seconds!!!");
}, 3000);

setTimeout((msg) => { console.log("Hello " + msg) }, 4000, "Manikandan");


console.log("end!!!");

let i = 1;
setTimeout(function run() {
    console.log(i);
    i++;
    setTimeout(run, 100);
}, 100);

setInterval(() => {
    console.log("Mk")
}, 1000);



//async fn return a promise
async function hello() {
    return 'hello';
}

hello().then((data) => {
        console.log("resolve :" + data);
    },
    (data) => {
        console.log("reject : " + data);
    });
    </script>