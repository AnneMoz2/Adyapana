# Deploy Adyapana to Google Cloud Run

## Prerequisites

1. [Google Cloud Account](https://cloud.google.com/)
2. [Google Cloud CLI (gcloud)](https://cloud.google.com/sdk/docs/install) installed
3. A Google Cloud project (you can use the same one as your service account)

## Step 1: Install Google Cloud CLI

Download and install from: https://cloud.google.com/sdk/docs/install

Then login:
```bash
gcloud auth login
```

## Step 2: Set Your Project

```bash
gcloud config set project YOUR_PROJECT_ID
```

Replace `YOUR_PROJECT_ID` with your Google Cloud project ID (e.g., `adyapana-uplo`).

## Step 3: Enable Required APIs

```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com
```

## Step 4: Deploy to Cloud Run

Run this single command from your project folder:

```bash
gcloud run deploy adyapana --source . --region asia-south1 --allow-unauthenticated
```

This will:
- Build your Docker image
- Push it to Google Container Registry
- Deploy to Cloud Run
- Give you a public URL

**Choose region closest to Sri Lanka:**
- `asia-south1` (Mumbai) - Recommended
- `asia-southeast1` (Singapore)

## Step 5: Set Environment Variables

After deployment, add your secrets:

### Option A: Via Google Cloud Console (Easier)

1. Go to [Cloud Run Console](https://console.cloud.google.com/run)
2. Click on your `adyapana` service
3. Click **"Edit & Deploy New Revision"**
4. Scroll to **"Variables & Secrets"**
5. Click **"Add Variable"** and add each one:

| Name | Value |
|------|-------|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | `adyapana-uploader@your-project.iam.gserviceaccount.com` |
| `GOOGLE_PRIVATE_KEY` | `-----BEGIN PRIVATE KEY-----\n...` |
| `DRIVE_OL_MATH` | `1qKkbBBnWEx0qiJbl2KEYgYYZI5ixdZRw` |
| `DRIVE_OL_SCIENCE` | `1TvVeNqHH85ZvMIU9SZZvh1mH2jaNRXio` |
| `DRIVE_OL_ENGLISH` | `1j1FW28SPk17aGbjl1_bVehlzSLXVux89` |
| `DRIVE_OL_SINHALA` | `1Eq7IJL9brb6z4IwrAhwlCFHfJ0b1DxVH` |
| `DRIVE_OL_TAMIL` | `1bLJUjYxxqmoym8yAaWUNdAaPxYgcbVFG` |
| `DRIVE_OL_HISTORY` | `15OUOqg7nW1De4i1RgkQ_oSTUB856OQ8d` |
| `DRIVE_OL_COMMERCE` | `1tj8yvsguIEJVXYP-IQQH3HxQTriAPBtu` |
| `DRIVE_OL_ICT` | `1AJGUPzWUbUnIxQ_Kpsk4eOkKq4XXghm3` |
| `DRIVE_OL_CIVICS` | `1oJpQn1sUIubBrZdnVirknd6BBAHcITc0` |
| `DRIVE_OL_DRAMA` | `1ADD8t9yuzRR6aXAAnjsMRscm5uXE4mrd` |
| `DRIVE_OL_EASTERN_MUSIC` | `1AxpxPs5yxX-sGNXZ1api86WXmM9iUBU_` |
| `DRIVE_OL_WESTERN_MUSIC` | `1YIyBzwjrx5ybNrTB7EhpVtb5imq7s_W0` |
| `DRIVE_OL_HEALTH` | `1EeO9BVUVYWszWId04PiYZ4u-W3c7EMvj` |
| `DRIVE_OL_RELIGION` | `1sIazfuMUh3J1iygu4FqOfYBlTIw6fS-w` |
| `DRIVE_OL_OTHER` | `1YngYl4PgbUaRSL26i0ptKm9LqQCZahGo` |
| `DRIVE_AL_SCIENCE` | `16F-jLdMIXv6nJEqikDUIFpT4T87ilXHp` |
| `DRIVE_AL_COMMERCE` | `12ypTCB-QqONNrMsgYs8DDDvheNmppCw9` |
| `DRIVE_AL_ART` | `1oPZXbgxMhMqi_3GPnYRFvrfENqTdaxYy` |
| `DRIVE_AL_OTHER` | `1lUS8cksdCPZfdo_qIMa62R5hUV5cvV5Q` |

6. Click **"Deploy"**

### Option B: Via Command Line

```bash
gcloud run services update adyapana --region asia-south1 \
  --set-env-vars="GOOGLE_SERVICE_ACCOUNT_EMAIL=your-email@project.iam.gserviceaccount.com" \
  --set-env-vars="DRIVE_OL_MATH=1qKkbBBnWEx0qiJbl2KEYgYYZI5ixdZRw" \
  # ... add all other variables
```

### Option C: Using Secret Manager (Most Secure)

For the private key, use Google Secret Manager:

```bash
# Create secret
echo -n "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n" | \
  gcloud secrets create google-private-key --data-file=-

# Grant access to Cloud Run
gcloud secrets add-iam-policy-binding google-private-key \
  --member="serviceAccount:YOUR_PROJECT_NUMBER-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"

# Reference in Cloud Run
gcloud run services update adyapana --region asia-south1 \
  --set-secrets="GOOGLE_PRIVATE_KEY=google-private-key:latest"
```

## Step 6: Get Your URL

After deployment, you'll get a URL like:
```
https://adyapana-xxxxx-xx.a.run.app
```

This is your live website! 🎉

## Custom Domain (Optional)

To use your own domain (e.g., `adyapana.lk`):

1. Go to Cloud Run Console
2. Click your service
3. Click **"Manage Custom Domains"**
4. Add your domain
5. Update DNS records as instructed

## Costs

Cloud Run is **pay-per-use**:
- Free tier: 2 million requests/month
- After that: ~$0.40 per million requests
- For an educational site, likely **free or very cheap**

## Updating the Website

To deploy updates:

```bash
gcloud run deploy adyapana --source . --region asia-south1
```

That's it! Your website is now live on Google Cloud! 🚀

