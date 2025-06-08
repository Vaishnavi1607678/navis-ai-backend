# navis-ai-backend
A minimal **Node.js backend** with two routes:
- `/health` → `{ "status": "OK" }`
- `/ai` → `{ "message": "AI Ready" }`

This backend is:
- Dockerized
- Deployed on Kubernetes 
- Integrated with CI/CD via GitHub Actions 
- Infrastructure provisioned using Terraform 

## How to Run

### 1. Local
```bash
node index.js
````

**Output:**

* [http://localhost:3000/health](http://localhost:3000/health) → `{ "status": "OK" }`
* [http://localhost:3000/ai](http://localhost:3000/ai) → `{ "message": "AI Ready" }`

---

### 2. Docker

```bash
docker build -t navis-ai-backend .
docker run -p 3000:3000 navis-ai-backend
```

---

### 3. CI/CD (GitHub Actions)

* Runs ESLint ✔️
* Mock Tests ✔️
* Builds Docker image ✔️
* Pushes to Docker Hub ✔️

---

### 4. Kubernetes

```bash
kubectl apply -f k8s/
```

**Access App:**

```bash
curl http://<minikube_ip>/health
curl http://<minikube_ip>/ai
```

---

### 5. Terraform (AWS EKS)

```bash
cd terraform
terraform init
terraform apply
```

Output:
EKS cluster + IAM setup complete ✅

### 6. Monitoring
* Prometheus + Grafana + Loki via Helm


