# Kanbanner
This project is a kanban board built with React. Check out the [page](https://kanbanner-cbf56.web.app/), deployed with Firebase. Be sure to read the demo section below for test credentials.
![alt text](./public/screenshots/home.png "Home page")

## Demo
Users can signup with a valid email and password. You can use these test credentials to try ANYTHING out:
- username: `r487wang@uwaterloo.ca`
- password: `12345678`
![alt text](./public/screenshots/login.png "Login sidebar")

![alt text](./public/screenshots/kanban-board.png "Kanban board")

Click **create task** and enter a task name. Optionally, enter a task description. The task will appear on the board.
![alt text](./public/screenshots/create-task.png "Creating a new task")

Try dragging a task to another column. If you want a fresh start, click **clear board**. 

## Deployment
In the repository's [deployment folder](./deployment), there is a [dockerfile](./deployment/Dockerfile) as well as a [docker-compose file](./deployment/docker-compose.yml).

Kubernetes manifests can be found in the [kubernetes subfolder](./deployment/kubernetes), where there are configurations for a [Service](./deployment/kubernetes/Service.yaml), a [ReplicaSet](./deployment/kubernetes/ReplicaSet.yaml), and a [Deployment](./deployment/kubernetes/Deployment.yaml). A [bash script](./deployment/kubernetes/deploy.sh) allows these resources to be conveniently created, updated, or deleted.
