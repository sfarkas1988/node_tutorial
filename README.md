#Node Tutorial

This project is a collection is single JavaScript files to play around with plain node.js

## Files
Before running any of the js files manually, you need to install the dependencies:

```
npm install
```

Then you can i.e run the simple command.js file by running:

```
node console.js
```



##Docker
It has also a simple dockerfile to ru na simple web application within docker.

```
# Build image
docker build -t sfarkas/node_tutorial .

# Run image
docker run -p 8000:8080 -d sfarkas/node_tutorial

# Get container ID
docker ps

# Print app output
docker logs <container id>

# Enter the container
docker exec -it <container id> /bin/bash


# test your app
curl -i localhost:8000

```


