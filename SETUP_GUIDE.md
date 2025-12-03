# Adyapana - Setup Guide

## Automatic File Upload Setup

The website can automatically upload files to the correct Google Drive folder based on the subject selected. Here's how to set it up:

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (e.g., "Adyapana Uploads")
3. Enable the **Google Drive API**:
   - Go to "APIs & Services" → "Enable APIs"
   - Search for "Google Drive API" and enable it

### Step 2: Create Service Account

1. Go to "IAM & Admin" → "Service Accounts"
2. Click "Create Service Account"
3. Name: `adyapana-uploader`
4. Grant role: No role needed (we'll grant access via Drive sharing)
5. Click "Done"
6. Click on the service account email
7. Go to "Keys" tab → "Add Key" → "Create new key" → JSON
8. Save the downloaded JSON file securely

### Step 3: Share Drive Folders with Service Account

**Important:** Share each Drive folder with the service account email as **Editor**

1. Open each Google Drive folder
2. Click "Share"
3. Add the service account email (looks like: `name@project.iam.gserviceaccount.com`)
4. Set permission to **Editor**
5. Click "Send"

### Step 4: Create Environment File

Create a file called `.env.local` in the project root with:

```env
# Google Service Account
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY= "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCOnQw+TqESxqr8\nXtVdF1lV7FdRy9xXnSU2tPvV95cHo0uQ4raRbapLUFmYpvkPOjYw6WOwpPld6VfJ\nEvYWZedrzmjibnshf3Bg4jTbXtUt4oo26NaCJRy2t9gxSkQFCLDlvabMMJFnWSIJ\nIKbaNnJcttoBozJP2D/N572csAP2cqiSDNF/YDMVTXpkJcRzJyZBB3Y9SBSSaSWs\nLo+vjfKz9tNdK/10Y7Gxl+Vx331Td0UXEN0UaDdslWqibAmlKZrQERz9iwCdTHQk\nhVLxXELfnYGqnqz2sPjUn/aE4qVCiGCtzqcBDazxbe3MOFtCSVI338GF19DytyQk\nSetwFlrHAgMBAAECggEAKjQys9usEjTl0/KynK50uxdKjgPQ7MKuCR8NKfhv4wxB\nqBpXofj8vPYF1cWQDiARem8PF+7ydwa/eltYpS86Ca7XXi8I1FR06s72inbpin8w\nnOhR1sjp0u7cFVYfhAfa5do2mtXCqf14M5BMoGYdeO+J25Myp+tcknBCrjRur8c0\nkrhmjlTyiYjA64Qg9n4SpDWI8llhpD/2Tjp4C4AUFPXA43WlfTTOozhouIAnRGxC\n618DnhL3Fw7bvEw3YOSKlaHYXcuyCzSH0ShppWp+OGn0EriBfAWLGhyVqioaxeWc\ngmeK8F+Jp+NYIkP/3YGJDCSwcY6H1YyWqw8eGjIU/QKBgQDFPCzsGVe5rhQra5oj\nFY/KzF9U7u4jrRVUveLBptJ61QdGY0eFsxpe6RXA83+ChMDPYuEnK9WPQzRt4Fd/\ng1CcCGDlpIeV0Uy+6k2O84Bl6/5F+ea6khk8nnSqGhvQncwZvpLUYKM1GEsUDz87\npyREkFZjbov3tZFhF0JSBdvrDQKBgQC5GrAXC722nC75SeF+f0hlNozbjeBzq1cR\nsTfFUqD0qodhnNJMmB6Xd5ME4ApiHP/RmQyAMQSUo5umL7XWKsxMKRbZkAPtb09m\ne4vbOahqcIjH4ZNtabvNMNxEzDFiqH4FtwkeVYqWy7E8Cndh95AslCtsueO33oHc\nALlPaewYIwKBgBKzf/bq+Dxs2xC65SSKeNXbxvZAqWfMk4czcfq2nKJ07HmqFDAD\nKW7yXtOqwt5XRAjl8T9LkrZAwwngCavXgZ8p1DYyAYEdFU/M24nAYN5JIBT2ewAZ\ntjbfN2ShkR2YuK+AOF/WweLY6NWAFJjNYkz1+pr28mKMXrp8ABfS4mVJAoGAa8eu\nYLzlaj7m2yC5u/5BGS36Np0V5EQQHq0h3DOQpOXmjl/R0+d/aJKneF87rIVWL6T+\nMmZYVHQvXUTKjDm/W1lRhLzmjIoToYiulqer+M4t1rTyMvMt9vxMRYLf/qI9Pvak\nyJTmbYeNW3h8qv6LZGmiH1zdy2I0GvYQ8LysTCECgYBaNbpkA9NhEbMlmqq8tXYh\n3Bo+lYE5V7r6+8/rYBd8f8FLDWLm5h2nHdUjLCnlJPJ6mumgd17TZFynWzHAdi1u\nLFqWXYMg+TRA8b6qyWMzU3lJ421pwQhzaaB71h/BYh1n7NIkbU72s5lKZra8khQq\n9Mmuo9UL8U/YpZ+8LfdqmA==\n-----END PRIVATE KEY-----\n",

# O Level Folder IDs (extract from your URLs)
DRIVE_OL_MATH=1qKkbBBnWEx0qiJbl2KEYgYYZI5ixdZRw
DRIVE_OL_SCIENCE=1TvVeNqHH85ZvMIU9SZZvh1mH2jaNRXio
DRIVE_OL_ENGLISH=1j1FW28SPk17aGbjl1_bVehlzSLXVux89
DRIVE_OL_SINHALA=1Eq7IJL9brb6z4IwrAhwlCFHfJ0b1DxVH
DRIVE_OL_TAMIL=1bLJUjYxxqmoym8yAaWUNdAaPxYgcbVFG
DRIVE_OL_HISTORY=15OUOqg7nW1De4i1RgkQ_oSTUB856OQ8d
DRIVE_OL_COMMERCE=1tj8yvsguIEJVXYP-IQQH3HxQTriAPBtu
DRIVE_OL_ICT=1AJGUPzWUbUnIxQ_Kpsk4eOkKq4XXghm3
DRIVE_OL_CIVICS=1oJpQn1sUIubBrZdnVirknd6BBAHcITc0
DRIVE_OL_DRAMA=1ADD8t9yuzRR6aXAAnjsMRscm5uXE4mrd
DRIVE_OL_EASTERN_MUSIC=1AxpxPs5yxX-sGNXZ1api86WXmM9iUBU_
DRIVE_OL_WESTERN_MUSIC=1YIyBzwjrx5ybNrTB7EhpVtb5imq7s_W0
DRIVE_OL_HEALTH=1EeO9BVUVYWszWId04PiYZ4u-W3c7EMvj
DRIVE_OL_RELIGION=1sIazfuMUh3J1iygu4FqOfYBlTIw6fS-w
DRIVE_OL_OTHER=1YngYl4PgbUaRSL26i0ptKm9LqQCZahGo

# A Level Folder IDs
DRIVE_AL_SCIENCE=16F-jLdMIXv6nJEqikDUIFpT4T87ilXHp
DRIVE_AL_COMMERCE=12ypTCB-QqONNrMsgYs8DDDvheNmppCw9
DRIVE_AL_ART=1oPZXbgxMhMqi_3GPnYRFvrfENqTdaxYy
DRIVE_AL_OTHER=1lUS8cksdCPZfdo_qIMa62R5hUV5cvV5Q
```

### Getting the Private Key

From the JSON file you downloaded, copy the `private_key` value. It will look like:
```
"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBg..."
```

Copy everything between the quotes, including the `\n` characters.

### Step 5: Test the Upload

1. Restart the development server: `npm run dev`
2. Go to the Upload page
3. Select a level, subject, and file
4. Upload!

The file will automatically appear in the correct Google Drive folder.

## How It Works

```
User selects: O Level → Mathematics → file.pdf
      ↓
Website sends to API: /api/upload
      ↓
API checks: DRIVE_OL_MATH = 1qKkbBBnWEx0qiJbl2KEYgYYZI5ixdZRw
      ↓
Google Drive API uploads file to that folder
      ↓
File appears in Mathematics folder automatically!
```

## Folder ID Reference

| Subject | Environment Variable | Your Folder ID |
|---------|---------------------|----------------|
| O/L Mathematics | DRIVE_OL_MATH | 1qKkbBBnWEx0qiJbl2KEYgYYZI5ixdZRw |
| O/L Science | DRIVE_OL_SCIENCE | 1TvVeNqHH85ZvMIU9SZZvh1mH2jaNRXio |
| O/L English | DRIVE_OL_ENGLISH | 1j1FW28SPk17aGbjl1_bVehlzSLXVux89 |
| O/L Sinhala | DRIVE_OL_SINHALA | 1Eq7IJL9brb6z4IwrAhwlCFHfJ0b1DxVH |
| O/L Tamil | DRIVE_OL_TAMIL | 1bLJUjYxxqmoym8yAaWUNdAaPxYgcbVFG |
| O/L History | DRIVE_OL_HISTORY | 15OUOqg7nW1De4i1RgkQ_oSTUB856OQ8d |
| O/L Commerce | DRIVE_OL_COMMERCE | 1tj8yvsguIEJVXYP-IQQH3HxQTriAPBtu |
| O/L ICT | DRIVE_OL_ICT | 1AJGUPzWUbUnIxQ_Kpsk4eOkKq4XXghm3 |
| O/L Civics | DRIVE_OL_CIVICS | 1oJpQn1sUIubBrZdnVirknd6BBAHcITc0 |
| O/L Drama | DRIVE_OL_DRAMA | 1ADD8t9yuzRR6aXAAnjsMRscm5uXE4mrd |
| O/L Eastern Music | DRIVE_OL_EASTERN_MUSIC | 1AxpxPs5yxX-sGNXZ1api86WXmM9iUBU_ |
| O/L Western Music | DRIVE_OL_WESTERN_MUSIC | 1YIyBzwjrx5ybNrTB7EhpVtb5imq7s_W0 |
| O/L Health | DRIVE_OL_HEALTH | 1EeO9BVUVYWszWId04PiYZ4u-W3c7EMvj |
| O/L Religion | DRIVE_OL_RELIGION | 1sIazfuMUh3J1iygu4FqOfYBlTIw6fS-w |
| O/L Other | DRIVE_OL_OTHER | 1YngYl4PgbUaRSL26i0ptKm9LqQCZahGo |
| A/L Science | DRIVE_AL_SCIENCE | 16F-jLdMIXv6nJEqikDUIFpT4T87ilXHp |
| A/L Commerce | DRIVE_AL_COMMERCE | 12ypTCB-QqONNrMsgYs8DDDvheNmppCw9 |
| A/L Art | DRIVE_AL_ART | 1oPZXbgxMhMqi_3GPnYRFvrfENqTdaxYy |
| A/L Other | DRIVE_AL_OTHER | 1lUS8cksdCPZfdo_qIMa62R5hUV5cvV5Q |

## Security Notes

- Users can only upload to the folders configured in the environment
- They cannot delete or modify existing files
- All files are set to "Anyone with link can view" automatically
- The service account credentials are stored server-side only
