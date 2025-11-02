# Deploy Two Node.js Microservices on K3s + API Gateway Routing

## Overview
This task demonstrates the deployment of **two Node.js microservices** on a **K3s Kubernetes cluster**, exposing them via **NodePort services**, and integrating with **AWS API Gateway** for HTTPS access and clean REST paths using a **custom domain**.

Both services were containerized using Docker and pushed to **Amazon ECR**.  
Finally, the API Gateway routes `/service-1` and `/service-2` requests to the respective Kubernetes services.

---

## Tech Stack
| Component | Technology Used |
|------------|-----------------|
| Backend | Node.js + Express |
| Containerization | Docker |
| Container Registry | AWS Elastic Container Registry (ECR) |
| Orchestration | K3s (Lightweight Kubernetes) |
| Networking | NodePort Services |
| API Gateway | AWS API Gateway (Regional) |
| Domain & SSL | Custom Domain + HTTPS (via AWS) |

---

## Step 1 – Node.js Microservices Setup
Two lightweight Express apps were created:

- **Service 1** → Returns *"Hello from Service 1"*  
- **Service 2** → Returns *"Hello from Service 2"*

Both applications were Dockerized and tested locally before being pushed to AWS ECR.


---

## Step 2 – Docker Image Build & Push to ECR
Each service was built and pushed to its respective ECR repository.

![ECR Diagram](/diagrams/ECR.png)

---

## Step 3 – Deploy on K3s
Both services were deployed to **K3s** using `Deployment` and `Service` manifests.

| Service | NodePort | Status |
|----------|-----------|--------|
| Service 1 | 30001 | Running ✅ |
| Service 2 | 30002 | Running ✅ |

![Alt Text](/diagrams/kubectl%20pods.png)

![Alt Text](/diagrams/curl%20cmd.png)

---

## Step 4 – API Gateway Routing
Created a **REST API** in AWS API Gateway to expose both services through a unified API endpoint.

### Routes
| Path | Target | Description |
|------|---------|-------------|
| `/service-1` | `http://18.212.88.195:30001/` | Routes to Service 1 |
| `/service-2` | `http://18.212.88.195:30002/` | Routes to Service 2 |

![Alt Text](/diagrams/resouce%20tree.png)

---

## Step 5 – Custom Domain + HTTPS
Attempted to test the API endpoint through the custom domain:
curl https://reactrocket.codes/service-1

Output:

{"message":"Missing Authentication Token"}

Note: At this stage, the request returned a “Missing Authentication Token” error.

This issue was noted and is pending resolution.

![Alt Text](/diagrams/custom-domain%20.png)

---

