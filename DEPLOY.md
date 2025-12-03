# Deploy Adyapana to Google Cloud Run

## Prerequisites
1. Google Cloud account: https://cloud.google.com/
2. Google Cloud CLI installed: https://cloud.google.com/sdk/docs/install

---

## Step-by-Step Deployment

### 1. Install Google Cloud CLI
Download and install from: https://cloud.google.com/sdk/docs/install

### 2. Login to Google Cloud
Open terminal/PowerShell and run:
```bash
gcloud auth login
```

### 3. Create a New Project (or use existing)
```bash
gcloud projects create adyapana-edu --name="Adyapana Education"
gcloud config set project adyapana-edu
```

### 4. Enable Required Services
```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
```

### 5. Deploy to Cloud Run (One Command!)
Navigate to your project folder and run:
```bash
gcloud run deploy adyapana --source . --region=asia-south1 --allow-unauthenticated
```

**Options explained:**
- `--source .` = Build from current directory
- `--region=asia-south1` = Mumbai (closest to Sri Lanka). Other options: `us-central1`, `europe-west1`
- `--allow-unauthenticated` = Public access (anyone can view)

### 6. Get Your URL! 🎉
After deployment, you'll see:
```
Service URL: https://adyapana-xxxxx-el.a.run.app
```

This is your live website URL!

---

## Updating the Website

Whenever you make changes, just run:
```bash
gcloud run deploy adyapana --source . --region=asia-south1 --allow-unauthenticated
```

---

## Custom Domain (Optional - Later)

If you want a custom domain like `adyapana.lk`:
1. Go to Cloud Run in Google Cloud Console
2. Click on your service
3. Go to "Domain Mappings"
4. Add your domain

---

## Estimated Costs

| Usage | Cost |
|-------|------|
| First 2 million requests/month | FREE |
| After that | ~$0.40 per million |

**For an educational site, you'll likely stay in the free tier!**

---

## Troubleshooting

**Build fails?**
```bash
# Try building locally first
npm run build
```

**Permission denied?**
```bash
gcloud auth login
gcloud config set project adyapana-edu
```

**Need to see logs?**
```bash
gcloud run logs read --service=adyapana --region=asia-south1
```

