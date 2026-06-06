# 👻 Ghostbusters API

Detect ghost job postings before wasting your time.

Ghostbusters API helps job seekers validate whether a job posting is active, removed, or potentially a ghost job.

---

## Supported Platforms

> Gupy

> Greenhouse

> Lever

---

## How It Works

Paste a job URL:

```text
https://company.gupy.io/job/123456
```

Ghostbusters will:

1. Identify the platform
2. Analyze the vacancy
3. Verify whether the job is active
4. Return a status

Example response:

```json
{
  "status": "real",
  "found": true,
  "platform": "gupy"
}
```

---

## Tech Stack

### Backend

- Node.js
- Fastify
- Axios

### Scraping

- Python
- Playwright

### Frontend

- HTML
- JavaScript

---

## Installation

Clone the repository:

```bash
git clone https://github.com/balboaid/ghostbusters-api.git
```

Install dependencies:

```bash
npm install
```

Install Python dependencies:

```bash
pip install playwright
python -m playwright install
```

Start the API:

```bash
npm start
```

---

## Project Structure

```text
api/
├── scrappers/
│   ├── gupy.py
│   ├── greenhouse.js
│   └── lever.js
│
├── utils/
│   └── detectGhost.js
│
└── index.js

frontend/
└── index.html
```

---

## Current Status

🚧 Alpha MVP

Currently validating:

- Gupy
- Greenhouse
- Lever

Future roadmap:

- Ghost Score
- Company Rankings
- Historical Tracking
- Browser Extension
- Public API

---

## Mission

Job seekers should not waste their time applying for jobs that do not exist.

Ghostbusters was created to increase transparency in online recruiting.

---

## Author

Miguel Fredman Nwafor

BALBOAiD

https://github.com/balboaid