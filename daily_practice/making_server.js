// HTTP 모듈로 서버 만들기

const http = require("http");

const server = http.createServer((req, res) => { // req : 요청 객체, res : 응답 객체
    // req.url : 요청 경로, req.method : 요청 방식
    // console.log(req)
    res.setHeader("Content-type", "text/plain");
    const { url, method } = req; // 구조분해 할당, destructing
    // const url = req.url
    // const method = req.method

    if (method == "GET" && url === "/home") {
        res.write("HOME");
        res.end();
    }
    else if (method === "GET" && url === "/about") {
        res.end("ABOUT"); // write문이 하나면 한번에 가능
    }
    else {
        res.end("Not Found");
    }

    
    // res.write("hello node");
    // res.end();
});

server.listen(3000, () => {
    console.log("server is running");
});
//ctrl - c : 서버 실행 중지
// 응답 객체 : 헤더 + 본문