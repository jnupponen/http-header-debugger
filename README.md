# Print request headers.
> for debugging web proxy header forwarding

## Build
```
docker build . --tag node_server
```

## Run
```
docker run -it --rm -p 3000:3000 -v $(pwd):/node/app node_server node app/app.js
```

## Test
```
curl -D - -H "X-Foo: bar"  http://localhost:3000
```