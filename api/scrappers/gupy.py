import sys
import json
from playwright.sync_api import sync_playwright

def scrape_gupy(url):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.goto(url, timeout=60000)

        # tenta encontrar json interno do Gupy
        try:
            data = page.evaluate("""() => {
                const script = document.querySelector('script[id="__NEXT_DATA__"]')
                return script ? JSON.parse(script.textContent) : null
            }""")

            if not data:
                return {"status": "ghost", "found": False, "reason": "no json found"}

            # vaga ativa?
            active = data["props"]["pageProps"].get("job") is not None

            return {
                "status": "real" if active else "ghost",
                "found": active,
                "platform": "gupy"
            }
        except:
            return {"status": "ghost", "found": False, "reason": "evaluation error"}

print(json.dumps(scrape_gupy(sys.argv[1])))
